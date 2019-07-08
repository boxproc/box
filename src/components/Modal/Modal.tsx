import React from 'react';

import { ModalWrapper } from './ModalWrapper';

import { CloseModal } from 'store/domains';
import { codeKeys } from 'consts';

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
      window.addEventListener('keydown', handleCloseModalByKey);
      return () => document.removeEventListener('keydown', handleCloseModalByKey);
    }
  );

  const handleCloseModal = React.useCallback(
    () => closeModal(name),
    [name, closeModal]
  );

  const handleCloseModalByKey = (e: KeyboardEventInit) => {
    if (e.key === codeKeys.ESCAPE || e.key === codeKeys.BACKSPACE) {
      handleCloseModal();
    }
  };

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
