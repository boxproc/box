import React from 'react';

import { Box, Flex } from '@rebass/grid';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Button, SelectField } from 'components';

import { formNamesConst, iconNamesConst } from 'consts';

import { HandleAddAdminActiveUsers, HandleGetAdminActiveUsers } from 'store';

import { ISelectValue } from 'types';

import { formErrorUtil } from 'utils';

interface EditUserGroupMembersProps {
  activeUsersItemsOptions: Array<ISelectValue>;
  selectedUser: ISelectValue;
  currentUserGroupId: number;
  isLoading: boolean;
  getActiveUsers: HandleGetAdminActiveUsers;
  addActiveUsers: HandleAddAdminActiveUsers;
}

type EditUserGroupMembersPropsAllProps = EditUserGroupMembersProps &
  InjectedFormProps<{}, EditUserGroupMembersProps>;

const EditUserGroupMembers: React.FC<EditUserGroupMembersPropsAllProps> = ({
  handleSubmit,
  addActiveUsers,
  getActiveUsers,
  currentUserGroupId,
  selectedUser,
  activeUsersItemsOptions,
  isLoading,
}) => {
  React.useEffect(
    () => {
      getActiveUsers(currentUserGroupId);
    },
    [getActiveUsers, currentUserGroupId]
  );

  const buttonText = React.useMemo(
    () => isLoading ? 'Adding...' : 'Add to the group',
    [isLoading]
  );

  const isDisabledButton = React.useMemo(
    () => !selectedUser || isLoading,
    [selectedUser, isLoading]
  );

  const handleSubmitForm = React.useCallback(
    handleSubmit(data => addActiveUsers({
      ...data,
      userGroupId: currentUserGroupId,
    })),
    [handleSubmit, addActiveUsers]
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
            options={activeUsersItemsOptions}
            isDisabled={isLoading}
            validate={[formErrorUtil.isRequired]}
          />
        </Box>
        <Box width={[1 / 2]} pb="21px">
          <Button
            iconName={iconNamesConst.PLUS}
            text={buttonText}
            disabled={isDisabledButton}
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
