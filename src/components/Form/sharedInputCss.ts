import { css } from 'theme';

import { InvalidProp } from './Input';

export const sharedInputCss = css<InvalidProp>`
  font-size: 13px;
  line-height: 1.3;
  width: 100%;
  height: 46px;
  padding: 10px;
  box-shadow: none;
  box-sizing: border-box;
  outline: none;
  color: ${({ theme }) => theme.blackColor};
  border: solid 1px ${({ theme, invalid }) => invalid ? theme.redColor : theme.grayColor};
  border-radius: 2px;

  &:focus{
    border: solid 1px ${({ theme, invalid }) => invalid ? theme.redColor : theme.darkGrayColor};
  }

  ::placeholder {
    font-size: 13px;
    line-height: 17px;
    color: ${({ theme }) => theme.grayColor};
    font-weight: normal;
  }

  :disabled {
    background-color: ${({theme}) => theme.whiteColor};
    opacity: 0.8;
  }
`;
