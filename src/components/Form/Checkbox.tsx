import React, { ChangeEvent } from 'react';
import { BaseFieldProps, WrappedFieldProps } from 'redux-form';

import styled, { theme as mainTheme } from 'theme';

import { CheckedBoxIcon, UncheckedBoxIcon } from '../Icon';
import { Label as DefaultLabel } from '../Text';

interface CheckboxWrapperProp {
  disabled?: boolean;
}

const CheckboxWrapper = styled.div<CheckboxWrapperProp>`
  display: flex;
  align-items: flex-start;
  font-size: 0;

  .label {
    cursor: ${({ disabled }) => disabled ? 'auto' : 'pointer'};
    padding-left: 7px;
  }

  ${({ disabled, theme }) => disabled && `
    background-color: ${theme.colors.white};
    opacity: 0.5;
  `};
`;

const CheckboxFieldWrapper = styled.div`
  input {
    display: none;
  }
  label {
    cursor: pointer;
  }
`;

interface CheckboxProps extends BaseFieldProps, Partial<WrappedFieldProps> {
  value: boolean;
  id: string;
  onChange: (event: ChangeEvent, newValue?: boolean, name?: string) => void;
  fieldClassName?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  value,
  id,
  meta: { invalid, touched },
  fieldClassName,
  ...props
}) => {
  return (
    <CheckboxFieldWrapper>
      <input
        id={id}
        {...props}
        type="checkbox"
      />
      <label htmlFor={id}>
        {value ?
          <CheckedBoxIcon />
          :
          <UncheckedBoxIcon
            css={invalid && touched ? `
              path {
                stroke: ${mainTheme.colors.red};
                stroke-opacity: 1;
              }
            ` : ``}
          />
        }
      </label>
    </CheckboxFieldWrapper>
  );
};

interface CheckboxFieldProps extends BaseFieldProps, WrappedFieldProps {
  label: string | React.FC;
  id?: string;
  disabled?: boolean;
}

export const CheckboxField: React.FC<CheckboxFieldProps & WrappedFieldProps> = ({
  input,
  label,
  disabled,
  id = 'option',
  ...props
}) => {
  const Label = label;
  const handleChange = React.useCallback(
    () => input.onChange(!input.value),
    [input]
  );

  return (
    <CheckboxWrapper
      className="input-field checkbox-field"
      disabled={disabled}
    >
      <Checkbox
        {...props}
        {...input}
        id={id}
        onChange={handleChange}
      />
      {
        typeof label === 'string' ? (
          <DefaultLabel
            className="label"
            htmlFor={id}
            active={true}
          >
            {label}
          </DefaultLabel>
        ) : (
            <Label {...props} />
          )
      }
    </CheckboxWrapper>
  );
};
