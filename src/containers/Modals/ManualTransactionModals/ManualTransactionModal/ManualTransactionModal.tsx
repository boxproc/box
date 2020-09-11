import React from 'react';

import { Modal, withSpinner } from 'components';
import { ManualTransactionForm } from 'containers/Modals/ManualTransactionModals/forms';

import {
  IWithLoadTransactionTypes,
  IWithModal,
  withLoadTransactionTypes,
  withModal,
} from 'HOCs';

import {
  modalNamesConst,
  modalTypesConst,
  transactionTypesIdsConst,
  uiItemsConst,
} from 'consts';

import PageTitle from 'containers/PageTemplate/PageTitle';

import {
  IPayloadManualTransactionModal,
  THandleGetDictionaryCurrencies,
  THandleGetDirectDebitMandates,
  THandleMakeLimitAdjustment,
  THandleMakeTransaction,
  TResetDirectDebitMandates,
} from 'store';

import { ISelectValue } from 'types';

interface IManualTransactionModal extends IWithModal, IWithLoadTransactionTypes {
  accountIdValue: number;
  currenciesOptions: Array<ISelectValue>;
  getCurrencies: THandleGetDictionaryCurrencies;
  getDirectDebitMandates: THandleGetDirectDebitMandates;
  isCurrenciesLoading: boolean;
  isDirectDebitMandatesLoading: boolean;
  isLimitAdjustment: boolean;
  makeLimitAdjustment: THandleMakeLimitAdjustment;
  makeTransaction: THandleMakeTransaction;
  mandateOptions: Array<ISelectValue>;
  modalPayload: IPayloadManualTransactionModal;
  trTypeValue: ISelectValue;
  resetDirectDebitMandates: TResetDirectDebitMandates;
}
const modalName = modalNamesConst.MANUAL_TRANSACTION;

const ManualTransactionModal: React.FC<IManualTransactionModal> = ({
  accountIdValue,
  closeModal,
  currenciesOptions,
  getCurrencies,
  getDirectDebitMandates,
  isCurrenciesLoading,
  isDirectDebitMandatesLoading,
  isLimitAdjustment,
  isTransTypesLoading,
  limitAdjTypeOptions,
  makeLimitAdjustment,
  makeTransaction,
  mandateOptions,
  manualTransTypesOptions,
  modalPayload,
  trTypeValue,
  resetDirectDebitMandates,
}) => {
  React.useEffect(
    () => {
      getCurrencies();
    },
    [getCurrencies]
  );

  React.useEffect(
    () => {
      return () => resetDirectDebitMandates();
    },
    [resetDirectDebitMandates]
  );

  const isDirectDebitTrType = React.useMemo(
    () => trTypeValue && trTypeValue.value === transactionTypesIdsConst.DIRECT_DEBIT,
    [trTypeValue]
  );

  React.useEffect(
    () => {
      if (accountIdValue && isDirectDebitTrType) {
        getDirectDebitMandates({
          accountId: accountIdValue,
          forAccount: true,
         });
      }
    },
    [getDirectDebitMandates, accountIdValue, isDirectDebitTrType]
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
      containerWidth="420px"
      isBluredBackdrop={!initialFormValues.accountId}
    >
      <PageTitle
        title={modalTitle}
        pageId={currentPath}
      />
      <ManualTransactionForm
        currenciesOptions={currenciesOptions}
        mandateOptions={mandateOptions}
        initialValues={initialFormValues}
        isCurrenciesLoading={isCurrenciesLoading}
        isDirectDebitMandatesLoading={isDirectDebitMandatesLoading}
        isLimitAdjustment={isLimitAdjustment}
        isReadonly={isReadonlyId}
        isTransTypesLoading={isTransTypesLoading}
        makeLimitAdjustment={makeLimitAdjustment}
        makeTransaction={makeTransaction}
        onCancel={handleOnCancel}
        transactionTypes={transactionTypes}
        isDirectDebitTrType={isDirectDebitTrType}
        accountIdValue={accountIdValue}
      />
    </Modal>
  );
};

const withTransactionTypes = withLoadTransactionTypes(ManualTransactionModal);

export default withSpinner({
  isFixed: true,
})(withModal(withTransactionTypes));
