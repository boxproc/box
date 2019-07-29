import React from 'react';

import styled from 'theme';

import { scrollbarCss } from 'components/Scrollbar';

import { InvalidProp } from './Input';
import { sharedInputCss } from './sharedInputCss';

interface TextAreaProps extends InvalidProp, React.InputHTMLAttributes<HTMLTextAreaElement> {}

const TextInput = styled.textarea<TextAreaProps>`
  ${sharedInputCss};
  ${scrollbarCss};
  height: auto;
  min-height: 50px;
  line-height: 1.35;
  resize: none;
  overflow: auto;
`;

export default TextInput;
