import React from 'react';
import ReactInputMask, { InputState, MaskOptions } from 'react-input-mask';

import styled from 'theme';

import { sharedInputCss } from './sharedInputCss';
import { withFormField } from './withFormField';

import { ICommonInput } from './types';

const Wrapper = styled.div<ICommonInput>`
  input {
    ${sharedInputCss};
  }
`;

interface IMaskField extends ICommonInput {
  alwaysShowMask?: boolean;
  formatChars?: { [key: string]: string };
  inputRef?: React.Ref<HTMLInputElement>;
  isRequired?: boolean;
  mask: string;
  maskChar?: string | null;
  maskPlaceholder?: string;
  beforeMaskedValueChange?(
    newState: InputState,
    oldState: InputState,
    userInput: string,
    maskOptions: MaskOptions
  ): InputState;
}

const MaskField: React.FC<IMaskField> = ({
  invalid,
  isRequired,
  ...props
}) => {
  return (
    <Wrapper invalid={invalid}>
      <ReactInputMask {...props} />
    </Wrapper>
  );
};

export default withFormField(MaskField);
