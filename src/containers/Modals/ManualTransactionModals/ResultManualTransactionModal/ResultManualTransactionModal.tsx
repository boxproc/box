import React from 'react';

import { Hr, Modal, OkCancelButtons } from 'components';
import { IWithModal, withModal } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';
import {
  ResultLimitAdjustmentForm,
  ResultManualTransactionForm
} from 'containers/Modals/ManualTransactionModals/forms';

import {
  LedgerLimitAdjustmentResultPrepared,
  LedgerManualTransactionResultPrepared,
  THandleFilterTransactionsById,
} from 'store';

interface IResultManualTransactionModal extends IWithModal {
  ledgerManualTransaction: LedgerManualTransactionResultPrepared;
  ledgerLimitAdjustment: LedgerLimitAdjustmentResultPrepared;
  filterLedgerTransactionsById: THandleFilterTransactionsById;
  transactionId: number;
  isLimitAdjustment: boolean;
}

const modalName = modalNamesConst.MANUAL_TRANSACTION_RESULT;

const ResultManualTransactionModal: React.FC<IResultManualTransactionModal> = ({
  closeModal,
  ledgerManualTransaction,
  ledgerLimitAdjustment,
  isLimitAdjustment,
  filterLedgerTransactionsById,
  transactionId,
  closeAllModals,
}) => {
  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  const handleGetTransaction = React.useCallback(
    () => {
      filterLedgerTransactionsById({ transaction_id: transactionId });
      closeAllModals();
    },
    [transactionId, filterLedgerTransactionsById, closeAllModals]
  );

  return (
    <Modal
      name={modalName}
      type={modalTypesConst.VIEWING}
      title="Transaction is successfully completed."
      containerWidth="650px"
    >
      {isLimitAdjustment
        ? (<ResultLimitAdjustmentForm initialValues={ledgerLimitAdjustment} />)
        : (<ResultManualTransactionForm initialValues={ledgerManualTransaction} />)
      }
      <Hr />
      <OkCancelButtons
        okText="View transaction"
        cancelText="Close"
        focusedButton="ok"
        onOk={handleGetTransaction}
        onCancel={handleOnCancel}
        hideOk={isLimitAdjustment}
      />
    </Modal>
  );
};

export default withModal(ResultManualTransactionModal);
