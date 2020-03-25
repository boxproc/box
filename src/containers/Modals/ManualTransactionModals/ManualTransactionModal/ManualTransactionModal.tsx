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

import { ISelectValue } from 'types';

interface ManualTransactionModalProps extends WithModalProps, WithLoadTransactionTypesProps {
  currenciesOptions: Array<ISelectValue>;
  isLimitAdjustment: boolean;
  makeLimitAdjustment: HandleMakeLedgerLimitAdjustment;
  makeTransaction: HandleMakeLedgerTransaction;
  modalPayload: PayloadManualTransactionModal;
}
const modalName = modalNamesConst.MANUAL_TRANSACTION;

const ManualTransactionModal: React.FC<ManualTransactionModalProps> = ({
  closeModal,
  currenciesOptions,
  isLimitAdjustment,
  isTransTypesLoading,
  limitAdjTypeOptions,
  makeLimitAdjustment,
  makeTransaction,
  manualTransTypesOptions,
  modalPayload,
}) => {
  const modalTitle = React.useMemo(
    () => isLimitAdjustment ? 'Limit Adjustment' : 'Manual Transaction',
    [isLimitAdjustment]
  );

  const transactionTypes = React.useMemo(
    () => isLimitAdjustment ? limitAdjTypeOptions : manualTransTypesOptions,
    [isLimitAdjustment, manualTransTypesOptions, limitAdjTypeOptions]
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
        makeTransaction={makeTransaction}
        makeLimitAdjustment={makeLimitAdjustment}
        initialValues={initialFormValues}
        onCancel={handleOnCancel}
        isLimitAdjustment={isLimitAdjustment}
        transactionTypes={transactionTypes}
        isReadonly={isReadonlyId}
        isTransTypesLoading={isTransTypesLoading}
      />
    </Modal>
  );
};

const withTransactionTypes = withLoadTransactionTypes(ManualTransactionModal);

export default withSpinner({
  isFixed: true,
})(withModal(withTransactionTypes));
