import React from 'react';

import { Box } from '@rebass/grid';

import {
  DeleteIcon,
  FilterIcon,
  HelpIcon,
  LogOutIcon,
  PlusIcon,
  QrcodeIcon,
  SmartphoneIcon,
  UserIcon,
} from 'components';

import styled from 'theme';

import { withOpenModal } from 'HOCs';

import { iconNamesConst, modalNamesConst } from 'consts';

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

    ${({ underline }) => underline && `
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
    case iconNamesConst.FILTER:
      return (<FilterIcon size="18" />);
    case iconNamesConst.PLUS:
      return (<Box mt="-2px"><PlusIcon size="18" /></Box>);
    case iconNamesConst.LOGOUT:
      return (<Box mt="-2px" mr="1px"><LogOutIcon size="16" /></Box>);
    case iconNamesConst.DELETE:
      return (<Box mt="-2px"><DeleteIcon size="18" /></Box>);
    case iconNamesConst.HELP:
      return (<Box mt="-1px"><HelpIcon size="16" /></Box>);
    case iconNamesConst.SMARTPHONE:
      return (<Box mt="-1px"><SmartphoneIcon size="16" /></Box>);
    case iconNamesConst.QRCODE:
      return (<Box mt="-1px" mr="3px"><QrcodeIcon size="14" /></Box>);
    case iconNamesConst.USER:
      return (<Box mt="-2px" mr="2px"><UserIcon size="12" /></Box>);
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
          name: modalNamesConst.CONFIRMATION_MODAL,
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
