import React from 'react';

import { Box } from '@rebass/grid';

import { Filter } from 'styled-icons/boxicons-regular/Filter';
import { HelpCircle } from 'styled-icons/boxicons-regular/HelpCircle';
import { LogOut } from 'styled-icons/boxicons-regular/LogOut';
import { Plus } from 'styled-icons/boxicons-regular/Plus';
import { User } from 'styled-icons/fa-solid/User';
import { Qrcode } from 'styled-icons/icomoon/Qrcode';
import { Delete } from 'styled-icons/material/Delete';
import { Smartphone } from 'styled-icons/material/Smartphone';

import styled from 'theme';

import { withOpenModal } from 'HOCs';

import { modalNames } from 'consts';

import { OpenModal } from 'store/domains';

interface ButtonWrapperProps {
  size?: string;
  bordered?: boolean;
  underline?: boolean;
  hasIcon?: boolean;
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
  color: ${({ theme }) => theme.colors.gray};
  font-weight: 500;
  line-height: 1.3;
  white-space: nowrap;

  ${({ hasIcon, theme }) => !hasIcon && `
    padding: 8px 10px 6px;
    border-radius: 2px;
    &:hover {
      background-color: ${theme.colors.lighterGray};
    }
  `}

  ${({ underline, theme }) => underline && `
    padding: 0;
    border-radius: 0;
    border-bottom: 1px solid ${theme.colors.normalAccent};
  `}

  ${({ bordered, theme }) => bordered && `
    border: 1px solid ${theme.colors.gray};
    border-radius: 2px;
    padding: 8px 10px 7px;
    width: 100%;
    justify-content: center;
    background-color: ${theme.colors.lighterGray};
    line-height: 1.25;
    box-shadow: ${theme.shadows.normalBox};
  `};

  &:hover {
    color: ${({ theme }) => theme.colors.normalAccent};

    ${({ bordered, theme }) => bordered && `
      border-color: ${theme.colors.normalAccent};
      background-color: ${theme.colors.white};
  `};

    ${({ underline, theme }) => underline && `
      background-color: inherit;
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
  iconName?: string;
  type?: 'reset' | 'submit';
  openModal: OpenModal;
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
      return (<Box mt="-2px" mr="1px"><LogOut size="16" /></Box>);
    case 'delete':
      return (<Box mt="-2px"><Delete size="18" /></Box>);
    case 'help':
      return (<Box mt="-1px"><HelpCircle size="16" /></Box>);
    case 'smartphone':
      return (<Box mt="-1px"><Smartphone size="16" /></Box>);
    case 'qrcode':
      return (<Box mt="-1px" mr="3px"><Qrcode size="14" /></Box>);
    case 'user':
      return (<Box mt="-2px" mr="2px"><User size="12" /></Box>);
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
    <ButtonWrapper
      onClick={handleClick}
      className={className}
      disabled={disabled}
      type={type}
      size={size}
      bordered={bordered}
      underline={underline}
      hasIcon={!!iconName}
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

export default withOpenModal(Button);
