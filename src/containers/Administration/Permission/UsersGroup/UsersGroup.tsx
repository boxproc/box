import React from 'react';

import { TablePage, withSpinner } from 'components';

import { modalNames } from 'consts';

import { tableColumns } from 'containers/Administration/Permission/UsersGroup/components';

import {
  AdminUsersGroupInfoPlain,
  HandleGetAdminUsersGroup,
  HandleSetAdminUsersGroupId,
} from 'store/domains/administration/permissions/usersGroups';

interface UserFilterProps {
  adminUsersGroupItems: Array<AdminUsersGroupInfoPlain>;
  getAdminUsersGroup: HandleGetAdminUsersGroup;
  setAdminUsersGroupId: HandleSetAdminUsersGroupId;
}

export const UsersGroup: React.FC<UserFilterProps> = ({
  getAdminUsersGroup,
  adminUsersGroupItems,
  setAdminUsersGroupId,
}) => {
  React.useEffect(
    () => {
      getAdminUsersGroup();
    },
    [getAdminUsersGroup]
  );

  return (
    <TablePage
      title="Users Group"
      data={adminUsersGroupItems}
      columns={tableColumns}
      addNewModalName={modalNames.ADD_ADMIN_USERS_GROUP}
      editModalName={modalNames.EDIT_ADMIN_USERS_GROUP}
      setCurrentIdAction={setAdminUsersGroupId}
    />
  );
};

export default withSpinner({
  isFixed: true,
})(UsersGroup);
