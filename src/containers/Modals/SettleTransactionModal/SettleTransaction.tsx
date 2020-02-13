import React from 'react';

import { Modal } from 'components';
import { SettleTransactionForm, TransactionRetrievingForm } from './forms';

import { modalNamesConst } from 'consts';

import { withModal, WithModalProps } from 'HOCs';

import {
  HandleRetrieveTransaction,
  HandleSettleTransaction,
  PayloadSettleTransactionModal,
  ResetRetrievedTransaction,
  SettleTransactionFormValues,
} from 'store/domains';

interface SettleTransactionModalProps extends WithModalProps {
  retrievedTransaction: SettleTransactionFormValues;
  retrieveTransaction: HandleRetrieveTransaction;
  settleTransaction: HandleSettleTransaction;
  resetRetrievedTransaction: ResetRetrievedTransaction;
  isRetrieving: boolean;
  isLoading: boolean;
  isRetrievedTransaction: boolean;
  isDirtySettleTransactionForm: boolean;
  payloadSettleTransactionModal: PayloadSettleTransactionModal;
}

const modalName = modalNamesConst.SETTLE_TRANSACTION;

const SettleTransactionModal: React.FC<SettleTransactionModalProps> = ({
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

  const initialRetrievingFormValues = React.useMemo(
    () => {
      const id = payloadSettleTransactionModal && payloadSettleTransactionModal.transactionId;

      return { id };
    },
    [payloadSettleTransactionModal]
  );

  const isReadonlyId = React.useMemo(
    () => {
      const id = payloadSettleTransactionModal && payloadSettleTransactionModal.transactionId;

      return Boolean(id);
    },
    [payloadSettleTransactionModal]
  );

  const handleCloseModal = React.useCallback(
    () => {
      closeModal(modalName);
    },
    [closeModal]
  );

  return (
    <Modal
      title="Settle Transaction"
      name={modalName}
      containerWidth={400}
      minContainerHeight={160}
      withCloseConfirmation={isDirtySettleTransactionForm}
    >
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
