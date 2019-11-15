import React from 'react';
import { BaseFieldProps, WrappedFieldProps } from 'redux-form';

import Radio from './Radio';

interface Option {
  label: string;
  value: string;
}

interface RadioFieldProps extends Partial<BaseFieldProps>, WrappedFieldProps {
  option: Option;
}

export const RadioField: React.FC<RadioFieldProps> = ({
  option,
  name,
  ...extraProps
}) => (
    <Radio
      {...extraProps}
      name={name}
      label={option && option.label}
      value={option && option.value}
    />
  );

export default RadioField;
