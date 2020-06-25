import React from 'react';

import { Box, Flex } from '@rebass/grid';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Button, SelectField } from 'components';
import { formNamesConst, iconNamesConst } from 'consts';
import { THandleAddUsersGroupMember, THandleUsersGroupUsers } from 'store';
import { ISelectValue } from 'types';
import { formErrorUtil } from 'utils';

interface IEditUsersGroupMembersForm {
  activeUsersItemsOptions: Array<ISelectValue>;
  currentUsersGroupId: number;
  isLoading: boolean;
  getUsersGroupUsers: THandleUsersGroupUsers;
  addUsersGroupMember: THandleAddUsersGroupMember;
}

type TEditUsersGroupMembers = IEditUsersGroupMembersForm &
  InjectedFormProps<{}, IEditUsersGroupMembersForm>;

const EditUsersGroupMembersForm: React.FC<TEditUsersGroupMembers> = ({
  handleSubmit,
  addUsersGroupMember,
  getUsersGroupUsers,
  currentUsersGroupId,
  activeUsersItemsOptions,
  isLoading,
  pristine,
}) => {
  React.useEffect(
    () => {
      getUsersGroupUsers(currentUsersGroupId);
    },
    [getUsersGroupUsers, currentUsersGroupId]
  );

  const handleSubmitForm = React.useCallback(
    handleSubmit(data => addUsersGroupMember({
      ...data,
      userGroupId: currentUsersGroupId,
    })),
    [handleSubmit, addUsersGroupMember]
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
        <Box width={[1 / 2]} pb="15px">
          <Button
            iconName={iconNamesConst.PLUS}
            text="Add to the group"
            classNames={['is-bordered']}
            isLoading={isLoading}
            disabled={pristine}
          />
        </Box>
      </Flex>
    </form >
  );
};

export default reduxForm<{}, IEditUsersGroupMembersForm>({
  form: formNamesConst.EDIT_USERS_GROUP_MEMBERS,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(EditUsersGroupMembersForm);
