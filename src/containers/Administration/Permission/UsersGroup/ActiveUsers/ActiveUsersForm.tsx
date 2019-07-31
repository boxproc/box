import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box } from '@rebass/grid';

import { SelectField } from 'components/Form';

import {
  formNames,
} from 'consts';

import { Button } from 'components/Buttons';
import { HandleAddAdminActiveUsers, HandleGetAdminActiveUsers } from 'store/domains';
import { SelectValues } from 'types';
import { formErrorUtil } from 'utils';

interface ActiveUsersFormProps {
  onCancel?: () => void;
  adminUserGroupMemberId: number;
  activeUsersItemsOptions?: Array<SelectValues>;
  getActiveUsers: HandleGetAdminActiveUsers;
  addAdminActiveUsers?: HandleAddAdminActiveUsers;
  currentGroupId: number;
  selectedUser: SelectValues;
}

type ActiveUsersFormAllProps = ActiveUsersFormProps &
  InjectedFormProps<{}, ActiveUsersFormProps>;

const ActiveUsersFormAllForm: React.FC<ActiveUsersFormAllProps> = ({
  handleSubmit,
  addAdminActiveUsers,
  getActiveUsers,
  activeUsersItemsOptions,
  currentGroupId,
  selectedUser,
}) => {
  React.useEffect(
    () => {
      getActiveUsers();
    },
    [getActiveUsers]
  );
  const handleSubmitForm = React.useCallback(
    handleSubmit(() => addAdminActiveUsers(currentGroupId, selectedUser.value)),
    [handleSubmit, addAdminActiveUsers]
  );
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
        type="reset"
        onClick={() => addAdminActiveUsers(currentGroupId, selectedUser.value)}
      />
    </form >
  );
};

export default reduxForm<{}, ActiveUsersFormProps>({
  form: formNames.ADD_ACTIVE_USERS,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(ActiveUsersFormAllForm);
