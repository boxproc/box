import React from 'react';

import { Flex } from '@rebass/grid';

import { Button, Hr, Modal } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';

import { LedgerTransactionsForm } from 'containers/Ledger/Transactions/forms';

interface TransactionModalProps extends WithModalProps { }

const modalName = modalNamesConst.LEDGER_TRANSACTION;

const TransactionModal: React.FC<TransactionModalProps> = ({
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
      maxContainerWidth={1010}
      minContainerHeight={590}
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

export default withModal(TransactionModal);
