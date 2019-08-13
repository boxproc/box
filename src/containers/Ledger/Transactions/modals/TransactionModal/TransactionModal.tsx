import React from 'react';

import { Box } from '@rebass/grid';

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
      minContainerHeight={545}
    >
      <LedgerTransactionsForm />
      <Hr />
      <Box mt={10}>
        <Button
          text="close"
          onClick={() => closeModal(modalName)}
        />
        </Box>
    </Modal>
  );
};

export default EditTransactionModal;
