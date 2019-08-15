import React from 'react';
import { RowInfo } from 'react-table';

import { withSpinner } from 'components/Spinner';
import TablePage from 'components/TablePage';
import { tableColumns } from 'containers/Administration/Permission/Users/components';

import { modalNames } from 'consts';

import { UserFilter } from 'containers/Administration/Permission/Users/forms';

import { OpenModal } from 'store/domains/';
import {
  AdminUserItemPrepared,
  HandleFilterUsers,
  HandleGetAdminUser,
  HandleSetAdminUserId,
} from 'store/domains/administration/permissions/users';

import { SelectValues } from 'types';

interface UserFilterProps {
  adminUserItems: Array<AdminUserItemPrepared>;
  openModal: OpenModal;
  getAdminUser: HandleGetAdminUser;
  institutionsOptions: Array<SelectValues>;
  filterUsers: HandleFilterUsers;
  setAdminUserId: HandleSetAdminUserId;
}

export const User: React.FC<UserFilterProps> = ({
  openModal,
  getAdminUser,
  adminUserItems,
  institutionsOptions,
  filterUsers,
  setAdminUserId,
}) => {
  React.useEffect(
    () => {
      getAdminUser();
    },
    [getAdminUser]
  );

  const handleOnClickRow = React.useCallback(
    (_, rowInfo: RowInfo) => {
      return {
        onDoubleClick: () => {
          setAdminUserId(rowInfo.original.id);
          openModal({
            name: modalNames.EDIT_ADMIN_USER,
          });
        },
      };
    },
    [openModal, setAdminUserId]
  );

  return (
    <TablePage
      title="Users"
      data={adminUserItems}
      columns={tableColumns}
      addNewModalName={modalNames.ADD_ADMIN_USER}
      getTrGroupProps={handleOnClickRow}
      hint="Double Click on Row to Edit User"
      FilterForm={
        <UserFilter
          filterUsers={filterUsers}
          institutionsOptions={institutionsOptions}
        />
      }
    />
  );
};

export default withSpinner({
  isFixed: true,
})(User);
