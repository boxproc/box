import React from 'react';

import { Flex } from '@rebass/grid';

import { Button } from 'components/Buttons';
import Modal from 'components/Modal';
import { Hr } from 'components/Text';

import { modalNames, modalTypes } from 'consts';

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
      type={modalTypes.EDIT_MODAL}
      title="Transaction"
      closeOnBackdrop={true}
      maxContainerWidth={600}
      minContainerHeight={499}
    >
      <LedgerTransactionsForm />
      <Hr />
      <Flex justifyContent="flex-end">
        <Button
          text="close"
          onClick={() => closeModal(modalName)}
        />
      </Flex>
    </Modal>
  );
};

export default EditTransactionModal;
