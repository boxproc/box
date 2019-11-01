import React from 'react';
import NumberFormat from 'react-number-format';

import styled from 'theme';

import { sharedInputCss } from './sharedInputCss';
import { withFormField } from './withFormField';

import { InputCommonProps } from './types';

const Wrapper = styled.div<InputCommonProps>`
  input {
    ${sharedInputCss};

    ${({ isNumber }) => isNumber && `
      text-align: right;

      &::-webkit-input-placeholder {
        text-align: right;
      }

      &::-moz-placeholder {
        text-align: right;
      }
    `}
  }
`;

interface NumberFormatFieldProps extends InputCommonProps {
  invalid?: boolean;
  isNumber?: boolean;
  value: string | number;
}

const NumberFormatField: React.FC<NumberFormatFieldProps> = ({
  invalid,
  isNumber,
  value,
  defaultValue,
  type,
  ...props
}) => {
  return (
    <Wrapper invalid={invalid} isNumber={isNumber}>
      <NumberFormat
        value={value}
        {...props}
      />
    </Wrapper>
  );
};

export default withFormField(NumberFormatField);
