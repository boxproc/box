import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { ExternalSpinnerProps, Hr, OkCancelButtons, withSpinner } from 'components';

import { formNamesConst } from 'consts';

import { GeneralUserGroupInfo } from 'containers/Administration/Permission/UsersGroup/components';

import { HandleAddAdminUsersGroups } from 'store/domains';

export interface AddUserGroupFormProps extends ExternalSpinnerProps {
  addAdminUsersGroup: HandleAddAdminUsersGroups;
  onCancel: () => void;
}

type AddUserGroupFormPropsAllProps = AddUserGroupFormProps &
  InjectedFormProps<{}, AddUserGroupFormProps>;

const AddUserGroupForm: React.FC<AddUserGroupFormPropsAllProps> = ({
  onCancel,
  addAdminUsersGroup,
  handleSubmit,
  dirty,
  pristine,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => addAdminUsersGroup(data)),
    [handleSubmit, addAdminUsersGroup]
  );
  return (
    <form onSubmit={handleSubmitForm}>
      <GeneralUserGroupInfo />
      <Hr />
      <OkCancelButtons
        okText="Save"
        cancelText="Cancel"
        onCancel={onCancel}
        rightPosition={true}
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
