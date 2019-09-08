import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import styled from 'theme';

import { Button } from 'components/Buttons';
import { CheckboxField, InputField, PasswordField } from 'components/Form';
import { highlightCss } from 'components/highlightCss';
import { ExternalSpinnerProps, withSpinner } from 'components/Spinner';

import { basePath, formNames } from 'consts';

import { HandleUserEnterAuthKey, HandleUserLogin } from 'store/domains';

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
  userEnterAuthKey: HandleUserEnterAuthKey;
  isPasswordFocus: boolean;
  isMessageModal: boolean;
  is2faAuthenticationPending: boolean;
  is2faRegistrationPending: boolean;
}

type LoginPropsAllProps = LoginProps & InjectedFormProps<{}, LoginProps>;

const Login: React.FC<LoginPropsAllProps> = ({
  handleSubmit,
  userLogin,
  userEnterAuthKey,
  isPasswordFocus,
  isMessageModal,
  is2faAuthenticationPending,
  is2faRegistrationPending,
}) => {
  const action = is2faAuthenticationPending ? userEnterAuthKey : userLogin;
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => action(data)),
    [handleSubmit, userLogin]
  );

  return (
    <FormWrapper>
      <Box my="15px" fontSize="0" className="highlight">
        <a href={basePath}>
          <img src={logo} width={62} alt="" />
        </a>
      </Box>
      <form onSubmit={handleSubmitForm}>
        {(is2faRegistrationPending || !is2faAuthenticationPending) && (
          <React.Fragment>
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
            <Flex
              flexDirection="column"
              alignItems="flex-end"
            >
              <Box>
                <Field
                  id="rememberMe"
                  name="rememberMe"
                  component={CheckboxField}
                  label="Remember me"
                  disabled={false}
                  reverse={true}
                />
              </Box>
            </Flex>
          </React.Fragment>
        )}
        {is2faAuthenticationPending && (
          <Field
            id="code"
            name="code"
            placeholder="Enter code"
            component={InputField}
            disabled={isMessageModal}
            label="Code"
            validate={[formErrorUtil.required]}
          />
        )}
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
  form: formNames.USER_LOGIN,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(Login));
