import React from 'react';

import { Flex } from '@rebass/grid';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Button } from 'components/Buttons';
import { SelectField } from 'components/Form';
import { ExternalSpinnerProps, withSpinner } from 'components/Spinner';

import { formNames } from 'consts';

import { HandleChangeAdminProfile } from 'store/domains';

import { SelectValues } from 'types';

import { formErrorUtil } from 'utils';

interface ChangeProfileFormProps extends ExternalSpinnerProps {
  adminAccessUsersOptions: Array<SelectValues>;
  changeAdminProfile: HandleChangeAdminProfile;
}

type ChangeProfileFormPropsAllProps =
  ChangeProfileFormProps & InjectedFormProps<{}, ChangeProfileFormProps>;

const ChangeProfileForm: React.FC<ChangeProfileFormPropsAllProps> = ({
  handleSubmit,
  adminAccessUsersOptions,
  changeAdminProfile,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => changeAdminProfile(data)),
    [handleSubmit]
  );

  return (
    <React.Fragment>
      <form onSubmit={handleSubmitForm}>
        <Field
          id="username"
          name="username"
          label="Username"
          placeholder="Select username"
          component={SelectField}
          disabled={false}
          options={adminAccessUsersOptions}
          validate={[formErrorUtil.required]}
        />
        <Flex justifyContent="flex-end">
          <Button text="Log in" />
        </Flex>
      </form>
    </React.Fragment>
  );
};

export default reduxForm<{}, ChangeProfileFormProps>({
  form: formNames.CHANGE_PROFILE_FORM,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(ChangeProfileForm));
