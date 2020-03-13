import React from 'react';

import { Hr, Modal, OkCancelButtons, Paragraph } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';

import { PayloadConfirmationModal } from 'store/domains';

interface ConfirmationModalProps extends WithModalProps {
  payloadConfirmModal: PayloadConfirmationModal;
}

const modalName = modalNamesConst.CONFIRMATION;

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  closeModal,
  payloadConfirmModal,
}) => {
  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  const confirmationText = React.useMemo(
    () => payloadConfirmModal && payloadConfirmModal.confirmationText,
    [payloadConfirmModal]
  );

  const modalTitle = React.useMemo(
    () => {
      const confirmationTitle = payloadConfirmModal && payloadConfirmModal.confirmationTitle;

      return confirmationTitle ? confirmationTitle : 'Are you sure?';
    },
    [payloadConfirmModal]
  );

  const handleConfirm = React.useCallback(
    () => {
      const confirmationAction = payloadConfirmModal && payloadConfirmModal.confirmationAction;

      confirmationAction();
      closeModal(modalName);
    },
    [payloadConfirmModal, closeModal]
  );

  return (
    <Modal
      name={modalName}
      title={modalTitle}
      containerWidth={350}
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
      />
    </Modal>
  );
};

export default withModal(ConfirmationModal);
