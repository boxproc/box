import React from 'react';
import { BaseFieldProps, WrappedFieldProps } from 'redux-form';

import { Flex } from '@rebass/grid';

import styled from 'theme';

import { Label } from './../../Text';
import { Hint } from './../../Utils';

import { componentUtil } from 'utils';

export const InputFieldWrapper = styled.div`
  position: relative;
  width: 100%;
  text-align: left;
  position: relative;

  &:not(:last-child) {
    margin-bottom: 15px;
  }

  .field {
    user-select: all;
  }

  .is-red {
    color: ${({ theme }) => theme.colors.red};
  }
`;

const ErrorWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  padding-top: 2px;
  font-size: 9px;
  line-height: 1;
  color: ${({ theme }) => theme.colors.red};
  white-space: nowrap;
`;

export interface InputFieldProps extends Partial<BaseFieldProps> {
  focusOnLabelClick?: boolean;
  hint?: string | React.ReactChild;
  id?: string;
  invalid?: boolean;
  isRequired?: boolean;
  label?: string;
  placeholder?: string;
  preventBlur?: boolean | undefined;
  showErrors?: boolean;
  type?: string;
  updateFieldOnChange?: (...args: any[]) => void;
  validateOnChange?: boolean;
}

interface InputWrapperProps {
  render: (
    invalid: boolean,
    preventBlur: boolean | undefined
  ) => React.ReactNode;
}

export type FieldProps = WrappedFieldProps & InputFieldProps;

const InputWrapper: React.FC<InputWrapperProps & FieldProps> = ({
  focusOnLabelClick = false,
  hint,
  id,
  invalid: defaultInvalid,
  isRequired,
  label,
  preventBlur,
  render,
  showErrors = true,
  validateOnChange,
  meta: {
    touched,
    error,
    submitFailed,
  },
}) => {
  let invalid = false;

  if (validateOnChange) {
    invalid = typeof error === 'string' || defaultInvalid;
  } else {
    invalid = (error === true && submitFailed)
      || (typeof error === 'string' && touched) || defaultInvalid;
  }

  return (
    <InputFieldWrapper className="input-field">
      {label && (
        <Label
          htmlFor={focusOnLabelClick ? id : null}
          invalid={invalid}
        >
          <Flex
            alignItems="center"
            justifyContent="space-between"
          >
            <span>
              {label}
              {isRequired && (<span className="is-red">*</span>)}
            </span>
            {hint && (<Hint text={hint} position="top" />)}
          </Flex>
        </Label>
      )}
      <div className="field">
        {render(invalid, preventBlur)}
      </div>
      {invalid && error && showErrors && (
        <ErrorWrapper>{error}</ErrorWrapper>
      )}
    </InputFieldWrapper>
  );
};

export const withFormField = <OriginalProps extends {}>(
  Component: React.ComponentType<OriginalProps & InputFieldProps>
): React.ComponentType<OriginalProps & FieldProps> =>
  class WithFormField extends
    React.Component<OriginalProps & FieldProps> {

    static displayName = `WithFormField(${componentUtil.getDisplayName(Component)})`;

    render() {
      return (
        <InputWrapper
          {...this.props}
          render={this.renderComponent}
        />
      );
    }

    renderComponent = (invalid: boolean) => {
      return (
        <Component
          {...this.props.input}
          {...this.props}
          invalid={invalid}
          onBlur={this.onBlur}
        />
      );
    }

    onBlur = () =>
      this.props.preventBlur
        ? ''
        : setTimeout(() => this.props.input.onBlur(this.props.input.value))
  };
