import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box } from '@rebass/grid';

import styled from 'theme';

import { Button } from 'components/Buttons';
import { InputField, PasswordField } from 'components/Form';
import { highlightCss } from 'components/highlightCss';

import { formsConst } from 'consts';

import logo from 'resources/images/logo.svg';

import { HandleUserLogin } from 'store/domains';

import { formErrorUtil, stringsUtil } from 'utils';

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  width: 100%;
  margin: 0 auto;

  .highlight {
    ${highlightCss}
    &:before {
      top: auto;
      bottom: 0;
      left: 62px;
    }
  }
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
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => userLogin({...data, userAgent: stringsUtil.userAgent})),
    [userLogin]
  );

  return (
    <FormWrapper onSubmit={handleSubmitForm}>
      <Box mb="20px" fontSize="0" className="highlight">
        <img src={logo} width={62} alt="" />
      </Box>
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
      <Box mt="10px">
        <Button disabled={submitting}>
          Log in
        </Button>
      </Box>
    </FormWrapper>
  );
};

export default reduxForm<{}, LoginProps>({
  form: formsConst.USER_LOGIN,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(Login);
