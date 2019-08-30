import React from 'react';

import { withSpinner } from 'components/Spinner';
import TablePage from 'components/TablePage';
import { tableColumns } from 'containers/Administration/Permission/Users/components';

import { modalNames } from 'consts';

import { UserFilter } from 'containers/Administration/Permission/Users/forms';

import {
  AdminUserItemPrepared,
  HandleFilterUsers,
  HandleGetAdminUser,
  HandleSetAdminUserId,
} from 'store/domains/administration/permissions/users';

import { SelectValues } from 'types';

interface UserFilterProps {
  adminUserItems: Array<AdminUserItemPrepared>;
  getAdminUser: HandleGetAdminUser;
  institutionsOptions: Array<SelectValues>;
  filterUsers: HandleFilterUsers;
  setAdminUserId: HandleSetAdminUserId;
}

export const User: React.FC<UserFilterProps> = ({
  getAdminUser,
  adminUserItems,
  institutionsOptions,
  filterUsers,
  setAdminUserId,
}) => {
  React.useEffect(
    () => {
      getAdminUser();
    },
    [getAdminUser]
  );

  return (
    <TablePage
      title="Users"
      data={adminUserItems}
      columns={tableColumns}
      hint="Double Click on Row to Edit User"
      addNewModalName={modalNames.ADD_ADMIN_USER}
      editModalName={modalNames.EDIT_ADMIN_USER}
      setCurrentIdAction={setAdminUserId}
      FilterForm={
        <UserFilter
          filterUsers={filterUsers}
          institutionsOptions={institutionsOptions}
        />
      }
    />
  );
};

export default withSpinner({
  isFixed: true,
})(User);
