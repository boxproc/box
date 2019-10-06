import React from 'react';

import { Hr, Modal, OkCancelButtons, Paragraph } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';

import { PayloadConfirmationModal } from 'store/domains';

interface ConfirmationModalProps extends WithModalProps {
  payloadConfirmModal: PayloadConfirmationModal;
}

const modalName = modalNamesConst.CONFIRMATION_MODAL;

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  closeModal,
  payloadConfirmModal,
}) => {
  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

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
      type={modalTypesConst.CONFIRMATION_MODAL}
    >
      <Hr accentColor={true} />
      {confirmationText && (
        <Paragraph light={true}>{confirmationText}</Paragraph>
      )}
      <OkCancelButtons
        onCancel={handleOnCancel}
        onOk={handleConfirm}
        rightPosition={true}
      />
    </Modal>
  );
};

export default withModal(ConfirmationModal);
