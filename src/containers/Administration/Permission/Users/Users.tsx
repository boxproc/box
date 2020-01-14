import React from 'react';

import { withSpinner } from 'components';

import { modalNamesConst } from 'consts';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';
import { UsersFilter } from './forms';

import {
  AdminUserItemPrepared,
  HandleFilterAuditUserById,
  HandleFilterUsers,
  ResetUsers
} from 'store/domains';

import { SelectValues } from 'types';

interface UsersProps {
  adminUserItems: Array<AdminUserItemPrepared>;
  institutionsOptions: Array<SelectValues>;
  filterUsers: HandleFilterUsers;
  filterUsersById: HandleFilterAuditUserById;
  currentUserId: number;
  resetUsers: ResetUsers;
}

export const Users: React.FC<UsersProps> = ({
  adminUserItems,
  institutionsOptions,
  filterUsers,
  filterUsersById,
  currentUserId,
  resetUsers,
}) => {
  React.useEffect(
    () => {
      return () => resetUsers();
    },
    [resetUsers]
  );

  const contextMenuItems = React.useMemo(
    () => [
      {
        isDivider: true,
      },
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
      data={adminUserItems}
      columns={tableColumns}
      contextMenuItems={contextMenuItems}
      newModalName={modalNamesConst.ADD_USER}
      editModalName={modalNamesConst.EDIT_USER}
      filterAction={filterUsers}
      isDownloadButton={true}
      initialFilterValues={initialFilterValues}
      FilterForm={
        <UsersFilter
          institutionsOptions={institutionsOptions}
        />
      }
    />
  );
};

export default withSpinner({
  isFixed: true,
})(Users);
