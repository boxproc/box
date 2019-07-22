import React from 'react';

import { Box, Flex } from '@rebass/grid';
import { CreditCard } from 'styled-icons/fa-solid/CreditCard';

import { ModalWrapper } from './ModalWrapper';

import { T2 } from 'components/Text';

import { CloseModal } from 'store/domains';

import { codeKeys } from 'consts';
import styled from 'styled-components';

const ModalTitle = styled(T2)`
  padding-right: 15px;
  color: ${({ theme }) => theme.blackColor};
`;

interface ModalLabelProps {
  text: string;
  iconName?: string;
}

const ModalLabelWrapper = styled(Flex)`
  padding-top: 6px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.grayColor};
  font-size: 14px;
`;

const renderIcon = (name: string) => {
  switch (name) {
    case 'creditCard':
      return (<CreditCard size="16"/>);
    default:
      return null;
  }
};

const ModalLabel: React.FC<ModalLabelProps> = ({
  text,
  iconName,
}) => {
  return (
    <ModalLabelWrapper alignItems="center">
      {iconName && (
        <Box mr="5px">
          {renderIcon(iconName)}
        </Box>
      )}
      <Box>{text}</Box>
    </ModalLabelWrapper>
  );
};

interface ModalProps {
  name: string;
  title?: string;
  label?: string;
  labelIconName?: string;
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
  label,
  labelIconName,
  closeModal,
  maxContainerWidth,
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
        <Flex alignItems="flex-start">
          {title && (
            <ModalTitle>{title}</ModalTitle>
          )}
          {label && (
            <ModalLabel
              text={label}
              iconName={labelIconName}
            />
          )}
        </Flex>
        {children}
      </div>
    </ModalWrapper>
  );
};

export default Modal;
