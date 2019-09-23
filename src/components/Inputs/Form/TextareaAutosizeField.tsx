import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

import TextareaAutosize from 'react-autosize-textarea';

import styled from 'theme';

import { sharedInputCss } from './sharedInputCss';
import { withFormField } from './withFormField';

import { InvalidProp } from './types';

interface WrapperProps {
  height?: number;
  disabled?: boolean;
  invalid?: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  padding: 1px;
  height: ${({ height }) => height ? height + 'px' : '50px'};
  border: solid 1px ${({ theme }) => theme.colors.gray};
  border-radius: 2px;

  ${({ disabled, theme }) => disabled && `
    border-color: ${theme.colors.lightGray};
  `};

  ${({ invalid, theme }) => invalid && `
    border-color: ${theme.colors.red};
  `};

  &.is-focus {
    border-color: ${({ theme }) => theme.colors.normalAccent};
  }

  .ps__thumb-x,
  .ps__thumb-y {
    background-color: #ffa400;
  }
`;

const Textarea = styled(TextareaAutosize)`
  ${sharedInputCss};
  min-height: 100%;
  line-height: 1.35;
  resize: none;
  overflow: hidden;
  border: 0 !important;
`;

interface TextAreaProps extends InvalidProp, React.InputHTMLAttributes<HTMLTextAreaElement> {
  height?: number;
}

const TextareaAutosizeField: React.FC<TextAreaProps> = props => {
  const { height, disabled, invalid } = props;
  const wrapperRef = React.useRef(null);

  const addFocusClass = () => {
    wrapperRef.current.classList.add('is-focus');
  };
  const removeFocusClass = () => {
    wrapperRef.current.classList.remove('is-focus');
  };

  return (
    <Wrapper
      ref={wrapperRef}
      height={height}
      disabled={disabled}
      invalid={invalid}
      onFocus={addFocusClass}
      onBlur={removeFocusClass}
    >
      <PerfectScrollbar>
        <Textarea {...props} />
      </PerfectScrollbar>
    </Wrapper>
  );
};

export default withFormField(TextareaAutosizeField);
