import React from 'react';
import NumberFormat from 'react-number-format';

import styled from 'theme';

import { sharedInputCss } from './../sharedInputCss';

import { InputCommonProps } from './../types';

const Wrapper = styled.div<InputCommonProps>`
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

interface NumberFormatInputProps extends InputCommonProps {
  invalid?: boolean;
  value: string | number;
  fixedDecimalScale?: boolean;
  decimalScale?: number;
  isEditableCellStyle?: boolean;
}

const NumberFormatInput: React.FC<NumberFormatInputProps> = ({
  invalid,
  value,
  defaultValue,
  isEditableCellStyle,
  type,
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
