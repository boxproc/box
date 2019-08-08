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

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  closeModal,
  payloadConfirmModal,
}) => {
  const { confirmationAction, confirmationText } = payloadConfirmModal;

  return (
    <Modal
      name={modalNames.CONFIRMATION_MODAL}
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
          onCancel={() => closeModal(modalNames.CONFIRMATION_MODAL)}
          onOk={confirmationAction}
          okText="confirm"
        />
      </Flex>
    </Modal>
  );
};

export default ConfirmationModal;