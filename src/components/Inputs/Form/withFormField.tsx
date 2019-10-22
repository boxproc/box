import React from 'react';
import { BaseFieldProps, WrappedFieldProps } from 'redux-form';

import styled from 'theme';

import { Label } from 'components/Text';

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
`;

const ErrorWrapper = styled.div`
  position: absolute;
  top: calc(100% + 3px);
  left: 0;
  padding-top: 3px;
  font-size: 10px;
  line-height: 1px
  color: ${({ theme }) => theme.colors.red};
`;

export interface InputFieldProps extends Partial<BaseFieldProps> {
  id?: string;
  type?: string;
  label?: string;
  placeholder?: string;
  invalid?: boolean;
  preventBlur?: boolean | undefined;
  validateOnChange?: boolean;
  fieldClassName?: string;
  showErrors?: boolean;
  updateFieldOnChange?: (...args: any[]) => void;
  focusOnLabelClick?: boolean;
}

interface InputWrapperProps {
  render: (
    invalid: boolean,
    preventBlur: boolean | undefined
  ) => React.ReactNode;
}

export type FieldProps = WrappedFieldProps & InputFieldProps;

const InputWrapper: React.FC<InputWrapperProps & FieldProps> = ({
  label,
  render,
  id,
  preventBlur,
  validateOnChange,
  fieldClassName = '',
  showErrors = true,
  focusOnLabelClick = false,
  invalid: defaultInvalid,
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
    <InputFieldWrapper className={['input-field', fieldClassName].join(' ')}>
      <Label
        htmlFor={focusOnLabelClick ? id : null}
        invalid={invalid}
      >
        {label}
      </Label>
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
        : setTimeout(() =>
          this.props.input.onBlur(this.props.input.value)
        )
  };
