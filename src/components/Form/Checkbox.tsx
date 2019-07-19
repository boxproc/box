import React, { ChangeEvent } from 'react';
import { BaseFieldProps, WrappedFieldProps } from 'redux-form';

import styled, { theme as mainTheme } from 'theme';

import { CheckedBoxIcon, UncheckedBoxIcon } from '../Icon';
import { Label as DefaultLabel } from '../Text';

interface DisabledProp {
  disabled?: boolean;
}

const CheckboxWrapper = styled.div<DisabledProp>`
  display: flex;
  align-items: flex-start;
  font-size: 0;

  .label {
    cursor: pointer;
    padding-left: 10px;
    padding-top: 1px;
  }

  ${({ disabled, theme }) => disabled && `
    background-color: ${theme.whiteColor};
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
                stroke: ${mainTheme.redColor};
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
      disabled={props.disabled}
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
