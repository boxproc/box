import React from 'react';

import { Hr, Modal, OkCancelButtons, Paragraph } from 'components';

import { modalNamesConst } from 'consts';

import { CloseModal, PayloadConfirmationModal } from 'store/domains';

interface ConfirmationModalProps {
  closeModal: CloseModal;
  payloadConfirmModal: PayloadConfirmationModal;
}

const modalName = modalNamesConst.CONFIRMATION_MODAL;

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  closeModal,
  payloadConfirmModal,
}) => {
  const { confirmationAction, confirmationText, confirmationTitle } = payloadConfirmModal;

  const handleConfirm = () => {
    confirmationAction();
    closeModal(modalName);
  };

  return (
    <Modal
      name={modalName}
      title={confirmationTitle ? confirmationTitle : 'Are you sure?'}
      maxContainerWidth={350}
      zIndex="101"
      closeOnBackdrop={true}
      accentClose={false}
    >
      <Hr accentColor={true} />
      {confirmationText && (
        <Paragraph light={true}>{confirmationText}</Paragraph>
      )}
      <OkCancelButtons
        onCancel={() => closeModal(modalName)}
        onOk={handleConfirm}
        okText="confirm"
        rightPosition={true}
      />
    </Modal>
  );
};

export default ConfirmationModal;
