import React from 'react';
import { ImmutableArray } from 'seamless-immutable';

import { modalNamesConst } from 'consts';
import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';
import { UsersFilter } from './forms';

import {
  IUser,
  THandleFilterUserById,
  THandleFilterUsers,
  TResetUsers
} from 'store';

import { ISelectValue } from 'types';

interface IUsers {
  currentUserId: number;
  filterUsers: THandleFilterUsers;
  filterUsersById: THandleFilterUserById;
  institutionsOptions: Array<ISelectValue>;
  isLoading: boolean;
  resetUsers: TResetUsers;
  users: ImmutableArray<IUser>;
}

export const Users: React.FC<IUsers> = ({
  currentUserId,
  filterUsers,
  filterUsersById,
  institutionsOptions,
  isLoading,
  resetUsers,
  users,
}) => {
  React.useEffect(
    () => {
      return () => resetUsers();
    },
    [resetUsers]
  );

  const contextMenuItems = React.useMemo(
    () => [
      { isDivider: true },
      {
        name: 'Activity',
        action: () => filterUsersById({ user_id: currentUserId }),
      },
    ],
    [filterUsersById, currentUserId]
  );

  const initialFilterValues = React.useMemo(
    () => {
      return {
        statusActiveFlag: false,
        institutionId: institutionsOptions[0],
      };
    },
    [institutionsOptions]
  );

  return (
    <PageTemplate
      title="Users"
      data={users}
      columns={tableColumns}
      contextMenuItems={contextMenuItems}
      newModalName={modalNamesConst.ADD_USER}
      viewingModalName={modalNamesConst.EDIT_USER}
      filterAction={filterUsers}
      isDownloadButton={true}
      isLoading={isLoading}
      initialFilterValues={initialFilterValues}
      FilterForm={
        <UsersFilter
          isDisabled={isLoading}
          institutionsOptions={institutionsOptions}
        />
      }
    />
  );
};

export default Users;
