import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box } from '@rebass/grid';

import styled from 'theme';

import { Button } from 'components/Buttons';
import { CheckboxField, InputField, PasswordField } from 'components/Form';
import { highlightCss } from 'components/highlightCss';

import { cookiesExpires, cookiesNames, formsNames } from 'consts';

import logo from 'resources/images/logo.svg';

import { HandleUserLogin } from 'store/domains';

import { cookiesUtil, formErrorUtil } from 'utils';

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
  isRememberedMe: boolean;
  isPasswordFocus: boolean;
  userName: string;
}

type LoginPropsAllProps = LoginProps & InjectedFormProps<{}, LoginProps>;

const Login: React.FC<LoginPropsAllProps> = ({
  handleSubmit,
  submitting,
  userLogin,
  userName,
  isRememberedMe,
  isPasswordFocus,
}) => {
  React.useEffect(
    () => {
      if (isRememberedMe) {
        cookiesUtil.setCookie(
          cookiesNames.USER_NAME,
          userName, {
            expires: cookiesExpires.USER_NAME_EXPIRES,
          }
        );
      }
    },
    [isRememberedMe, userName]
  );

  const handleSubmitForm = React.useCallback(
    handleSubmit(data => userLogin(data)),
    [handleSubmit, userLogin]
  );

  return (
    <FormWrapper onSubmit={handleSubmitForm}>
      <Box mb="20px" fontSize="0" className="highlight">
        <img src={logo} width={62} alt="" />
      </Box>
      <Field
        id="userName"
        name="userName"
        placeholder="Enter user name"
        component={InputField}
        disabled={false}
        label="Login"
        validate={[formErrorUtil.required]}
      />
      <Field
        id="passwordHash"
        name="passwordHash"
        placeholder="Enter password"
        component={PasswordField}
        disabled={false}
        label="Password"
        validate={[formErrorUtil.required]}
        autoFocus={isPasswordFocus}
      />
      <Field
        id="rememberMe"
        name="rememberMe"
        component={CheckboxField}
        label="Remember me"
        disabled={false}
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
  form: formsNames.USER_LOGIN,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(Login);
