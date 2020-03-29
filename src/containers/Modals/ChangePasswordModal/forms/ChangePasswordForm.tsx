import React from 'react';

import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { InputField, OkCancelButtons, PasswordField } from 'components';

import { formNamesConst, yesNoConst } from 'consts';

import { THandleChangePassword } from 'store';

import { formErrorUtil, storageUtil } from 'utils';

interface IChangePasswordForm {
  changePassword: THandleChangePassword;
  onCancel: () => void;
}

type TChangePasswordForm = IChangePasswordForm & InjectedFormProps<{}, IChangePasswordForm>;

const ChangePasswordForm: React.FC<TChangePasswordForm> = ({
  handleSubmit,
  changePassword,
  onCancel,
  pristine,
}) => {
  const userData = React.useMemo(
    () => storageUtil.getUserData(),
    []
  );

  const isRequires2faFlag = React.useMemo(
    () => userData && userData.requires2faFlag === yesNoConst.YES,
    [userData]
  );

  const handleSubmitForm = React.useCallback(
    handleSubmit(changePassword),
    [handleSubmit, changePassword]
  );

  return (
    <React.Fragment>
      <form onSubmit={handleSubmitForm}>
        <Field
          id="currentPassword"
          name="currentPassword"
          label="Current Password"
          placeholder="Enter Current Password"
          component={PasswordField}
          validate={[formErrorUtil.isRequired]}
        />
        <Field
          id="newPassword"
          name="newPassword"
          label="New Password"
          placeholder="Enter New Password"
          component={PasswordField}
          validate={[
            formErrorUtil.isRequired,
            formErrorUtil.passwordsDoNotMatch,
          ]}
        />
        {isRequires2faFlag && (
          <Field
            id="code"
            name="code"
            label="2nd Factor Code"
            placeholder="Enter 2nd Factor Code"
            component={InputField}
            validate={[
              formErrorUtil.isRequired,
              formErrorUtil.isNumber,
              formErrorUtil.exactNumberValue6,
            ]}
          />
        )}
        <OkCancelButtons
          disabledOk={pristine}
          okText="Save"
          onCancel={onCancel}
        />
      </form>
    </React.Fragment>
  );
};

export default reduxForm<{}, IChangePasswordForm>({
  form: formNamesConst.CHANGE_PASSWORD,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(ChangePasswordForm);
