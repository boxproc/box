import React from 'react';

import styled from 'theme';
import { scrollbarCss } from 'theme/styles';

import { sharedInputCss } from './sharedInputCss';
import { withFormField } from './withFormField';

import { IInvalidValue } from './types';

interface ITextarea extends IInvalidValue, React.InputHTMLAttributes<HTMLTextAreaElement> {
  height?: number;
}

const TextareaField = styled.textarea<ITextarea>`
  ${sharedInputCss};
  height: auto;
  min-height: ${({ height }) => height ? `${height}px` : '52px'};
  height: ${({ height }) => height ? `${height}px` : '52px'};
  line-height: 1.35;
  resize: vertical;
  overflow: auto;
  ${scrollbarCss};
`;

export default withFormField(TextareaField);
