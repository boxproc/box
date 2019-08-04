import React from 'react';

import { OkCancelButtons } from 'components/Buttons';
import Modal from 'components/Modal';

import { modalNames } from 'consts';

import { CloseModal } from 'store/domains';

interface ConfirmationModalProps {
  closeModal: CloseModal;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  closeModal,
}) => {
  return (
    <Modal
      name={modalNames.CONFIRMATION_MODAL}
      title="Are you sure?"
      maxContainerWidth={250}
      zIndex="101"
      closeOnBackdrop={true}
    >
      <OkCancelButtons
        onCancel={() => closeModal(modalNames.CONFIRMATION_MODAL)}
        onOk={() => console.log('---confirm')}
        okText="confirm"
      />
    </Modal>
  );
};

export default ConfirmationModal;
