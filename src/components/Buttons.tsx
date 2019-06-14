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
  primary?: boolean;
}

export const Button = styled.button<ButtonProps>`
  ${sharedStyle}
  height: 46px;
  padding: 10px 30px;

  border-radius: 2px;

  background-color: ${({ primary, theme }) =>
    primary ? theme.normalAccentColor : theme.blackColor};
  color: ${({ theme }) => theme.whiteColor};

  &:hover {
    background-color: ${({ primary, theme }) =>
      primary ? theme.lightAccentColor : theme.lightBlackColor};
  }

  &:disabled {
    opacity: .5;
  }
`;
