import React from 'react';

import styled from 'styled-components';
import { media } from 'theme/media';

import { CloseModal } from 'store/domains';

const ModalWrapper = styled.div`
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
    max-width: 500px;
    width: 100%;
    padding: 20px;
  }
  .modal-close {
    position: absolute;
    top: 15px;
    text-decoration: none;
    font-size: 40px;
    line-height: .6;
    color: #fff;
    outline: none;
    cursor: pointer;
    right: 30px;
    color: rgba(255, 255, 255, .7);
    &:hover {
      color: rgba(255, 255, 255, 1);
    }
  }
`;

interface ModalProps {
  name: string;
  closeModal: CloseModal;
}

const Modal: React.FC<ModalProps> = ({
  children,
  name,
  closeModal,
}) => {
  const handleCloseModal = React.useCallback(
    () => closeModal(name),
    [name, closeModal]
  );

  return (
    <ModalWrapper>
      <div className="modal-backdrop" onClick={handleCloseModal} />
      <span className="modal-close" onClick={handleCloseModal}>
        &times;
      </span>
      <div className="modal-container">
        {children}
      </div>
    </ModalWrapper>
  );
};

export default Modal;
