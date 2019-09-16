import React from 'react';

import { Flex } from '@rebass/grid';

import { Button, Hr, Modal } from 'components';
import { withModal } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';

import { StatementForm } from 'containers/Ledger/Statements/forms';

import { CloseModal } from 'store/domains';

interface StatementsModalProps {
  closeModal: CloseModal;
}

const modalName = modalNamesConst.LEDGER_STATEMENTS;

const StatementsModal: React.FC<StatementsModalProps> = ({
  closeModal,
}) => {
  const handleCloseModal = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  return (
    <Modal
      name={modalName}
      type={modalTypesConst.EDIT_MODAL}
      title="Statement"
      closeOnBackdrop={true}
      maxContainerWidth={800}
    >
      <StatementForm isDisabled={true} />
      <Hr />
      <Flex justifyContent="flex-end">
        <Button
          text="close"
          onClick={handleCloseModal}
        />
      </Flex>
    </Modal>
  );
};

export default withModal(StatementsModal);
