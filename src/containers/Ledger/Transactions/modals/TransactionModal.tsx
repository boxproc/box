import React from 'react';

import { Flex } from '@rebass/grid';

import { Button, Hr, Modal } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';

import { LedgerTransactionsForm } from 'containers/Ledger/Transactions/forms';

interface EditTransactionModalProps extends WithModalProps { }

const modalName = modalNamesConst.LEDGER_TRANSACTION;

const EditTransactionModal: React.FC<EditTransactionModalProps> = ({
  closeModal,
}) => {
  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  return (
    <Modal
      name={modalName}
      type={modalTypesConst.EDIT_MODAL}
      title="Transaction"
      closeOnBackdrop={true}
      maxContainerWidth={600}
      minContainerHeight={490}
    >
      <LedgerTransactionsForm />
      <Hr />
      <Flex justifyContent="flex-end">
        <Button
          text="close"
          onClick={handleOnCancel}
        />
      </Flex>
    </Modal>
  );
};

export default withModal(EditTransactionModal);
