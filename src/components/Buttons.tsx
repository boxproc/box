import React from 'react';

import styled, { css } from 'theme';

export const sharedStyle = css`
  font-size: 15px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 18px;
  letter-spacing: normal;
  cursor: pointer;
  border: 0;
  outline: 0;
`;

interface ButtonProps {
  text: string;
  disabled?: boolean;
  onClick?: () => void;
  transparent?: boolean;
}

interface WrapperProps {
  transparent?: boolean;
}

const Wrapper = styled.button<WrapperProps>`
  ${sharedStyle}
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

  &:hover {
    color: ${({ theme, transparent }) => transparent && theme.lightAccentColor};
  }

  &:disabled {
    opacity: .5;
  }
`;

export const Button: React.FC<ButtonProps> = ({
  disabled,
  onClick,
  text,
  transparent,
}) => {
  return (
    <Wrapper
      onClick={disabled ? null : onClick}
      transparent={transparent}
    >
      {text}
    </Wrapper>
  );
};
