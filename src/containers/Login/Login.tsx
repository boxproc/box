import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box } from '@rebass/grid';

import styled from 'theme';

import { ButtonBg } from 'components/Buttons/Buttons';
import { CheckboxField, InputField, PasswordField } from 'components/Form';
import { highlightCss } from 'components/highlightCss';

import { basePath, formNames } from 'consts';

import logo from 'resources/images/logo.svg';

import { HandleUserLogin } from 'store/domains';

import { formErrorUtil } from 'utils';

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  width: 100%;
  min-height: calc(100vh - 135px);
  justify-content: center;
  margin: 0 auto;
  text-align: left;

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
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(userLogin),
    [handleSubmit, userLogin]
  );

  return (
    <FormWrapper onSubmit={handleSubmitForm}>
      <Box my="20px" fontSize="0" className="highlight">
        <a href={basePath}>
          <img src={logo} width={62} alt="" />
        </a>
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
      <Field
        id="password"
        name="password"
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
        <ButtonBg text="Log in"/>
      </Box>
    </FormWrapper>
  );
};

export default reduxForm<{}, LoginProps>({
  form: formNames.USER_LOGIN,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(Login);
