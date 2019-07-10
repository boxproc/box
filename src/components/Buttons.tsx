import React from 'react';

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

  .icon {
    margin-right: 3px;
    margin-top: -2px;
    font-size: 20px;
  }
`;

interface ButtonProps {
  text: string;
  disabled?: boolean;
  onClick?: () => void;
  transparent?: boolean;
  className?: string;
  icon?: string;
  type?: 'reset' | 'submit';
}

export const Button: React.FC<ButtonProps> = ({
  disabled,
  onClick,
  text,
  transparent,
  className,
  icon,
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
      {icon && (<span className="icon">{icon}</span>)}
      {text}
    </Wrapper>
  );
};
