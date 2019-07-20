import React from 'react';

import { Box } from '@rebass/grid';

import { Filter } from 'styled-icons/boxicons-regular/Filter';
import { Plus } from 'styled-icons/boxicons-regular/Plus';
import { Reset } from 'styled-icons/boxicons-regular/Reset';
import { LogOut } from 'styled-icons/feather/LogOut';
import { Delete } from 'styled-icons/material/Delete';

import styled, { css } from 'theme';

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
  // width: auto;
  color: ${({ theme }) => theme.blackColor};
  background: transparent;
  font-size: ${({ size }) => size ? size + 'px' : '13px'};
  text-transform: uppercase;
  letter-spacing: .2pt;
  color: ${({ theme }) => theme.grayColor };
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
}

const renderIcon = (name: string) => {
  switch (name) {
    case 'filter':
      return (<Filter size="18"/>);
    case 'plus':
      return (<Box mt="-2px"><Plus size="18"/></Box>);
    case 'logOut':
      return (<LogOut size="16"/>);
    case 'delete':
      return (<Box mt="-2px"><Delete size="18"/></Box>);
    case 'reset':
      return (<Box mt="-2px"><Reset size="14"/></Box>);
    default:
      return null;
  }
};

export const Button: React.FC<ButtonProps> = ({
  disabled,
  onClick,
  text,
  className,
  iconName,
  type,
  size,
}) => {
  return (
    <ButtonWrapper
      onClick={disabled ? null : onClick}
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

interface ButtonWrapperBgProps {
  text: string;
  disabled?: boolean;
  onClick?: () => void;
}

const ButtonWrapperBg = styled.button`
  ${sharedStyle}
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 12px 30px;
  border-radius: 2px;
  border: 2px solid ${({ theme }) => theme.grayColor };
  background: ${({ theme }) => theme.lightGrayColor};
  color: ${({ theme }) => theme.blackColor};
  font-size: 15px;
  line-height: 1.3;

  &:disabled {
    opacity: .5;
    pointer-events: none;
  }
`;

export const ButtonBg: React.FC<ButtonWrapperBgProps> = ({
  disabled,
  onClick,
  text,
}) => {
  return (
    <ButtonWrapperBg
      onClick={disabled ? null : onClick}
      disabled={disabled}
    >
      {text}
    </ButtonWrapperBg>
  );
};
