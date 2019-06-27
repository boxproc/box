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
  small?: boolean;
}

interface WrapperProps {
  small?: boolean;
}

const Wrapper = styled.button<WrapperProps>`
  ${sharedStyle}
  width: 100%;
  padding: ${({ small }) => small ? '7px 10px' : '12px 30px'};
  border-radius: 2px;
  border: 2px solid ${({ theme }) => theme.grayColor};
  background-color: ${({ theme }) => theme.lightGrayColor};
  color: ${({ theme }) => theme.blackColor};
  font-size: ${({ small }) => small ? '14px' : '15px'};

  &:disabled {
    opacity: .5;
  }
`;

export const Button: React.FC<ButtonProps> = ({
  disabled,
  onClick,
  text,
  small,
}) => {
  return (
    <Wrapper
      onClick={disabled ? null : onClick}
      small={small}
    >
      {text}
    </Wrapper>
  );
};
