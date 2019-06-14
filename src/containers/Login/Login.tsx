import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import styled from 'theme';

import { InputField, PasswordField } from 'components/Form';

import { Button } from 'components/Buttons';

import { formsConst } from 'consts';

import { formErrorUtil } from 'utils';

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  width: 100%;
  align-self: center;
  justify-content: center;
`;

interface LoginProps { }

type LoginPropsAllProps = LoginProps & InjectedFormProps<{}, LoginProps>;

const Login: React.FC<LoginPropsAllProps> = () => {
  return (
    <FormWrapper>
      <Field
        name="userName"
        placeholder="Enter user name"
        component={InputField}
        disabled={false}
        label="Login"
        validate={[formErrorUtil.required]}
      />
      <Field
        name="password"
        placeholder="Enter password"
        component={PasswordField}
        disabled={false}
        label="Password"
        validate={[formErrorUtil.required]}
      />
      <Button primary={true}>Submit</Button>
    </FormWrapper>
  );
};

export default reduxForm<{}, LoginProps>({
  form: formsConst.LOGIN,
  destroyOnUnmount: false,
  enableReinitialize: true,
})(Login);
