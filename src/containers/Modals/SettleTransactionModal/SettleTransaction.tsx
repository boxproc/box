import React from 'react';

import { Modal } from 'components';
import { SettleTransactionForm, TransactionRetrievingForm } from './forms';

import { modalNamesConst, modalTypesConst, uiItemsConst } from 'consts';

import PageTitle from 'containers/PageTemplate/PageTitle';

import { IWithModal, withModal } from 'HOCs';

import {
  IPayloadSettleTransactionModal,
  ISettleTrFormValues,
  THandleRetrieveTransaction,
  THandleSettleTransaction,
  TResetRetrievedTransaction,
} from 'store';

interface ISettleTransactionModal extends IWithModal {
  retrievedTransaction: ISettleTrFormValues;
  retrieveTransaction: THandleRetrieveTransaction;
  settleTransaction: THandleSettleTransaction;
  resetRetrievedTransaction: TResetRetrievedTransaction;
  isRetrieving: boolean;
  isLoading: boolean;
  isRetrievedTransaction: boolean;
  isDirtySettleTransactionForm: boolean;
  payloadSettleTransactionModal: IPayloadSettleTransactionModal;
}

const modalName = modalNamesConst.SETTLE_TRANSACTION;

const SettleTransactionModal: React.FC<ISettleTransactionModal> = ({
  retrievedTransaction,
  retrieveTransaction,
  resetRetrievedTransaction,
  settleTransaction,
  isLoading,
  isRetrieving,
  isRetrievedTransaction,
  isDirtySettleTransactionForm,
  closeModal,
  payloadSettleTransactionModal,
}) => {
  React.useEffect(
    () => {
      return () => resetRetrievedTransaction();
    },
    [resetRetrievedTransaction]
  );

  const transactionId = React.useMemo(
    () => payloadSettleTransactionModal && payloadSettleTransactionModal.transactionId,
    [payloadSettleTransactionModal]
  );

  const initialRetrievingFormValues = React.useMemo(
    () => {
      return { id: transactionId };
    },
    [transactionId]
  );

  const isReadonlyId = React.useMemo(
    () => Boolean(transactionId),
    [transactionId]
  );

  const handleCloseModal = React.useCallback(
    () => {
      closeModal(modalName);
    },
    [closeModal]
  );

  return (
    <Modal
      name={modalName}
      containerWidth="400px"
      minContainerHeight="160px"
      type={modalTypesConst.VIEWING}
      isBluredBackdrop={!transactionId}
      withCloseConfirmation={isDirtySettleTransactionForm}
    >
      <PageTitle
        title="Settle Transaction"
        pageId={uiItemsConst.SETTLE_TRANSACTION}
      />
      <TransactionRetrievingForm
        isRetrieving={isRetrieving}
        isRetrieved={isRetrievedTransaction}
        retrieveTransaction={retrieveTransaction}
        initialValues={initialRetrievingFormValues}
        isReadonly={isReadonlyId}
        onCancel={handleCloseModal}
      />
      {isRetrievedTransaction && (
        <SettleTransactionForm
          isLoading={isLoading}
          isDisabled={isLoading || isRetrieving}
          initialValues={retrievedTransaction}
          onCancel={handleCloseModal}
          settleTransaction={settleTransaction}
        />
      )}
    </Modal>
  );
};

export default withModal(SettleTransactionModal);
