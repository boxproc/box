import React from 'react';

import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { InputField, OkCancelButtons, PasswordField } from 'components';

import { formNamesConst, yesNoTypesCodes } from 'consts';

import { HandleChangePassword } from 'store/domains';

import { formErrorUtil, storageUtil } from 'utils';

interface ChangePasswordFormProps {
  changePassword: HandleChangePassword;
  onCancel: () => void;
}

type ChangePasswordFormPropsAllProps =
  ChangePasswordFormProps & InjectedFormProps<{}, ChangePasswordFormProps>;

const ChangePasswordForm: React.FC<ChangePasswordFormPropsAllProps> = ({
  handleSubmit,
  changePassword,
  onCancel,
  pristine,
}) => {
  const userData = storageUtil.getUserData();

  const isRequires2faFlag = React.useMemo(
    () => userData && userData.requires2faFlag !== yesNoTypesCodes.NO,
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
          validate={[formErrorUtil.required]}
        />
        <Field
          id="newPassword"
          name="newPassword"
          label="New Password"
          placeholder="Enter New Password"
          component={PasswordField}
          validate={[formErrorUtil.required, formErrorUtil.passwordsDoNotMatch]}
        />
        {isRequires2faFlag && (
          <Field
            id="code"
            name="code"
            label="2nd Factor Code"
            placeholder="Enter 2nd Factor Code"
            component={InputField}
            validate={[
              formErrorUtil.required,
              formErrorUtil.isNumber,
              formErrorUtil.exactNumberValue6,
            ]}
          />
        )}
        <OkCancelButtons
          disabledOk={pristine}
          okText="Save"
          rightPosition={true}
          onCancel={onCancel}
        />
      </form>
    </React.Fragment>
  );
};

export default reduxForm<{}, ChangePasswordFormProps>({
  form: formNamesConst.CHANGE_PASSWORD,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(ChangePasswordForm);
