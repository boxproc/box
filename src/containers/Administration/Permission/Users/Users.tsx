import React from 'react';

import { withSpinner } from 'components';

import { modalNamesConst } from 'consts';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';
import { UsersFilter } from './forms';

import { AdminUserItemPrepared, HandleFilterUsers, ResetUsers } from 'store/domains';

interface UsersProps {
  adminUserItems: Array<AdminUserItemPrepared>;
  filterUsers: HandleFilterUsers;
  resetUsers: ResetUsers;
}

export const Users: React.FC<UsersProps> = ({
  adminUserItems,
  filterUsers,
  resetUsers,
}) => {
  React.useEffect(
    () => {
      return () => resetUsers();
    },
    [resetUsers]
  );

  return (
    <PageTemplate
      title="Users"
      data={adminUserItems}
      columns={tableColumns}
      newModalName={modalNamesConst.ADD_ADMIN_USER}
      editModalName={modalNamesConst.EDIT_ADMIN_USER}
      filterAction={filterUsers}
      initialFilterValues={{
        statusActiveFlag: false,
      }}
      FilterForm={
        <UsersFilter />
      }
    />
  );
};

export default withSpinner({
  isFixed: true,
})(Users);
