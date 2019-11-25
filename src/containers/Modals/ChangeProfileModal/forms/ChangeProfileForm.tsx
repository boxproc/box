import React from 'react';

import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { OkCancelButtons, SelectField } from 'components';

import { formNamesConst } from 'consts';

import { HandleChangeAdminProfile } from 'store/domains';

import { SelectValues } from 'types';

import { formErrorUtil } from 'utils';

interface ChangeProfileFormProps {
  adminAccessUsersOptions: Array<SelectValues>;
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
          isLoading={isLoadingUsers}
          validate={[formErrorUtil.required]}
        />
        <OkCancelButtons
          okText="Log in"
          disabledOk={isChangingProfile || isLoadingUsers || pristine}
          rightPosition={true}
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
