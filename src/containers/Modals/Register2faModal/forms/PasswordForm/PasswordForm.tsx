import React from 'react';

import { Flex } from '@rebass/grid';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Button, Paragraph, PasswordField } from 'components';

import { THandleUserGetAuthKey } from 'store';

import { formNamesConst } from 'consts';

import { formErrorUtil } from 'utils';

interface IPasswordForm {
  userGetAuthKey?: THandleUserGetAuthKey;
  isLoading: boolean;
}

type TPasswordForm = IPasswordForm & InjectedFormProps<{}, IPasswordForm>;

const PasswordForm: React.FC<TPasswordForm> = ({
  handleSubmit,
  userGetAuthKey,
  pristine,
  isLoading,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(userGetAuthKey),
    [handleSubmit, userGetAuthKey]
  );

  return (
    <React.Fragment>
      <Paragraph light={true}>To continue please enter your password.</Paragraph>
      <form onSubmit={handleSubmitForm}>
        <Field
          id="password"
          name="password"
          placeholder="Enter Password"
          component={PasswordField}
          autoComplete="new-password"
          validate={[formErrorUtil.isRequired]}
          autoFocus={true}
          disabled={isLoading}
        />
        <Flex justifyContent="flex-end">
          <Button
            text="Next"
            disabled={pristine}
            isLoading={isLoading}
          />
        </Flex>
      </form>
    </React.Fragment>
  );
};

export default reduxForm<{}, IPasswordForm>({
  form: formNamesConst.PASSWORD,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(PasswordForm);
