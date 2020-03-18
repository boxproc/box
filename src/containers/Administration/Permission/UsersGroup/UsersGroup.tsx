import React from 'react';
import { ImmutableArray } from 'seamless-immutable';

import { modalNamesConst } from 'consts';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';

import { AdminUsersGroupItem, HandleGetAdminUsersGroup, ResetUsersGroup } from 'store';

interface UserFilterProps {
  usersGroupItems: ImmutableArray<AdminUsersGroupItem>;
  getUsersGroup: HandleGetAdminUsersGroup;
  resetUsersGroup: ResetUsersGroup;
  isLoading: boolean;
}

export const UsersGroup: React.FC<UserFilterProps> = ({
  getUsersGroup,
  usersGroupItems,
  resetUsersGroup,
  isLoading,
}) => {
  React.useEffect(
    () => {
      getUsersGroup();
      return () => resetUsersGroup();
    },
    [getUsersGroup, resetUsersGroup]
  );

  return (
    <PageTemplate
      title="User Groups"
      data={usersGroupItems}
      columns={tableColumns}
      isDownloadButton={true}
      newModalName={modalNamesConst.ADD_USERS_GROUP}
      viewingModalName={modalNamesConst.EDIT_USERS_GROUP}
      isLoading={isLoading}
    />
  );
};

export default UsersGroup;
