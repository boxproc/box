import React from 'react';

import { withSpinner } from 'components';

import { modalNamesConst } from 'consts';

import PageTemplate from 'containers/PageTemplate';
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
    [getAdminUsersGroup, resetUsersGroup]
  );

  return (
    <PageTemplate
      title="Users Group"
      data={adminUsersGroupItems}
      columns={tableColumns}
      newModalName={modalNamesConst.ADD_USERS_GROUP}
      editModalName={modalNamesConst.EDIT_USERS_GROUP}
    />
  );
};

export default withSpinner({
  isFixed: true,
})(UsersGroup);
