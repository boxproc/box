import React from 'react';

import { Modal } from 'components';
import { SettleTransactionForm } from './forms';

import { modalNamesConst, modalTypesConst, uiItemsConst } from 'consts';

import PageTitle from 'containers/PageTemplate/PageTitle';

import { IWithModal, withModal } from 'HOCs';

import {
  // ISettleTrFormValues,
  // THandleRetrieveTransaction,
  IPayloadSettleTransactionModal,
  THandleSettleTransaction,
  TResetRetrievedTransaction,
} from 'store';

interface ISettleTransactionModal extends IWithModal {
  // isRetrievedTransaction: boolean;
  // isRetrieving: boolean;
  // retrievedTransaction: ISettleTrFormValues;
  // retrieveTransaction: THandleRetrieveTransaction;
  isDirtySettleTransactionForm: boolean;
  isLoading: boolean;
  payloadSettleTransactionModal: IPayloadSettleTransactionModal;
  resetRetrievedTransaction: TResetRetrievedTransaction;
  settleTransaction: THandleSettleTransaction;
  transactionForSettle: number;
}

const modalName = modalNamesConst.SETTLE_TRANSACTION;

const SettleTransactionModal: React.FC<ISettleTransactionModal> = ({
  // isRetrievedTransaction,
  // isRetrieving,
  // retrievedTransaction,
  // retrieveTransaction,
  closeModal,
  isDirtySettleTransactionForm,
  isLoading,
  payloadSettleTransactionModal,
  // resetRetrievedTransaction,
  settleTransaction,
  transactionForSettle,
}) => {
  // React.useEffect(
  //   () => {
  //     return () => resetRetrievedTransaction();
  //   },
  //   [resetRetrievedTransaction]
  // );

  const transactionId = React.useMemo(
    () => payloadSettleTransactionModal && payloadSettleTransactionModal.transactionId,
    [payloadSettleTransactionModal]
  );

  // const initialRetrievingFormValues = React.useMemo(
  //   () => {
  //     return { id: transactionId };
  //   },
  //   [transactionId]
  // );

  // const isReadonlyId = React.useMemo(
  //   () => Boolean(transactionId),
  //   [transactionId]
  // );

  const handleCloseModal = React.useCallback(
    () => {
      closeModal(modalName);
    },
    [closeModal]
  );

  return (
    <Modal
      name={modalName}
      containerWidth="340px"
      minContainerHeight="160px"
      type={modalTypesConst.VIEWING}
      isBluredBackdrop={!transactionId}
      withCloseConfirmation={isDirtySettleTransactionForm}
    >
      <PageTitle
        title="Settle Transaction"
        pageId={uiItemsConst.SETTLE_TRANSACTION}
      />
      {/* <TransactionRetrievingForm
        isRetrieving={isRetrieving}
        isRetrieved={isRetrievedTransaction}
        retrieveTransaction={retrieveTransaction}
        initialValues={initialRetrievingFormValues}
        isReadonly={isReadonlyId}
        onCancel={handleCloseModal}
      />
      {isRetrievedTransaction && (
        <React.Fragment>
          <Hr /> */}
          <SettleTransactionForm
            isLoading={isLoading}
            isDisabled={isLoading}
            // isDisabled={isLoading || isRetrieving}
            initialValues={transactionForSettle}
            onCancel={handleCloseModal}
            settleTransaction={settleTransaction}
          />
        {/* </React.Fragment>
      )} */}
    </Modal>
  );
};

export default withModal(SettleTransactionModal);
