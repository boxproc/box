import React from 'react';
import { BaseFieldProps, WrappedFieldProps } from 'redux-form';

import Radio from './Radio';

interface IOption {
  label: string;
  value: string;
}

interface IRadioField extends Partial<BaseFieldProps>, WrappedFieldProps {
  option: IOption;
}

export const RadioField: React.FC<IRadioField> = ({
  name,
  option,
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
