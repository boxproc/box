import React from 'react';

import { Hr, Modal, OkCancelButtons } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';
import { ResultManualTransactionForm } from 'containers/Ledger/ManualTransaction/forms';

import {
  HandleFilterLedgerTransactionsById,
  LedgerManualTransactionResultPrepared,
} from 'store/domains';

interface ManualTransactionModalProps extends WithModalProps {
  ledgerManualTransaction: LedgerManualTransactionResultPrepared;
  filterLedgerTransactionsById: HandleFilterLedgerTransactionsById;
  transactionId: number;
}

const modalName = modalNamesConst.LEDGER_MANUAL_TRANSACTION;

const ManualTransactionModal: React.FC<ManualTransactionModalProps> = ({
  closeModal,
  ledgerManualTransaction,
  filterLedgerTransactionsById,
  transactionId,
}) => {
  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  const handleGetTransaction = React.useCallback(
    () => filterLedgerTransactionsById({ transaction_id: transactionId }),
    [transactionId, filterLedgerTransactionsById]
  );

  return (
    <Modal
      name={modalName}
      type={modalTypesConst.EDIT_MODAL}
      title="Transaction successfully completed"
      maxContainerWidth={650}
    >
      <ResultManualTransactionForm
        initialValues={ledgerManualTransaction}
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

export default withModal(ManualTransactionModal);
