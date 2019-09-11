import React from 'react';

import { Flex } from '@rebass/grid';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Button } from 'components/Buttons';
import { PasswordField } from 'components/Form';
import { ExternalSpinnerProps, withSpinner } from 'components/Spinner';
import { Paragraph } from 'components/Text';

import { HandleUserGetAuthKey } from 'store/domains';

import { formNames } from 'consts';

import { formErrorUtil } from 'utils';

interface PasswordFormProps extends ExternalSpinnerProps {
  userGetAuthKey?: HandleUserGetAuthKey;
}

type PasswordFormPropsAllProps = PasswordFormProps & InjectedFormProps<{}, PasswordFormProps>;

const PasswordForm: React.FC<PasswordFormPropsAllProps> = ({
  handleSubmit,
  userGetAuthKey,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => userGetAuthKey(data)),
    [handleSubmit, userGetAuthKey]
  );

  return (
    <React.Fragment>
      <Paragraph light={true}>To continue please confirm your identity.</Paragraph>
      <form onSubmit={handleSubmitForm}>
        <Field
          id="password"
          name="password"
          placeholder="Enter Password"
          component={PasswordField}
          disabled={false}
          validate={[formErrorUtil.required]}
        />
        <Flex justifyContent="flex-end">
          <Button text="Next" />
        </Flex>
      </form>
    </React.Fragment>
  );
};

export default reduxForm<{}, PasswordFormProps>({
  form: formNames.PASSWORD,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(PasswordForm));
