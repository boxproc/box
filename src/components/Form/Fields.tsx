import React from 'react';
import { BaseFieldProps, WrappedFieldProps } from 'redux-form';

import styled from 'theme';

import Hint from 'components/Hint';
import { Label } from 'components/Text';

import HighlightCode from './HighlightCode';
import Input from './Input';
import PasswordInput from './Password';
import { SelectInput } from './Select';
import TextInput from './TextArea';

import { componentUtil } from 'utils';
import MaskInput from './MaskInput';

export const InputFieldWrapper = styled.div`
  width: 100%;

  text-align: left;
  position: relative;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }
  input::-webkit-outer-spin-button, input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const Title = styled(Label)`
  padding-bottom: 5px;
  display: flex;
  justify-content: space-between;

  .required-icon {
    color: ${({ theme }) => theme.redColor};
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

const InputWrapper: React.FC<InputWrapperProps & FieldProps> = props => {

  const {
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
  } = props;

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
          hint ? <Hint
            text={hint}
            position={hintPosition}
            width={hintWidth}
          />
            :
            isRequired && <span className="required-icon">*</span>
        }
      </Title>
      <div>
        {render(invalid, preventBlur)}
      </div>
    </InputFieldWrapper>
  );
};

export const withInputField = <OriginalProps extends {}>(
  Component: React.ComponentType<OriginalProps & InputFieldProps>
): React.ComponentType<OriginalProps & FieldProps> =>
  class WithInputField extends
    React.Component<OriginalProps & FieldProps> {

    static displayName = `WithInputField(${componentUtil.getDisplayName(Component)})`;

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
        isNumber={this.props.input.value && !isNaN(Number(this.props.input.value))}
      />
    )

    onBlur = () =>
      this.props.preventBlur ?
        ''
        :
        setTimeout(() =>
          this.props.input.onBlur(this.props.input.value)
        )
  };

export const InputField = withInputField(Input);
export const PasswordField = withInputField(PasswordInput);
export const SelectField = withInputField(SelectInput);
export const TextField = withInputField(TextInput);
export const HighLightCodeField = withInputField(HighlightCode);

export const MaskField = withInputField(MaskInput);
