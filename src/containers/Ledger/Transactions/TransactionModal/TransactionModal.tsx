import React from 'react';

import { Button } from 'components/Buttons';
import Modal from 'components/Modal';
import { Hr } from 'components/Text';

import { modalNames } from 'consts';

import { LedgerTransactionsForm } from 'containers/Ledger/Transactions/forms';

import { CloseModal } from 'store/domains';

interface EditTransactionModalProps {
  closeModal: CloseModal;
}

const modalName = modalNames.LEDGER_TRANSACTION;

const EditTransactionModal: React.FC<EditTransactionModalProps> = ({
  closeModal,
}) => {
  return (
    <Modal
      name={modalName}
      title="Transaction"
      closeOnBackdrop={true}
      maxContainerWidth={600}
      minContainerHeight={455}
    >
      <LedgerTransactionsForm />
      <Hr />
      <Button
        text="close"
        onClick={() => closeModal(modalName)}
      />
    </Modal>
  );
};

export default EditTransactionModal;
