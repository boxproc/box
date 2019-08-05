import React from 'react';

import { Box } from '@rebass/grid';

import { Filter } from 'styled-icons/boxicons-regular/Filter';
import { Plus } from 'styled-icons/boxicons-regular/Plus';
import { Reset } from 'styled-icons/boxicons-regular/Reset';
import { LogOut } from 'styled-icons/feather/LogOut';
import { Delete } from 'styled-icons/material/Delete';

import styled, { css } from 'theme';

import { modalNames } from 'consts';

import { OpenModal } from 'store/domains';

export const sharedStyle = css`
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  cursor: pointer;
  border: 0;
  outline: 0;
`;

interface ButtonWrapperProps {
  size?: string;
}

const ButtonWrapper = styled.button<ButtonWrapperProps>`
  ${sharedStyle}
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  font-size: ${({ size }) => size ? size + 'px' : '13px'};
  text-transform: uppercase;
  letter-spacing: .2pt;
  color: ${({ theme }) => theme.grayColor};
  font-weight: 500;
  line-height: 1.3;

  &:hover {
    color: ${({ theme }) => theme.lighterAccentColor};
  }

  &:disabled {
    opacity: .5;
    pointer-events: none;
  }
`;

interface ButtonProps {
  text: string;
  disabled?: boolean;
  size?: string;
  onClick?: () => void;
  transparent?: boolean;
  className?: string;
  iconName?: 'filter' | 'plus' | 'logOut' | 'delete' | 'reset' | string;
  type?: 'reset' | 'submit';
  withConfirmation?: boolean;
  confirmationText?: string;
  openModal: OpenModal;
}

const renderIcon = (name: string) => {
  switch (name) {
    case 'filter':
      return (<Filter size="18" />);
    case 'plus':
      return (<Box mt="-2px"><Plus size="18" /></Box>);
    case 'logOut':
      return (<LogOut size="16" />);
    case 'delete':
      return (<Box mt="-2px"><Delete size="18" /></Box>);
    case 'reset':
      return (<Box mt="-2px"><Reset size="14" /></Box>);
    default:
      return null;
  }
};

const Button: React.FC<ButtonProps> = ({
  disabled,
  onClick,
  text,
  className,
  iconName,
  type,
  size,
  withConfirmation = false,
  confirmationText,
  openModal,
}) => {
  const handleClick = React.useCallback(
    disabled
      ? null
      : withConfirmation
        ? () => openModal({
          name: modalNames.CONFIRMATION_MODAL,
          payload: {
            confirmAction: onClick,
            confirmationText,
          },
        })
        : onClick,
    [disabled, withConfirmation, openModal, onClick]
  );

  return (
    <ButtonWrapper
      onClick={handleClick}
      className={className}
      disabled={disabled}
      type={type}
      size={size}
    >
      {iconName &&
        <Box mr="2px">
          {renderIcon(iconName)}
        </Box>
      }
      {text}
    </ButtonWrapper>
  );
};

export default Button;
