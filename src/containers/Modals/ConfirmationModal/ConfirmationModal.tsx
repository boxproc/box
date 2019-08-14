import React from 'react';

import { OkCancelButtons } from 'components/Buttons';
import Modal from 'components/Modal';
import { Hr, Paragraph } from 'components/Text';

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
      accentClose={false}
    >
      {confirmationText && (
        <React.Fragment>
          <Hr accentColor={true} />
          <Paragraph light={true}>{confirmationText}</Paragraph>
        </React.Fragment>
      )}
      <OkCancelButtons
        onCancel={() => closeModal(modalName)}
        onOk={confirmationAction}
        okText="confirm"
        rightPosition={true}
      />
    </Modal>
  );
};

export default ConfirmationModal;
