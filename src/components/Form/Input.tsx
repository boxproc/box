import React from 'react';

import styled from 'theme';

import { sharedInputCss } from './sharedInputCss';

export interface InvalidProp {
  invalid?: boolean;
}

export interface InputCommonProps extends
  InvalidProp, React.InputHTMLAttributes<HTMLInputElement> {}

const DefaultInput = styled.input<InputCommonProps>`
  ${sharedInputCss};
`;

export default DefaultInput;
