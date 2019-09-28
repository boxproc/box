import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

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
}

type LoginPropsAllProps = LoginProps & InjectedFormProps<{}, LoginProps>;

const Login: React.FC<LoginPropsAllProps> = ({
  handleSubmit,
  userLogin,
  isPasswordFocus,
  isMessageModal,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => userLogin(data)),
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
        <Flex
          flexDirection="column"
          alignItems="flex-end"
        >
          <Box width="100%" mt="7px">
            <Flex justifyContent="center">
              <Button text="Log in" />
            </Flex>
          </Box>
        </Flex>
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
