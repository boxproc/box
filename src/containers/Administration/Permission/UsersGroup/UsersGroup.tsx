import React from 'react';

import { TablePage, withSpinner } from 'components';

import { modalNamesConst } from 'consts';

import { tableColumns } from './components';

import { AdminUsersGroupInfoPlain, HandleGetAdminUsersGroup } from 'store/domains';

interface UserFilterProps {
  adminUsersGroupItems: Array<AdminUsersGroupInfoPlain>;
  getAdminUsersGroup: HandleGetAdminUsersGroup;
}

export const UsersGroup: React.FC<UserFilterProps> = ({
  getAdminUsersGroup,
  adminUsersGroupItems,
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
      addNewModalName={modalNamesConst.ADD_ADMIN_USERS_GROUP}
      editModalName={modalNamesConst.EDIT_ADMIN_USERS_GROUP}
    />
  );
};

export default withSpinner({
  isFixed: true,
})(UsersGroup);
