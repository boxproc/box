import React from 'react';

import { Hr, Modal, OkCancelButtons, Paragraph } from 'components';
import { IWithModal, withModal } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';

import { IPayloadConfirmationModal } from 'store';

interface IConfirmationModal extends IWithModal {
  payloadConfirmModal: IPayloadConfirmationModal;
}

const modalName = modalNamesConst.CONFIRMATION;

const ConfirmationModal: React.FC<IConfirmationModal> = ({
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
      containerWidth="350px"
      type={modalTypesConst.CONFIRMATION}
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
