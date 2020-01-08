import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box } from '@rebass/grid';

import styled from 'theme';
import { highlightCss } from 'theme/highlightCss';

import {
  Button,
  CheckboxField,
  ExternalSpinnerProps,
  InputField,
  PasswordField,
  withSpinner,
} from 'components';

import { basePath, formNamesConst } from 'consts';

import { HandleUserLogin } from 'store/domains';

import { formErrorUtil } from 'utils';

import logo from 'resources/images/logo.svg';

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  width: 100%;
  min-height: calc(100vh - 210px);
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

interface LoginProps extends ExternalSpinnerProps {
  userLogin: HandleUserLogin;
  isPasswordFocus: boolean;
  isMessageModal: boolean;
  loginValues: {
    loginUsername: string;
    loginPassword: string;
  };
}

type LoginPropsAllProps = LoginProps & InjectedFormProps<{}, LoginProps>;

const Login: React.FC<LoginPropsAllProps> = ({
  handleSubmit,
  userLogin,
  isPasswordFocus,
  isMessageModal,
  loginValues,
}) => {
  const isButtonFocused = React.useMemo(
    () => loginValues && loginValues.loginUsername && loginValues.loginPassword,
    [loginValues]
  );

  const handleSubmitForm = React.useCallback(
    handleSubmit(userLogin),
    [handleSubmit, userLogin]
  );

  return (
    <FormWrapper>
      <Box my="15px" fontSize="0" className="highlight">
        <a href={basePath} aria-label="BOX UI">
          <img src={logo} width={62} alt="" />
        </a>
      </Box>
      <form onSubmit={handleSubmitForm}>
        <Field
          id="loginUsername"
          name="loginUsername"
          placeholder="Enter user name"
          component={InputField}
          disabled={isMessageModal}
          label="Login"
          validate={[formErrorUtil.required]}
        />
        <Field
          id="loginPassword"
          name="loginPassword"
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
        />
        <Box width="100%" mt="12px">
          <Button
            text="Log in"
            bordered={true}
            width="100%"
            isFocused={isButtonFocused}
          />
        </Box>
      </form>
    </FormWrapper>
  );
};

export default reduxForm<{}, LoginProps>({
  form: formNamesConst.USER_LOGIN,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner({
  isFixed: true,
})(Login));
