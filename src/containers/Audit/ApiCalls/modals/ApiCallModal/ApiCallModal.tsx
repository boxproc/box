import React from 'react';

import { Flex } from '@rebass/grid';

import { Button, Hr, Modal } from 'components';

import { modalNamesConst, modalTypesConst } from 'consts';
import { ApiCallForm } from '../../forms';

import { CloseModal } from 'store/domains';

interface EditTransactionModalProps {
  closeModal: CloseModal;
}

const modalName = modalNamesConst.AUDIT_API_CALL;

const EditTransactionModal: React.FC<EditTransactionModalProps> = ({
  closeModal,
}) => {
  return (
    <Modal
      name={modalName}
      type={modalTypesConst.EDIT_MODAL}
      title="API Call"
      closeOnBackdrop={true}
      maxContainerWidth={600}
    >
      <ApiCallForm />
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
