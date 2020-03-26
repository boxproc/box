import React from 'react';

import { Modal } from 'components';
import { SettleTransactionForm, TransactionRetrievingForm } from './forms';

import { modalNamesConst, modalTypesConst, uiItemsConst } from 'consts';

import PageTitle from 'containers/PageTemplate/PageTitle';

import { IWithModal, withModal } from 'HOCs';

import {
  HandleRetrieveTransaction,
  HandleSettleTransaction,
  IPayloadSettleTransactionModal,
  ResetRetrievedTransaction,
  SettleTransactionFormValues,
} from 'store';

interface SettleTransactionModalProps extends IWithModal {
  retrievedTransaction: SettleTransactionFormValues;
  retrieveTransaction: HandleRetrieveTransaction;
  settleTransaction: HandleSettleTransaction;
  resetRetrievedTransaction: ResetRetrievedTransaction;
  isRetrieving: boolean;
  isLoading: boolean;
  isRetrievedTransaction: boolean;
  isDirtySettleTransactionForm: boolean;
  payloadSettleTransactionModal: IPayloadSettleTransactionModal;
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
      name={modalName}
      containerWidth="400px"
      minContainerHeight="160px"
      type={modalTypesConst.VIEWING}
      withCloseConfirmation={isDirtySettleTransactionForm}
    >
      <PageTitle
        title="Settle Transaction"
        pageId={uiItemsConst.LEDGER_SETTLE_TRANSACTION}
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
