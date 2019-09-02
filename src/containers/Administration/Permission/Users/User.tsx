import React from 'react';

import { withSpinner } from 'components/Spinner';
import TablePage from 'components/TablePage';
import { tableColumns } from 'containers/Administration/Permission/Users/components';

import { modalNames } from 'consts';

import { UserFilter } from 'containers/Administration/Permission/Users/forms';

import {
  AdminUserItemPrepared,
  HandleFilterUsers,
  HandleSetAdminUserId,
} from 'store/domains/administration/permissions/users';

import { SelectValues } from 'types';

interface UserFilterProps {
  adminUserItems: Array<AdminUserItemPrepared>;
  institutionsOptions: Array<SelectValues>;
  filterUsers: HandleFilterUsers;
  setAdminUserId: HandleSetAdminUserId;
}

export const User: React.FC<UserFilterProps> = ({
  adminUserItems,
  institutionsOptions,
  filterUsers,
  setAdminUserId,
}) => {

  return (
    <TablePage
      title="Users"
      data={adminUserItems}
      columns={tableColumns}
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
