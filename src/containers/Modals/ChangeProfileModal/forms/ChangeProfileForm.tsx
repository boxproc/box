import React from 'react';

import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { OkCancelButtons, SelectField } from 'components';

import { formNamesConst } from 'consts';

import { HandleChangeAdminProfile } from 'store/domains';

import { SelectValue } from 'types';

import { formErrorUtil } from 'utils';

interface ChangeProfileFormProps {
  adminAccessUsersOptions: Array<SelectValue>;
  changeAdminProfile: HandleChangeAdminProfile;
  isLoadingUsers: boolean;
  isChangingProfile: boolean;
  onCancel: () => void;
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
  onCancel,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(changeAdminProfile),
    [handleSubmit, changeAdminProfile]
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
          isLoading={isLoadingUsers}
          validate={[formErrorUtil.isRequired]}
        />
        <OkCancelButtons
          okText="Log in"
          disabledOk={isChangingProfile || isLoadingUsers || pristine}
          onCancel={onCancel}
        />
      </form>
    </React.Fragment>
  );
};

export default reduxForm<{}, ChangeProfileFormProps>({
  form: formNamesConst.CHANGE_PROFILE,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(ChangeProfileForm);
