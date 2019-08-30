import React from 'react';

import { Box, Flex } from '@rebass/grid';

import { Filter } from 'styled-icons/boxicons-regular/Filter';
import { LogOut } from 'styled-icons/boxicons-regular/LogOut';
import { Plus } from 'styled-icons/boxicons-regular/Plus';
import { Copy } from 'styled-icons/boxicons-solid/Copy';
import { Delete } from 'styled-icons/material/Delete';

import styled from 'theme';

import { modalNames } from 'consts';

import { OpenModal } from 'store/domains';

interface ButtonWrapperProps {
  size?: string;
  bordered?: boolean;
  underline?: boolean;
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

  ${({ underline, theme }) => underline && `
    border-bottom: 1px solid ${theme.normalAccentColor};
  `}

  ${({ bordered, theme }) => bordered && `
    border: 1px solid ${theme.grayColor};
    border-radius: 2px;
    padding: 8px 10px 7px;
    width: 100%;
    justify-content: center;
    background-color: ${theme.lighterGrayColor};
    line-height: 1.25;
    box-shadow: ${theme.boxShadow};
  `};

  &:hover {
    color: ${({ theme }) => theme.normalAccentColor};

    ${({ bordered, theme }) => bordered && `
      border-color: ${theme.normalAccentColor};
      background-color: ${theme.whiteColor};
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
  disabled?: boolean;
  className?: string;
  iconName?: 'filter' | 'plus' | 'logOut' | 'delete' | 'copy' | string;
  type?: 'reset' | 'submit';
  openModal: OpenModal;
  rightPosition: boolean;
  onClick?: () => void;
  withConfirmation?: boolean;
  confirmationText?: string;
  confirmationTitle?: string;
  bordered?: boolean;
  underline?: boolean;
}

const renderIcon = (name: string) => {
  switch (name) {
    case 'filter':
      return (<Filter size="18" />);
    case 'plus':
      return (<Box mt="-2px"><Plus size="18" /></Box>);
    case 'logOut':
      return (<Box mt="-2px"><LogOut size="16" /></Box>);
    case 'delete':
      return (<Box mt="-2px"><Delete size="18" /></Box>);
    case 'copy':
      return (<Box mt="-2px"><Copy size="18" /></Box>);
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
  rightPosition = false,
  openModal,
  bordered = false,
  underline = false,
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
    <Flex
      alignItems="center"
      justifyContent={rightPosition ? 'flex-end' : 'flex-start'}
      width={rightPosition ? '100%' : 'auto'}
    >
      <ButtonWrapper
        onClick={handleClick}
        className={className}
        disabled={disabled}
        type={type}
        size={size}
        bordered={bordered}
        underline={underline}
      >
        {iconName &&
          <Box mr="2px">
            {renderIcon(iconName)}
          </Box>
        }
        {text}
      </ButtonWrapper>
    </Flex>
  );

};

export default Button;
