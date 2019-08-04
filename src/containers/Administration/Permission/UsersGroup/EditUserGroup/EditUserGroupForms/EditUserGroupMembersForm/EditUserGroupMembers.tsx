import React from 'react';

import { Box } from '@rebass/grid';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Button } from 'components/Buttons';
import { SelectField } from 'components/Form';

import { formNames } from 'consts';

import { HandleAddAdminActiveUsers, HandleGetAdminActiveUsers } from 'store/domains';

import { SelectValues } from 'types';

import { formErrorUtil } from 'utils';

interface EditUserGroupMembersProps {
  getActiveUsers: HandleGetAdminActiveUsers;
  addAdminActiveUsers?: HandleAddAdminActiveUsers;
  currentGroupId: number;
  selectedUser: SelectValues;
  activeUsersItemsOptions: Array<SelectValues>;
}

type EditUserGroupMembersPropsAllProps = EditUserGroupMembersProps &
  InjectedFormProps<{}, EditUserGroupMembersProps>;

const EditUserGroupMembers: React.FC<EditUserGroupMembersPropsAllProps> = ({
  handleSubmit,
  addAdminActiveUsers,
  getActiveUsers,
  currentGroupId,
  selectedUser,
  activeUsersItemsOptions,
}) => {
  React.useEffect(
    () => {
      getActiveUsers(currentGroupId);
    },
    [getActiveUsers]
  );
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => addAdminActiveUsers(data)),
    [handleSubmit, addAdminActiveUsers, currentGroupId]
  );
  const isSelectedUser = !!selectedUser;

  return (
    <form onSubmit={handleSubmitForm}>
      <Box width={[1 / 2]} mb="15px">
        <Field
          id="username"
          name="username"
          placeholder="Select User"
          component={SelectField}
          label="Username"
          validate={[formErrorUtil.required]}
          options={activeUsersItemsOptions}
        />
      </Box>
      <Button
        iconName="save"
        text="Save"
        disabled={!isSelectedUser}
      />
    </form >
  );
};

export default reduxForm<{}, EditUserGroupMembersProps>({
  form: formNames.EDIT_USER_GROUP_MEMBERS_FORM,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(EditUserGroupMembers);
