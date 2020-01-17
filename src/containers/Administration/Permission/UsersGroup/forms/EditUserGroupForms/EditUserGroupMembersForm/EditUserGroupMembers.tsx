import React from 'react';

import { Box, Flex } from '@rebass/grid';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Button, SelectField } from 'components';

import { formNamesConst, iconNamesConst } from 'consts';

import { HandleAddAdminActiveUsers, HandleGetAdminActiveUsers } from 'store/domains';

import { SelectValue } from 'types';

import { formErrorUtil } from 'utils';

interface EditUserGroupMembersProps {
  getActiveUsers: HandleGetAdminActiveUsers;
  addAdminActiveUsers?: HandleAddAdminActiveUsers;
  currentGroupId: number;
  selectedUser: SelectValue;
  activeUsersItemsOptions: Array<SelectValue>;
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
    [getActiveUsers, currentGroupId]
  );

  const isSelectedUser = React.useMemo(
    () => !!selectedUser,
    [selectedUser]
  );

  const handleSubmitForm = React.useCallback(
    handleSubmit(addAdminActiveUsers),
    [handleSubmit, addAdminActiveUsers]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Flex alignItems="flex-end">
        <Box width={[1 / 2]} mb="15px" mr="10px">
          <Field
            id="username"
            name="username"
            placeholder="Select User"
            component={SelectField}
            label="Select User"
            validate={[formErrorUtil.required]}
            options={activeUsersItemsOptions}
          />
        </Box>
        <Box width={[1 / 2]} pb="21px">
          <Button
            iconName={iconNamesConst.PLUS}
            text="Add to the group"
            disabled={!isSelectedUser}
          />
        </Box>
      </Flex>
    </form >
  );
};

export default reduxForm<{}, EditUserGroupMembersProps>({
  form: formNamesConst.EDIT_USER_GROUP_MEMBERS,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(EditUserGroupMembers);
