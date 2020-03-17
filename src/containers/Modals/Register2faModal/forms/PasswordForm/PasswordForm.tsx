import React from 'react';

import { Flex } from '@rebass/grid';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Button, ExternalSpinnerProps, Paragraph, PasswordField, withSpinner } from 'components';

import { HandleUserGetAuthKey } from 'store';

import { formNamesConst } from 'consts';

import { formErrorUtil } from 'utils';

interface PasswordFormProps extends ExternalSpinnerProps {
  userGetAuthKey?: HandleUserGetAuthKey;
}

type PasswordFormPropsAllProps = PasswordFormProps & InjectedFormProps<{}, PasswordFormProps>;

const PasswordForm: React.FC<PasswordFormPropsAllProps> = ({
  handleSubmit,
  userGetAuthKey,
  pristine,
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
        />
        <Flex justifyContent="flex-end">
          <Button
            text="Next"
            disabled={pristine}
          />
        </Flex>
      </form>
    </React.Fragment>
  );
};

export default reduxForm<{}, PasswordFormProps>({
  form: formNamesConst.PASSWORD,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(PasswordForm));
