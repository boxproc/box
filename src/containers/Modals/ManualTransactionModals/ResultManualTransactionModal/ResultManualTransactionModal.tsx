import React from 'react';

import { Hr, Modal, OkCancelButtons } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';
import { ResultManualTransactionForm } from 'containers/Modals/ManualTransactionModals/forms';

import {
  HandleFilterLedgerTransactionsById,
  LedgerLimitAdjustmentResultPrepared,
  LedgerManualTransactionResultPrepared,
} from 'store/domains';

interface ResultManualTransactionModalProps extends WithModalProps {
  ledgerManualTransaction: LedgerManualTransactionResultPrepared;
  ledgerLimitAdjustmentTransaction: LedgerLimitAdjustmentResultPrepared;
  filterLedgerTransactionsById: HandleFilterLedgerTransactionsById;
  transactionId: number;
}

const modalName = modalNamesConst.LEDGER_MANUAL_TRANSACTION_RESULT;

const ResultManualTransactionModal: React.FC<ResultManualTransactionModalProps> = ({
  closeModal,
  ledgerManualTransaction,
  ledgerLimitAdjustmentTransaction,
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
      type={modalTypesConst.EDIT_MODAL}
      title="Transaction successfully completed"
      maxContainerWidth={650}
    >
      <ResultManualTransactionForm
        initialValues={[ledgerManualTransaction, ledgerLimitAdjustmentTransaction]}
      />
      <Hr />
      <OkCancelButtons
        okText="View transaction"
        cancelText="Close"
        focusedButton="ok"
        rightPosition={true}
        onOk={handleGetTransaction}
        onCancel={handleOnCancel}
      />
    </Modal>
  );
};

export default withModal(ResultManualTransactionModal);
