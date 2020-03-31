import React from 'react';
import { ImmutableArray } from 'seamless-immutable';

import { modalNamesConst } from 'consts';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';

import { IUsersGroup, THandleGetUsersGroups, TResetUsersGroups } from 'store';

interface IUsersGroups {
  getUsersGroups: THandleGetUsersGroups;
  isLoading: boolean;
  resetUsersGroups: TResetUsersGroups;
  usersGroups: ImmutableArray<IUsersGroup>;
}

export const UsersGroups: React.FC<IUsersGroups> = ({
  getUsersGroups,
  isLoading,
  resetUsersGroups,
  usersGroups,
}) => {
  React.useEffect(
    () => {
      getUsersGroups();
      return () => resetUsersGroups();
    },
    [getUsersGroups, resetUsersGroups]
  );

  return (
    <PageTemplate
      title="User Groups"
      data={usersGroups}
      columns={tableColumns}
      isDownloadButton={true}
      newModalName={modalNamesConst.ADD_USERS_GROUP}
      viewingModalName={modalNamesConst.EDIT_USERS_GROUP}
      isLoading={isLoading}
    />
  );
};

export default UsersGroups;
