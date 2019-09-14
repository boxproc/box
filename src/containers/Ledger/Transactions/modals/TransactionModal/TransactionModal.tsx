import React from 'react';

import { Flex } from '@rebass/grid';

import { Button, Hr, Modal } from 'components';

import { modalNamesConst, modalTypesConst } from 'consts';

import { LedgerTransactionsForm } from 'containers/Ledger/Transactions/forms';

import { CloseModal } from 'store/domains';

interface EditTransactionModalProps {
  closeModal: CloseModal;
}

const modalName = modalNamesConst.LEDGER_TRANSACTION;

const EditTransactionModal: React.FC<EditTransactionModalProps> = ({
  closeModal,
}) => {
  return (
    <Modal
      name={modalName}
      type={modalTypesConst.EDIT_MODAL}
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
