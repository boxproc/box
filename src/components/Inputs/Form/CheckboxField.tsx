import React, { ChangeEvent } from 'react';
import { BaseFieldProps, WrappedFieldProps } from 'redux-form';

import styled, { theme as mainTheme } from 'theme';

import { CheckedBoxIcon, UncheckedBoxIcon } from './../../Icons';
import { Label as DefaultLabel } from './../../Text';

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

  ${({ disabled }) => disabled && `
    pointer-events: none;

    .checkbox {
      opacity: 0.5;
    }
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
  id: string;
  onChange: (event: ChangeEvent, newValue?: boolean, name?: string) => void;
  value: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  meta: { invalid, touched },
  value,
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
        {value
          ? (<CheckedBoxIcon />)
          : (
            <UncheckedBoxIcon
              css={invalid && touched ? `
              path {
                stroke: ${mainTheme.colors.red};
                stroke-opacity: 1;
              }
            ` : ``}
            />
          )
        }
      </label>
    </CheckboxFieldWrapper>
  );
};

interface CheckboxFieldProps extends BaseFieldProps, WrappedFieldProps {
  disabled?: boolean;
  id?: string;
  label: string | React.FC;
}

const CheckboxField: React.FC<CheckboxFieldProps & WrappedFieldProps> = ({
  disabled,
  id = 'option',
  input,
  label,
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
      <div className="checkbox">
        <Checkbox
          {...props}
          {...input}
          id={id}
          onChange={!disabled ? handleChange : null}
        />
      </div>
      {
        typeof label === 'string'
          ? (
            <DefaultLabel
              className="label"
              htmlFor={id}
              active={true}
            >
              {label}
            </DefaultLabel>
          )
          : (<Label {...props} />)
      }
    </CheckboxWrapper>
  );
};

export default CheckboxField;
