import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { OkCancelButtons } from 'components/Buttons';
import { ExternalSpinnerProps, withSpinner } from 'components/Spinner';

import { formNames } from 'consts';

// tslint:disable-next-line: max-line-length
import { GeneralUserGroupInfo } from 'containers/Administration/Permission/UsersGroup/UsersGroupComponents';

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
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => addAdminUsersGroup(data)),
    [handleSubmit, addAdminUsersGroup]
  );
  return (
    <form onSubmit={handleSubmitForm}>
      <GeneralUserGroupInfo />
      <OkCancelButtons
        okText="Save"
        cancelText="Cancel"
        onCancel={onCancel}
        rightPosition={true}
      />
    </form>
  );
};

export default reduxForm<{}, AddUserGroupFormProps>({
  form: formNames.ADD_USER_GROUP,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(AddUserGroupForm));
