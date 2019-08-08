import React from 'react';

import { Flex } from '@rebass/grid';

import { OkCancelButtons } from 'components/Buttons';
import Modal from 'components/Modal';
import { Paragraph } from 'components/Text';

import { modalNames } from 'consts';

import { CloseModal, PayloadConfirmationModal } from 'store/domains';

interface ConfirmationModalProps {
  closeModal: CloseModal;
  payloadConfirmModal: PayloadConfirmationModal;
}

const modalName = modalNames.CONFIRMATION_MODAL;

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  closeModal,
  payloadConfirmModal,
}) => {
  const { confirmationAction, confirmationText } = payloadConfirmModal;

  return (
    <Modal
      name={modalName}
      title="Are you sure?"
      maxContainerWidth={350}
      zIndex="101"
      closeOnBackdrop={true}
    >
      {confirmationText && (
        <Paragraph light={true}>{confirmationText}</Paragraph>
      )}
      <Flex justifyContent="flex-end">
        <OkCancelButtons
          onCancel={() => closeModal(modalName)}
          onOk={confirmationAction}
          okText="confirm"
        />
      </Flex>
    </Modal>
  );
};

export default ConfirmationModal;
