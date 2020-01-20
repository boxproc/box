import React from 'react';

import { Modal } from 'components';
import { SettleTransactionForm, TransactionRetrievingForm } from './forms';

import { modalNamesConst } from 'consts';

import { withModal, WithModalProps } from 'HOCs';

import {
  HandleRetrieveTransaction,
  HandleSettleTransaction,
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
}) => {
  React.useEffect(
    () => {
      return () => resetRetrievedTransaction();
    },
    [resetRetrievedTransaction]
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
      maxContainerWidth={400}
      minContainerHeight={155}
      withCloseConfirmation={isDirtySettleTransactionForm}
    >
      <TransactionRetrievingForm
        isRetrieving={isRetrieving}
        isRetrieved={isRetrievedTransaction}
        retrieveTransaction={retrieveTransaction}
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
