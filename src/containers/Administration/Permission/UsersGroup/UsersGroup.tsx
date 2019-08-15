import React from 'react';
import { RowInfo } from 'react-table';

import { withSpinner } from 'components/Spinner';
import TablePage from 'components/TablePage';
import { tableColumns } from 'containers/Administration/Permission/UsersGroup/components';

import { modalNames } from 'consts';

import { OpenModal } from 'store/domains/';
import {
  AdminUsersGroupInfoPlain,
  HandleGetAdminUsersGroup,
  HandleSetAdminUsersGroupId,
} from 'store/domains/administration/permissions/usersGroups';

interface UserFilterProps {
  adminUsersGroupItems: Array<AdminUsersGroupInfoPlain>;
  openModal: OpenModal;
  getAdminUsersGroup: HandleGetAdminUsersGroup;
  setAdminUsersGroupId: HandleSetAdminUsersGroupId;
}

export const UsersGroup: React.FC<UserFilterProps> = ({
  openModal,
  getAdminUsersGroup,
  adminUsersGroupItems,
  setAdminUsersGroupId,
}) => {
  React.useEffect(
    () => {
      getAdminUsersGroup();
    },
    [getAdminUsersGroup]
  );

  const handleOnClickRow = React.useCallback(
    (_, rowInfo: RowInfo) => {
      return {
        onDoubleClick: () => {
          setAdminUsersGroupId(rowInfo.original.id);
          openModal({
            name: modalNames.EDIT_ADMIN_USERS_GROUP,
          });
        },
      };
    },
    [openModal, setAdminUsersGroupId]
  );

  return (
    <TablePage
      title="Users Group"
      data={adminUsersGroupItems}
      columns={tableColumns}
      addNewModalName={modalNames.ADD_ADMIN_USERS_GROUP}
      getTrGroupProps={handleOnClickRow}
      hint="Double Click on Row to Edit User Group"
    />
  );
};

export default withSpinner({
  isFixed: true,
})(UsersGroup);
