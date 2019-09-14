import React from 'react';

import styled from 'theme';

import { sharedInputCss } from './sharedInputCss';

export interface InvalidProp {
  invalid?: boolean;
}

interface InputProp {
  isNumber?: boolean;
}

export interface InputCommonProps extends
  InvalidProp, InputProp, React.InputHTMLAttributes<HTMLInputElement> {}

const DefaultInput = styled.input<InputCommonProps>`
  ${sharedInputCss};
  text-align: ${({ isNumber }) => isNumber ? 'right' : 'left'}
`;

export default DefaultInput;
