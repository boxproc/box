import React from 'react';
import { BaseFieldProps, WrappedFieldProps } from 'redux-form';

import styled from 'theme';

import { Hint } from 'components';
import { Label } from 'components/Text';

import { componentUtil } from 'utils';

export const InputFieldWrapper = styled.div`
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

const Title = styled(Label)`
  padding-bottom: 5px;
  display: flex;
  justify-content: space-between;

  .required-icon {
    color: ${({ theme }) => theme.colors.red};
  }
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
  isRequired?: boolean;
  hint?: string;
  hintPosition?: string;
  hintWidth?: string;
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
  focusOnLabelClick = true,
  invalid: defaultInvalid,
  isRequired,
  hint,
  hintPosition,
  hintWidth,
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
      <Title
        htmlFor={focusOnLabelClick ? id : null}
        invalid={invalid}
      >
        {label}
        {(invalid && showErrors) ?
          (error && <span>{error}</span>)
          :
          hint
            ? (
              <Hint
                text={hint}
                position={hintPosition}
                width={hintWidth}
              />
            )
            : isRequired && (<span className="required-icon">*</span>)
        }
      </Title>
      <div className="field">
        {render(invalid, preventBlur)}
      </div>
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

    renderComponent = (invalid: boolean) => (
      <Component
        {...this.props.input}
        {...this.props}
        invalid={invalid}
        onBlur={this.onBlur}
      />
    )

    onBlur = () =>
      this.props.preventBlur
        ? ''
        : setTimeout(() =>
          this.props.input.onBlur(this.props.input.value)
        )
  };