import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box } from '@rebass/grid';

import styled from 'theme';
import { highlightCss } from 'theme/styles';

import {
  Button,
  CheckboxField,
  InputField,
  ISpinner,
  Logo,
  PasswordField,
  SmallText,
  withSpinner,
} from 'components';

import { formNamesConst } from 'consts';

import { THandleUserLogin } from 'store';

import { formErrorUtil } from 'utils';

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  width: 100%;
  height: calc(100vh - 210px);
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

  .password-wrapper {
    position: relative;
    margin-bottom: 15px;

    .caps-lock {
      position: absolute;
      right: 0;
      top: 0;
    }
  }
`;

interface ILogin extends ISpinner {
  userLogin: THandleUserLogin;
  isPasswordFocus: boolean;
  isMessageModal: boolean;
  loginValues: {
    loginUsername: string;
    loginPassword: string;
  };
}

type TLogin = ILogin & InjectedFormProps<{}, ILogin>;

const Login: React.FC<TLogin> = ({
  handleSubmit,
  userLogin,
  isPasswordFocus,
  isMessageModal,
  loginValues,
}) => {
  const [isCapsLock, setIsCapsLock] = React.useState(false);

  const isButtonFocused = React.useMemo(
    () => loginValues && loginValues.loginUsername && loginValues.loginPassword,
    [loginValues]
  );

  const handleSubmitForm = React.useCallback(
    handleSubmit(data => setTimeout(() => userLogin(data), 500)),
    [handleSubmit, userLogin]
  );

  return (
    <FormWrapper>
      <Box
        my="15px"
        fontSize="0"
        className="highlight"
      >
        <Logo />
      </Box>
      <form onSubmit={handleSubmitForm}>
        <Field
          id="loginUsername"
          name="loginUsername"
          placeholder="Enter user name"
          component={InputField}
          disabled={isMessageModal}
          label="Login"
          validate={[formErrorUtil.isRequired]}
        />
        <div className="password-wrapper">
          {isCapsLock && (
            <SmallText light={true} className="caps-lock">CAPS LOCK</SmallText>
          )}
          <Field
            id="loginPassword"
            name="loginPassword"
            placeholder="Enter password"
            component={PasswordField}
            disabled={isMessageModal}
            label="Password"
            validate={[formErrorUtil.isRequired]}
            autoFocus={isPasswordFocus}
            onKeyUp={(e: MouseEvent) => setIsCapsLock(e.getModifierState('CapsLock'))}
          />
        </div>
        <Field
          id="rememberMe"
          name="rememberMe"
          component={CheckboxField}
          label="Remember me"
        />
        <Box width="100%" mt="12px">
          <Button
            text="Log in"
            classNames={['is-animated']}
            isFocused={isButtonFocused}
            width="100%"
          />
        </Box>
      </form>
    </FormWrapper>
  );
};

export default reduxForm<{}, ILogin>({
  form: formNamesConst.USER_LOGIN,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner({
  isFixed: true,
})(Login));
