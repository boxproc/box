import { css } from 'theme';

import { InputProps } from './types';

export const sharedInputCss = css<InputProps>`
  font-size: 13px;
  line-height: 1.3;
  width: 100%;
  height: 33px;
  padding: 7px;
  text-align: ${({ isNumber }) => isNumber ? 'right' : 'left'}
  box-shadow: none;
  box-sizing: border-box;
  outline: none;
  color: ${({ theme }) => theme.colors.black};
  border: solid 1px ${({ theme, invalid }) => invalid ? theme.colors.red : theme.colors.gray};
  border-radius: 2px;
  transition: all .1s linear;

  &:focus{
    border: solid 1px ${({ theme, invalid }) =>
    invalid ? theme.colors.red : theme.colors.normalAccent};
  }

  ${({ isEditableCellStyle, theme }) => isEditableCellStyle && `
    border-color: transparent;
    background-color: #fafafa;
    height: auto;
    align-self: flex-start;
    padding: 2px 7px;

    &:focus{
      background-color: ${theme.colors.white};
    }
  `};

  ::placeholder {
    font-size: 13px;
    line-height: 17px;
    color: ${({ theme }) => theme.colors.gray};
    font-weight: normal;
    text-align: left;
  }

  ${({ isRightPlaceholder }) => isRightPlaceholder && `
    &::-webkit-input-placeholder {
      text-align: right;
    }

    &::-moz-placeholder {
      text-align: right;
    }
  `}

  :disabled,
  :read-only {
    background-color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.lightGray};
    user-select: text;
  }
`;
