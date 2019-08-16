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
  padding: 6px 10px;
  border-radius: 2px;
  border: 2px solid ${({ theme }) => theme.grayColor};
  background: ${({ theme }) => theme.lightGrayColor};
  color: ${({ theme }) => theme.blackColorOpacity8};
  font-size: 14px;
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
