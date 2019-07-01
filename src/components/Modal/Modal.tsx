import React from 'react';

import { ModalWrapper } from './ModalWrapper';

import { CloseModal } from 'store/domains';

interface ModalProps {
  name: string;
  closeModal: CloseModal;
  maxContainerWidth?: string;
}

const Modal: React.FC<ModalProps> = ({
  children,
  name,
  closeModal,
  maxContainerWidth,
}) => {
  React.useEffect(
    () => {
      window.addEventListener('keydown', e => {
        if (e.key === 'Escape' || e.key === 'Backspace') {
          handleCloseModal();
        }
      });
    }
  );

  const handleCloseModal = React.useCallback(
    () => closeModal(name),
    [name, closeModal]
  );

  return (
    <ModalWrapper maxContainerWidth={maxContainerWidth}>
      <div
        className="modal-backdrop"
        onClick={handleCloseModal}
      />
      <div className="modal-container">
        <span
          className="modal-close"
          onClick={handleCloseModal}
        >
          &times;
        </span>
        {children}
      </div>
    </ModalWrapper>
  );
};

export default Modal;
