import React from 'react';

import { TablePage, withSpinner } from 'components';

import { modalNamesConst } from 'consts';

import { tableColumns } from './components';
import { UsersFilter } from './forms';

import { AdminUserItemPrepared, HandleFilterUsers } from 'store/domains';

interface UsersProps {
  adminUserItems: Array<AdminUserItemPrepared>;
  filterUsers: HandleFilterUsers;
}

export const Users: React.FC<UsersProps> = ({
  adminUserItems,
  filterUsers,
}) => {
  return (
    <TablePage
      title="Users"
      data={adminUserItems}
      columns={tableColumns}
      addNewModalName={modalNamesConst.ADD_ADMIN_USER}
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
