import React from 'react';

import { Hr, Modal, OkCancelButtons } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { messagesConst, modalNamesConst, modalTypesConst } from 'consts';
import {
  ResultLimitAdjustmentForm,
  ResultManualTransactionForm
} from 'containers/Modals/ManualTransactionModals/forms';

import {
  HandleFilterLedgerTransactionsById,
  LedgerLimitAdjustmentResultPrepared,
  LedgerManualTransactionResultPrepared,
} from 'store/domains';

interface ResultManualTransactionModalProps extends WithModalProps {
  ledgerManualTransaction: LedgerManualTransactionResultPrepared;
  ledgerLimitAdjustment: LedgerLimitAdjustmentResultPrepared;
  filterLedgerTransactionsById: HandleFilterLedgerTransactionsById;
  transactionId: number;
  isLimitAdjustment: boolean;
}

const modalName = modalNamesConst.MANUAL_TRANSACTION_RESULT;

const ResultManualTransactionModal: React.FC<ResultManualTransactionModalProps> = ({
  closeModal,
  ledgerManualTransaction,
  ledgerLimitAdjustment,
  isLimitAdjustment,
  filterLedgerTransactionsById,
  transactionId,
  closeAllModals,
}) => {
  const modalWidth = React.useMemo(
    () => isLimitAdjustment ? 550 : 650,
    [isLimitAdjustment]
  );

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
      type={modalTypesConst.EDIT_MODAL}
      title={messagesConst.TRANSACTION_SUCCESSFULLY_COMPLETED}
      maxContainerWidth={modalWidth}
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
        rightPosition={true}
        onOk={handleGetTransaction}
        onCancel={handleOnCancel}
        hideOk={isLimitAdjustment}
      />
    </Modal>
  );
};

export default withModal(ResultManualTransactionModal);
