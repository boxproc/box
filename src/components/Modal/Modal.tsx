import React from 'react';

import styled from 'styled-components';
import { media } from 'theme/media';

import { CloseModal } from 'store/domains';

interface ModalWrapperProps {
  maxContainerWidth?: string;
}

const ModalWrapper = styled.div<ModalWrapperProps>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 50px 20px;
  text-align: center;
  overflow-y: auto;
  z-index: 100;

  &:after {
    content: "";
    display: inline-block;
    vertical-align: middle;
    height: 100%;
    width: .1%;
    margin-left: -.1%;
  }
  ${media.tablet`
    padding-left: 10px;
    padding-right: 10px;
  `}
  .modal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .6);
  }
  .modal-container {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    background-color: #ffffff;
    text-align: left;
    box-sizing: border-box;
    max-width: ${({maxContainerWidth}) => maxContainerWidth ? maxContainerWidth + 'px' : '500px'};
    width: 100%;
    padding: 20px 20px 30px;
  }
  .modal-close {
    position: absolute;
    top: 0;
    right: 0;
    text-decoration: none;
    font-size: 28px;
    line-height: .6;
    color: #fff;
    outline: none;
    cursor: pointer;
    color: ${({ theme }) => theme.blackColor};
    padding: 10px;
  }
`;

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
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' || e.key === 'Backspace') {
          handleCloseModal();
        }
      });
    },
    []
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
