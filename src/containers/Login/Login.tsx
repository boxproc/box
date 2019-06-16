import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import styled from 'theme';

import { Button } from 'components/Buttons';
import { InputField, PasswordField } from 'components/Form';

import { formsConst } from 'consts';

import logo from 'resources/images/logo.svg';

import { HandleUserLogin } from 'store/domains';

import { formErrorUtil } from 'utils';

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  width: 100%;
  margin: 0 auto;
`;

interface LoginProps {
  userLogin: HandleUserLogin;
}

type LoginPropsAllProps = LoginProps & InjectedFormProps<{}, LoginProps>;

const Login: React.FC<LoginPropsAllProps> = ({
  handleSubmit,
  submitting,
  userLogin,
}) => {
  return (
    <FormWrapper onSubmit={handleSubmit(data => userLogin(data))}>
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
      <Button
        disabled={submitting}
      >
        Submit
      </Button>
    </FormWrapper>
  );
};

export default reduxForm<{}, LoginProps>({
  form: formsConst.USER_LOGIN,
  destroyOnUnmount: false,
  enableReinitialize: true,
})(Login);
