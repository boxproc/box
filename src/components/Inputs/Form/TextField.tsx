import React from 'react';

import styled from 'theme';
import { scrollbarCss } from 'theme/scrollbarCss';

import { sharedInputCss } from './sharedInputCss';
import { withFormField } from './withFormField';

import { InvalidProp } from './types';

interface TextAreaProps extends InvalidProp, React.InputHTMLAttributes<HTMLTextAreaElement> {
  height?: number;
}

const TextField = styled.textarea<TextAreaProps>`
  ${sharedInputCss};
  ${scrollbarCss};
  height: auto;
  min-height: ${({ height }) => height ? height + 'px' : '52px'};
  height: ${({ height }) => height ? height + 'px' : '52px'};
  line-height: 1.35;
  resize: vertical;
  overflow: auto;
`;

export default withFormField(TextField);
