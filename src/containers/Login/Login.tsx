import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import styled from 'theme';

import { InputField, PasswordField } from 'components/Form';

import { Button } from 'components/Buttons';

import { formsConst } from 'consts';

import logo from 'resources/images/logo.svg';

import { formErrorUtil } from 'utils';

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  width: 100%;
  margin: 0 auto;
`;

interface LoginProps { }

type LoginPropsAllProps = LoginProps & InjectedFormProps<{}, LoginProps>;

const Login: React.FC<LoginPropsAllProps> = () => {
  return (
    <FormWrapper>
      <Flex justifyContent="center">
        <Box mb="20px">
          <img src={logo} width={120} alt=""/>
        </Box>
      </Flex>
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
      <Button>Submit</Button>
    </FormWrapper>
  );
};

export default reduxForm<{}, LoginProps>({
  form: formsConst.LOGIN,
  destroyOnUnmount: false,
  enableReinitialize: true,
})(Login);
