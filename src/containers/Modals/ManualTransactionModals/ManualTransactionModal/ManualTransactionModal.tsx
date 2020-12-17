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
  isTransTypesLoading,
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

  const initialFormValues = React.useMemo(
    () => {
      if (!modalPayload) {
        return null;
      }

      const {
        accountId,
        currencyCode,
      } = modalPayload;

      const currency = currenciesOptions.find(item => item.value === currencyCode);

      return {
        accountId,
        currencyCode: currency,
      };
    },
    [currenciesOptions, modalPayload]
  );

  const isReadonlyId = React.useMemo(
    () => Boolean(initialFormValues && initialFormValues.accountId),
    [initialFormValues]
  );

  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  return (
    <Modal
      name={modalName}
      type={modalTypesConst.VIEWING}
      containerWidth="420px"
      isBluredBackdrop={initialFormValues && !initialFormValues.accountId}
    >
      <PageTitle
        title="Manual Transaction"
        pageId={uiItemsConst.MANUAL_TRANSACTION}
      />
      <ManualTransactionForm
        currenciesOptions={currenciesOptions}
        mandateOptions={mandateOptions}
        initialValues={initialFormValues}
        isCurrenciesLoading={isCurrenciesLoading}
        isDirectDebitMandatesLoading={isDirectDebitMandatesLoading}
        isReadonly={isReadonlyId}
        isTransTypesLoading={isTransTypesLoading}
        makeTransaction={makeTransaction}
        onCancel={handleOnCancel}
        transactionTypes={manualTransTypesOptions}
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
