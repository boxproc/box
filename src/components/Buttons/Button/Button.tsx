import React from 'react';

import { Box } from '@rebass/grid';

import { Filter } from 'styled-icons/boxicons-regular/Filter';
import { Plus } from 'styled-icons/boxicons-regular/Plus';
import { Reset } from 'styled-icons/boxicons-regular/Reset';
import { LogOut } from 'styled-icons/feather/LogOut';
import { Delete } from 'styled-icons/material/Delete';

import styled from 'theme';

import { modalNames } from 'consts';

import { OpenModal } from 'store/domains';

interface ButtonWrapperProps {
  size?: string;
  bordered?: boolean;
}

const ButtonWrapper = styled.button<ButtonWrapperProps>`
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  cursor: pointer;
  border: 0;
  outline: 0;
  display: flex;
  background: transparent;
  font-size: ${({ size }) => size ? size + 'px' : '13px'};
  text-transform: uppercase;
  letter-spacing: .2pt;
  color: ${({ theme }) => theme.grayColor};
  font-weight: 500;
  line-height: 1.3;
  white-space: nowrap;

  ${({ bordered, theme }) => bordered && `
    border: 1px solid  ${theme.grayColor};
    border-radius: 2px;
    padding: 9px 10px 7px;
    width: 100%;
    justify-content: center;
    background-color: ${theme.lighterGrayColor}
  `};

  &:hover {
    color: ${({ theme }) => theme.normalAccentColor};

    ${({ bordered, theme }) => bordered && `
      border-color: ${theme.normalAccentColor};
  `};
  }

  &:disabled {
    opacity: .5;
    pointer-events: none;
  }
`;

interface ButtonProps {
  text: string;
  size?: string;
  transparent?: boolean;
  disabled?: boolean;
  className?: string;
  iconName?: 'filter' | 'plus' | 'logOut' | 'delete' | 'reset' | string;
  type?: 'reset' | 'submit';
  openModal: OpenModal;
  onClick?: () => void;
  withConfirmation?: boolean;
  confirmationText?: string;
  confirmationTitle?: string;
  bordered?: boolean;
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
  confirmationTitle,
  openModal,
  bordered = false,
}) => {
  const handleClick = React.useCallback(
    disabled
      ? null
      : withConfirmation
        ? () => openModal({
          name: modalNames.CONFIRMATION_MODAL,
          payload: {
            confirmationAction: onClick,
            confirmationTitle,
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
      bordered={bordered}
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
