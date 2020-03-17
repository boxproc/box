import React from 'react';

import { modalNamesConst } from 'consts';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';
import { UsersFilter } from './forms';

import {
  AdminUserItemPrepared,
  HandleFilterAuditUserById,
  HandleFilterUsers,
  ResetUsers
} from 'store';

import { SelectValue } from 'types';

interface UsersProps {
  userItems: Array<AdminUserItemPrepared>;
  institutionsOptions: Array<SelectValue>;
  filterUsers: HandleFilterUsers;
  filterUsersById: HandleFilterAuditUserById;
  currentUserId: number;
  resetUsers: ResetUsers;
  isLoading: boolean;
}

export const Users: React.FC<UsersProps> = ({
  userItems,
  institutionsOptions,
  filterUsers,
  filterUsersById,
  currentUserId,
  resetUsers,
  isLoading,
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
      data={userItems}
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
