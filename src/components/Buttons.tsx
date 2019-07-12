import React from 'react';
import { Filter } from 'styled-icons/boxicons-regular/Filter';
import { Plus } from 'styled-icons/boxicons-regular/Plus';

import styled, { css } from 'theme';

export const sharedStyle = css`
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  cursor: pointer;
  border: 0;
  outline: 0;
`;

interface WrapperProps {
  transparent?: boolean;
}

const Wrapper = styled.button<WrapperProps>`
  ${sharedStyle}
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: ${({ transparent }) => transparent ? '0' : '12px 30px'};
  border-radius: 2px;
  border: 2px solid ${({ theme, transparent }) => !transparent ? theme.grayColor : 'transparent'};
  background: ${({ theme, transparent }) => !transparent ? theme.lightGrayColor : 'transparent'};
  color: ${({ theme }) => theme.blackColor};
  font-size: ${({ transparent }) => transparent ? '13px' : '15px'};
  text-transform: ${({ transparent }) => transparent && 'uppercase'};
  letter-spacing: ${({ transparent }) => transparent && '.2pt'};
  color: ${({ theme, transparent }) => transparent && theme.grayColor};
  font-weight: ${({ transparent }) => transparent ? 500 : 400};
  line-height: 1.3;

  &:hover {
    color: ${({ theme, transparent }) => transparent && theme.lighterAccentColor};
  }

  &:disabled {
    opacity: .5;
    pointer-events: none;
  }
`;

interface ButtonProps {
  text: string;
  disabled?: boolean;
  onClick?: () => void;
  transparent?: boolean;
  className?: string;
  iconName?: 'filter' | 'plus';
  type?: 'reset' | 'submit';
}

const renderIcon = (name: string) => {
  switch (name) {
    case 'filter':
      return <Filter size="18"/>;
    case 'plus':
      return <Plus size="18"/>;
    default:
      return null;
  }
};

export const Button: React.FC<ButtonProps> = ({
  disabled,
  onClick,
  text,
  transparent,
  className,
  iconName,
  type,
}) => {
  return (
    <Wrapper
      onClick={disabled ? null : onClick}
      transparent={transparent}
      className={className}
      disabled={disabled}
      type={type}
    >
      {iconName && renderIcon(iconName)}
      {text}
    </Wrapper>
  );
};
