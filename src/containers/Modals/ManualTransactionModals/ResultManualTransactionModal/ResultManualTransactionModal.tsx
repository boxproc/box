import React from 'react';

import { Hr, Modal, OkCancelButtons } from 'components';
import { IWithModal, withModal } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';
import {
  ResultManualTransactionForm
} from 'containers/Modals/ManualTransactionModals/forms';

import {
  IManualTransactionResult,
  THandleFilterTransactionsById,
} from 'store';

interface IResultManualTransactionModal extends IWithModal {
  filterTransactionsById: THandleFilterTransactionsById;
  manualTransaction: IManualTransactionResult;
  transactionId: number;
}

const modalName = modalNamesConst.MANUAL_TRANSACTION_RESULT;

const ResultManualTransactionModal: React.FC<IResultManualTransactionModal> = ({
  closeModal,
  manualTransaction,
  filterTransactionsById,
  transactionId,
  closeAllModals,
}) => {
  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  const handleGetTransaction = React.useCallback(
    () => {
      filterTransactionsById({ transaction_id: transactionId });
      closeAllModals();
    },
    [transactionId, filterTransactionsById, closeAllModals]
  );

  return (
    <Modal
      name={modalName}
      type={modalTypesConst.VIEWING}
      title="Transaction is successfully completed"
      containerWidth="320px"
    >
      <ResultManualTransactionForm initialValues={manualTransaction} />
      <Hr />
      <OkCancelButtons
        okText="View transaction"
        cancelText="Close"
        focusedButton="ok"
        onOk={handleGetTransaction}
        onCancel={handleOnCancel}
      />
    </Modal>
  );
};

export default withModal(ResultManualTransactionModal);
