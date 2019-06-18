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
  disabled?: boolean;
  onClick?: () => void;
}

const Wrapper = styled.button<ButtonProps>`
  ${sharedStyle}
  width: 100%;
  height: 46px;
  padding: 10px 30px;
  border-radius: 2px;
  border: 2px solid ${({ theme }) => theme.grayColor};
  background-color: ${({ theme }) => theme.lightGrayColor};
  color: ${({ theme }) => theme.blackColor};

  &:disabled {
    opacity: .5;
  }
`;

export const Button: React.FC<ButtonProps> = ({
  disabled,
  onClick,
  children,
}) => {
  return (
    <Wrapper
      onClick={disabled ? null : onClick}
    >
      {children}
    </Wrapper>
  );
};
