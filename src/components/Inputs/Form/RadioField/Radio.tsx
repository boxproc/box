import React from 'react';
import { BaseFieldProps, WrappedFieldProps } from 'redux-form';

import { Box } from '@rebass/grid';

import styled from 'theme';

import { CheckedRadioIcon, UncheckedRadioIcon } from 'components';

interface RadioWrapperProps {
  disabled?: boolean;
  alignItems?: string;
}

const RadioWrapper = styled.label<RadioWrapperProps>`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: text;

  ${({ alignItems }) => alignItems && `
    align-items: ${alignItems};
  `};

  .radio-label {
    font-size: 14px;
  }

  ${({ disabled }) => disabled && `
    opacity: 0.5;
    pointer-events: none;
  `}
`;

const Input = styled.input`
  display: none;
`;

interface RadioProps extends BaseFieldProps, RadioWrapperProps, WrappedFieldProps {
  label: string | React.ReactNode;
  value: string;
  className?: string;
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
        <span>
          {isChecked
            ? (<CheckedRadioIcon />)
            : (<UncheckedRadioIcon />)
          }
        </span>
        <Box ml="7px">
          {typeof label === 'string'
            ? <div className="radio-label">{label}</div>
            : label
          }
        </Box>
      </RadioWrapper>
    </div>
  );
};

export default Radio;
