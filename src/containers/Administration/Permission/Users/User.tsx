import React from 'react';

import { TablePage, withSpinner } from 'components';

import { modalNamesConst } from 'consts';

import { tableColumns } from './components';
import { UserFilter } from './forms';

import { AdminUserItemPrepared, HandleFilterUsers } from 'store/domains';

import { SelectValues } from 'types';

interface UserFilterProps {
  adminUserItems: Array<AdminUserItemPrepared>;
  institutionsOptions: Array<SelectValues>;
  filterUsers: HandleFilterUsers;
}

export const User: React.FC<UserFilterProps> = ({
  adminUserItems,
  institutionsOptions,
  filterUsers,
}) => {
  return (
    <TablePage
      title="Users"
      data={adminUserItems}
      columns={tableColumns}
      addNewModalName={modalNamesConst.ADD_ADMIN_USER}
      editModalName={modalNamesConst.EDIT_ADMIN_USER}
      FilterForm={
        <UserFilter
          filterUsers={filterUsers}
          institutionsOptions={institutionsOptions}
          initialValues={{
            statusActiveFlag: false,
          }}
        />
      }
    />
  );
};

export default withSpinner({
  isFixed: true,
})(User);
