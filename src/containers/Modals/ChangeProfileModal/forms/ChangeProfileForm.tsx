import React from 'react';

import { Flex } from '@rebass/grid';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Button, SelectField } from 'components';

import { formNamesConst } from 'consts';

import { HandleChangeAdminProfile } from 'store/domains';

import { SelectValues } from 'types';

import { formErrorUtil } from 'utils';

interface ChangeProfileFormProps {
  adminAccessUsersOptions: Array<SelectValues>;
  changeAdminProfile: HandleChangeAdminProfile;
  isLoadingUsers: boolean;
  isChangingProfile: boolean;
}

type ChangeProfileFormPropsAllProps =
  ChangeProfileFormProps & InjectedFormProps<{}, ChangeProfileFormProps>;

const ChangeProfileForm: React.FC<ChangeProfileFormPropsAllProps> = ({
  handleSubmit,
  adminAccessUsersOptions,
  changeAdminProfile,
  isLoadingUsers,
  isChangingProfile,
  pristine,
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
          options={adminAccessUsersOptions}
          isDisabled={isChangingProfile}
          autoFocus={true}
          isLoading={isLoadingUsers}
          validate={[formErrorUtil.required]}
        />
        <Flex justifyContent="flex-end">
          <Button
            text={isChangingProfile ? 'Log in...' : 'Log in'}
            disabled={isChangingProfile || isLoadingUsers || pristine}
          />
        </Flex>
      </form>
    </React.Fragment>
  );
};

export default reduxForm<{}, ChangeProfileFormProps>({
  form: formNamesConst.CHANGE_PROFILE_FORM,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(ChangeProfileForm);
