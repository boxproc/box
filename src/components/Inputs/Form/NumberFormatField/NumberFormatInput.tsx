import React from 'react';
import NumberFormat from 'react-number-format';

import styled from 'theme';

import { sharedInputCss } from './../sharedInputCss';
import { ICommonInput } from './../types';

const Wrapper = styled.div<ICommonInput>`
  input {
    ${sharedInputCss};

    text-align: right;

    &::-webkit-input-placeholder {
      text-align: right;
    }

    &::-moz-placeholder {
      text-align: right;
    }
  }
`;

interface INumberFormatInput extends ICommonInput {
  decimalScale?: number;
  fixedDecimalScale?: boolean;
  invalid?: boolean;
  isEditableCellStyle?: boolean;
  value: string | number;
}

const NumberFormatInput: React.FC<INumberFormatInput> = ({
  defaultValue,
  invalid,
  isEditableCellStyle,
  type,
  value,
  ...props
}) => {
  return (
    <Wrapper
      invalid={invalid}
      isEditableCellStyle={isEditableCellStyle}
    >
      <NumberFormat
        value={value}
        {...props}
      />
    </Wrapper>
  );
};

export default NumberFormatInput;
