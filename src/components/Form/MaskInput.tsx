import React from 'react';
import ReactInputMask, { InputState, MaskOptions } from 'react-input-mask';

import styled from 'theme';

import { InputCommonProps } from './Input';
import { sharedInputCss } from './sharedInputCss';

const Wrapper = styled.div<InputCommonProps>`
  input {
    ${sharedInputCss};
  }
`;

interface MaskInputProps extends InputCommonProps {
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

const MaskInput: React.FC<MaskInputProps> = ({
  invalid,
  fieldClassName,
  ...props
}) => (
    <Wrapper invalid={invalid}>
      <ReactInputMask {...props} />
    </Wrapper>
  );

export default MaskInput;
