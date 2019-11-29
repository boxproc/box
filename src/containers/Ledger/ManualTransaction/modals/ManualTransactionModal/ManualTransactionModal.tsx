import React from 'react';

import { Flex } from '@rebass/grid';

import { Button, Hr, Modal } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';
import { ResultManualTransactionForm } from 'containers/Ledger/ManualTransaction/forms';

import {
  LedgerManualTransactionResultPrepared,
} from 'store/domains';

interface ManualTransactionModalProps extends WithModalProps {
  ledgerManualTransaction: LedgerManualTransactionResultPrepared;
}

const modalName = modalNamesConst.LEDGER_MANUAL_TRANSACTION;

const ManualTransactionModal: React.FC<ManualTransactionModalProps> = ({
  closeModal,
  ledgerManualTransaction,
}) => {
  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
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
      <Flex justifyContent="flex-end">
        <Button
          text="Close"
          onClick={handleOnCancel}
        />
      </Flex>
      <Button />
    </Modal>
  );
};

export default withModal(ManualTransactionModal);
