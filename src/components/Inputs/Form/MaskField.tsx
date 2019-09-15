import React from 'react';
import ReactInputMask, { InputState, MaskOptions } from 'react-input-mask';

import styled from 'theme';

import { sharedInputCss } from './sharedInputCss';
import { withFormField } from './withFormField';

import { InputCommonProps } from './types';

const Wrapper = styled.div<InputCommonProps>`
  input {
    ${sharedInputCss};
  }
`;

interface MaskFieldProps extends InputCommonProps {
  fieldClassName?: string;
  mask: string;
  maskChar?: string | null;
  formatChars?: { [key: string]: string };
  alwaysShowMask?: boolean;
  inputRef?: React.Ref<HTMLInputElement>;
  beforeMaskedValueChange?(
    newState: InputState,
    oldState: InputState,
    userInput: string,
    maskOptions: MaskOptions
  ): InputState;
}

const MaskField: React.FC<MaskFieldProps> = ({
  invalid,
  fieldClassName,
  ...props
}) => (
    <Wrapper invalid={invalid}>
      <ReactInputMask {...props} />
    </Wrapper>
  );

export default withFormField(MaskField);