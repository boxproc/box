import React from 'react';

import { ModalWrapper } from './ModalWrapper';

import { T2 } from 'components/Text';

import { CloseModal } from 'store/domains';

import { codeKeys } from 'consts';
import styled from 'styled-components';

const ModalTitle = styled(T2)`
  padding-right: 15px;
  color: ${({ theme }) => theme.blackColor};
`;

interface ModalProps {
  name: string;
  title?: string;
  closeModal: CloseModal;
  maxContainerWidth?: string;
  minContainerHeight?: string;
  zIndex?: string;
  closeOnBackdrop?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  children,
  name,
  title,
  closeModal,
  maxContainerWidth = '700',
  minContainerHeight,
  zIndex,
  closeOnBackdrop = false,
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
    if (e.key === codeKeys.ESCAPE) {
      handleCloseModal();
    }
  };

  return (
    <ModalWrapper
      maxContainerWidth={maxContainerWidth}
      minContainerHeight={minContainerHeight}
      zIndex={zIndex}
    >
      <div
        className="modal-backdrop"
        onClick={closeOnBackdrop ? handleCloseModal : null}
      />
      <div className="modal-container">
        <span
          className="modal-close"
          onClick={handleCloseModal}
          title="Close"
        >
          &times;
        </span>
        {title && (
          <ModalTitle>{title}</ModalTitle>
        )}
        {children}
      </div>
    </ModalWrapper>
  );
};

export default Modal;
