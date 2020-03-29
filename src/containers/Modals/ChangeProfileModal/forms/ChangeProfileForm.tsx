import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { OkCancelButtons, SelectField } from 'components';
import { formNamesConst } from 'consts';
import { THandleChangeProfile } from 'store';
import { ISelectValue } from 'types';
import { formErrorUtil } from 'utils';

interface IChangeProfileForm {
  usernamesOptions: Array<ISelectValue>;
  changeProfile: THandleChangeProfile;
  isLoadingUsers: boolean;
  isChangingProfile: boolean;
  onCancel: () => void;
}

type TChangeProfileForm = IChangeProfileForm & InjectedFormProps<{}, IChangeProfileForm>;

const ChangeProfileForm: React.FC<TChangeProfileForm> = ({
  handleSubmit,
  usernamesOptions,
  changeProfile,
  isLoadingUsers,
  isChangingProfile,
  pristine,
  onCancel,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(changeProfile),
    [handleSubmit, changeProfile]
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
          options={usernamesOptions}
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

export default reduxForm<{}, IChangeProfileForm>({
  form: formNamesConst.CHANGE_PROFILE,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(ChangeProfileForm);
