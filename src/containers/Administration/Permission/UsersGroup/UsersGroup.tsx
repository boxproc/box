import React from 'react';

import { TablePage, withSpinner } from 'components';

import { modalNamesConst } from 'consts';

import { tableColumns } from './components';

import { AdminUsersGroupInfoPlain, HandleGetAdminUsersGroup, ResetUsersGroup } from 'store/domains';

interface UserFilterProps {
  adminUsersGroupItems: Array<AdminUsersGroupInfoPlain>;
  getAdminUsersGroup: HandleGetAdminUsersGroup;
  resetUsersGroup: ResetUsersGroup;
}

export const UsersGroup: React.FC<UserFilterProps> = ({
  getAdminUsersGroup,
  adminUsersGroupItems,
  resetUsersGroup,
}) => {
  React.useEffect(
    () => {
      getAdminUsersGroup();
      return () => resetUsersGroup();
    },
    [getAdminUsersGroup]
  );

  return (
    <TablePage
      title="Users Group"
      data={adminUsersGroupItems}
      columns={tableColumns}
      newModalName={modalNamesConst.ADD_ADMIN_USERS_GROUP}
      editModalName={modalNamesConst.EDIT_ADMIN_USERS_GROUP}
    />
  );
};

export default withSpinner({
  isFixed: true,
})(UsersGroup);
