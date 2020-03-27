import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { ExternalSpinnerProps, OkCancelButtons, withSpinner } from 'components';

import { formNamesConst } from 'consts';

import { UserGroupFields } from 'containers/Administration/Permission/UsersGroup/components';

import { THandleAddUsersGroups } from 'store';

export interface AddUserGroupFormProps extends ExternalSpinnerProps {
  addUsersGroup: THandleAddUsersGroups;
  onCancel: () => void;
}

type AddUserGroupFormPropsAllProps = AddUserGroupFormProps &
  InjectedFormProps<{}, AddUserGroupFormProps>;

const AddUserGroupForm: React.FC<AddUserGroupFormPropsAllProps> = ({
  onCancel,
  addUsersGroup,
  handleSubmit,
  dirty,
  pristine,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(addUsersGroup),
    [handleSubmit, addUsersGroup]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <UserGroupFields />
      <OkCancelButtons
        okText="Save"
        cancelText="Close"
        onCancel={onCancel}
        withCancelConfirmation={dirty}
        disabledOk={pristine}
      />
    </form>
  );
};

export default reduxForm<{}, AddUserGroupFormProps>({
  form: formNamesConst.ADD_USER_GROUP,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(AddUserGroupForm));
