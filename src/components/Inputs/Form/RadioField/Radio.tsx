import React from 'react';
import { BaseFieldProps, WrappedFieldProps } from 'redux-form';

import { Box } from '@rebass/grid';

import styled from 'theme';

import { CheckedRadioIcon, UncheckedRadioIcon } from './../../../Icons';

interface RadioWrapperProps {
  alignItems?: string;
  disabled?: boolean;
}

const RadioWrapper = styled.label<RadioWrapperProps>`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: text;

  .radio-label {
    font-size: 13px;
  }

  .radio-label-block {
    margin-top: 2px;
  }

  .radio-icon-wrapper {
    font-size: 0;
  }

  ${({ alignItems }) => alignItems && `
    align-items: ${alignItems};

    .radio-label-block {
      margin-top: 0;
    }
  `};

  ${({ disabled }) => disabled && `
    opacity: 0.5;
    pointer-events: none;
  `}
`;

const Input = styled.input`
  display: none;
`;

interface RadioProps extends BaseFieldProps, RadioWrapperProps, WrappedFieldProps {
  className?: string;
  label: string | React.ReactNode;
  value: string;
}

const Radio: React.FC<RadioProps> = ({ value, label, disabled, ...props }) => {
  const { input, alignItems, className } = props;

  const isChecked = React.useMemo(
    () => input.value === value,
    [value, input]
  );

  const handleChange = React.useCallback(
    () => input.onChange(value),
    [value, input]
  );

  return (
    <div className={className}>
      <RadioWrapper
        alignItems={alignItems}
        disabled={disabled}
      >
        <Input
          {...props}
          {...props.input}
          type="radio"
          disabled={disabled}
          checked={isChecked}
          onChange={handleChange}
        />
        <span className="radio-icon-wrapper">
          {isChecked
            ? (<CheckedRadioIcon />)
            : (<UncheckedRadioIcon />)
          }
        </span>
        <Box ml="7px">
          {typeof label === 'string'
            ? <div className="radio-label">{label}</div>
            : <div className="radio-label-block">{label}</div>
          }
        </Box>
      </RadioWrapper>
    </div>
  );
};

export default Radio;
