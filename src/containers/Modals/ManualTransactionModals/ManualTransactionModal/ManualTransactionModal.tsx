import React from 'react';

import { Modal, withSpinner } from 'components';
import { ManualTransactionForm } from 'containers/Modals/ManualTransactionModals/forms';

import {
  withLoadTransactionTypes,
  WithLoadTransactionTypesProps,
  withModal,
  WithModalProps,
} from 'HOCs';

import { modalNamesConst, modalTypesConst, uiItemsConst } from 'consts';

import PageTitle from 'containers/PageTemplate/PageTitle';

import {
  HandleMakeLedgerLimitAdjustment,
  HandleMakeLedgerTransaction,
  PayloadManualTransactionModal,
} from 'store';

import { SelectValue } from 'types';

interface ManualTransactionModalProps extends WithModalProps, WithLoadTransactionTypesProps {
  makeLedgerTransaction: HandleMakeLedgerTransaction;
  makeLedgerLimitAdjustment: HandleMakeLedgerLimitAdjustment;
  modalPayload: PayloadManualTransactionModal;
  currenciesOptions: Array<SelectValue>;
  isLimitAdjustment: boolean;
}
const modalName = modalNamesConst.MANUAL_TRANSACTION;

const ManualTransactionModal: React.FC<ManualTransactionModalProps> = ({
  makeLedgerTransaction,
  makeLedgerLimitAdjustment,
  manualTransactionTypesOptions,
  limitAdjustmentTypeOptions,
  isTransactionTypesLoading,
  modalPayload,
  isLimitAdjustment,
  closeModal,
  currenciesOptions,
}) => {
  const modalTitle = React.useMemo(
    () => isLimitAdjustment ? 'Limit Adjustment' : 'Manual Transaction',
    [isLimitAdjustment]
  );

  const transactionTypes = React.useMemo(
    () => isLimitAdjustment ? limitAdjustmentTypeOptions : manualTransactionTypesOptions,
    [isLimitAdjustment, manualTransactionTypesOptions, limitAdjustmentTypeOptions]
  );

  const initialFormValues = React.useMemo(
    () => {
      if (!modalPayload) {
        return null;
      }

      const {
        accountId,
        balanceLimit,
        balanceLimitShared,
        currencyCode,
        isLimitAdjustmentMode,
      } = modalPayload;

      const currency = currenciesOptions.find(item => item.value === currencyCode);

      const transactionType = isLimitAdjustmentMode
        && transactionTypes
        && transactionTypes[0];

      return {
        accountId,
        currencyCode: currency,
        balanceLimit,
        balanceLimitShared,
        transactionType,
      };
    },
    [currenciesOptions, modalPayload, transactionTypes]
  );

  const isReadonlyId = React.useMemo(
    () => {
      const id = modalPayload && modalPayload.accountId;

      return Boolean(id);
    },
    [modalPayload]
  );

  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  const currentPath = React.useMemo(
    () => isLimitAdjustment
    ? uiItemsConst.LEDGER_LIMIT_ADJUSTMENT
    : uiItemsConst.LEDGER_MANUAL_TRANSACTIONS,
    [isLimitAdjustment]
  );

  return (
    <Modal
      name={modalName}
      type={modalTypesConst.VIEWING}
      containerWidth="550px"
    >
      <PageTitle
        title={modalTitle}
        pageId={currentPath}
      />
      <ManualTransactionForm
        makeLedgerTransaction={makeLedgerTransaction}
        makeLedgerLimitAdjustment={makeLedgerLimitAdjustment}
        initialValues={initialFormValues}
        onCancel={handleOnCancel}
        isLimitAdjustment={isLimitAdjustment}
        transactionTypes={transactionTypes}
        isReadonly={isReadonlyId}
        isTransactionTypesLoading={isTransactionTypesLoading}
      />
    </Modal>
  );
};

const withTransactionTypes = withLoadTransactionTypes(ManualTransactionModal);

export default withSpinner({
  isFixed: true,
})(withModal(withTransactionTypes));
