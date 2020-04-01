import React from 'react';

import { Modal, withSpinner } from 'components';
import { ManualTransactionForm } from 'containers/Modals/ManualTransactionModals/forms';

import {
  IWithLoadTransactionTypes,
  IWithModal,
  withLoadTransactionTypes,
  withModal,
} from 'HOCs';

import { modalNamesConst, modalTypesConst, uiItemsConst } from 'consts';

import PageTitle from 'containers/PageTemplate/PageTitle';

import {
  IPayloadManualTransactionModal,
  THandleGetDictionaryCurrencies,
  THandleMakeLimitAdjustment,
  THandleMakeTransaction,
} from 'store';

import { ISelectValue } from 'types';

interface IManualTransactionModal extends IWithModal, IWithLoadTransactionTypes {
  currenciesOptions: Array<ISelectValue>;
  getCurrencies: THandleGetDictionaryCurrencies;
  isCurrenciesLoading: boolean;
  isLimitAdjustment: boolean;
  makeLimitAdjustment: THandleMakeLimitAdjustment;
  makeTransaction: THandleMakeTransaction;
  modalPayload: IPayloadManualTransactionModal;
}
const modalName = modalNamesConst.MANUAL_TRANSACTION;

const ManualTransactionModal: React.FC<IManualTransactionModal> = ({
  closeModal,
  currenciesOptions,
  getCurrencies,
  isCurrenciesLoading,
  isLimitAdjustment,
  isTransTypesLoading,
  limitAdjTypeOptions,
  makeLimitAdjustment,
  makeTransaction,
  manualTransTypesOptions,
  modalPayload,
}) => {
  React.useEffect(
    () => {
      getCurrencies();
    },
    [getCurrencies]
  );

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
    () => Boolean(initialFormValues.accountId),
    [initialFormValues]
  );

  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  const currentPath = React.useMemo(
    () => isLimitAdjustment ? uiItemsConst.LIMIT_ADJUSTMENT : uiItemsConst.MANUAL_TRANSACTION,
    [isLimitAdjustment]
  );

  return (
    <Modal
      name={modalName}
      type={modalTypesConst.VIEWING}
      containerWidth="550px"
      isBluredBackdrop={!initialFormValues.accountId}
    >
      <PageTitle
        title={modalTitle}
        pageId={currentPath}
      />
      <ManualTransactionForm
        currenciesOptions={currenciesOptions}
        initialValues={initialFormValues}
        isCurrenciesLoading={isCurrenciesLoading}
        isLimitAdjustment={isLimitAdjustment}
        isReadonly={isReadonlyId}
        isTransTypesLoading={isTransTypesLoading}
        makeLimitAdjustment={makeLimitAdjustment}
        makeTransaction={makeTransaction}
        onCancel={handleOnCancel}
        transactionTypes={transactionTypes}
      />
    </Modal>
  );
};

const withTransactionTypes = withLoadTransactionTypes(ManualTransactionModal);

export default withSpinner({
  isFixed: true,
})(withModal(withTransactionTypes));
