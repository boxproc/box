import React from 'react';
import { Link } from 'react-router-dom';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box } from '@rebass/grid';

import styled from 'theme';

import { Button } from 'components/Buttons';
import { CheckboxField, InputField, PasswordField } from 'components/Form';
import { highlightCss } from 'components/highlightCss';

import { basePath, formsNames } from 'consts';

import logo from 'resources/images/logo.svg';

import { HandleUserLogin } from 'store/domains';

import { formErrorUtil } from 'utils';

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
  isPasswordFocus: boolean;
  isMessageModal: boolean;
}

type LoginPropsAllProps = LoginProps & InjectedFormProps<{}, LoginProps>;

const Login: React.FC<LoginPropsAllProps> = ({
  handleSubmit,
  userLogin,
  isPasswordFocus,
  isMessageModal,
  error,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => userLogin(data)),
    [handleSubmit, userLogin]
  );

  return (
    <FormWrapper onSubmit={handleSubmitForm}>
      <Box mb="20px" fontSize="0" className="highlight">
        <Link to={`${basePath}`}>
          <img src={logo} width={62} alt="" />
        </Link>
      </Box>
      <Field
        id="userName"
        name="userName"
        placeholder="Enter user name"
        component={InputField}
        disabled={isMessageModal}
        label="Login"
        validate={[formErrorUtil.required]}
      />
      {error}
      <Field
        id="passwordHash"
        name="passwordHash"
        placeholder="Enter password"
        component={PasswordField}
        disabled={isMessageModal}
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
        <Button text="Log in"/>
      </Box>
    </FormWrapper>
  );
};

export default reduxForm<{}, LoginProps>({
  form: formsNames.USER_LOGIN,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(Login);
