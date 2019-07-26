import React from 'react';

import styled from 'theme';

import { scrollbarCss } from 'components/Scrollbar';

import { InvalidProp } from './Input';
import { sharedInputCss } from './sharedInputCss';

interface TextAreaProps extends InvalidProp, React.InputHTMLAttributes<HTMLTextAreaElement> {}

const TextInput = styled.textarea<TextAreaProps>`
  ${sharedInputCss};
  ${scrollbarCss};
  resize: none;
  min-height: 100px;
  overflow: auto;
`;

export default TextInput;
