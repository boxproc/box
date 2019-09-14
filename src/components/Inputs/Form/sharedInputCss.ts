import { css } from 'theme';

import { InvalidProp } from './Input';

export const sharedInputCss = css<InvalidProp>`
  font-size: 13px;
  line-height: 1.3;
  width: 100%;
  height: 33px;
  padding: 7px;
  box-shadow: none;
  box-sizing: border-box;
  outline: none;
  color: ${({ theme }) => theme.colors.black};
  border: solid 1px ${({ theme, invalid }) =>
    invalid ? theme.colors.red : theme.colors.gray};
  border-radius: 2px;

  &:focus{
    border: solid 1px ${({ theme, invalid }) =>
    invalid ? theme.colors.red : theme.colors.normalAccent};
  }

  ::placeholder {
    font-size: 13px;
    line-height: 17px;
    color: ${({ theme }) => theme.colors.gray};
    font-weight: normal;
    text-align: left;
  }

  :disabled {
    background-color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.lightGray};
  }
`;
