import React from 'react';

import { withSpinner } from 'components/Spinner';
import { Cell, Header, Table, TableNoData } from 'components/Table';

import {
  AdminGroupPermissionItem,
  HandleDeleteAdminGroupPermissions,
  HandleGetAdminGroupPermissions,
} from 'store/domains/administration/permissions/usersGroups';

import { Button } from 'components/Buttons';
import { CellInfo } from 'react-table';

import { TableCell } from 'types';

interface UsersGroupMembersProps {
  adminUserGroupMemberId: number;
  getAdminGroupPermission: HandleGetAdminGroupPermissions;
  deleteAdminGroupPermission: HandleDeleteAdminGroupPermissions;
  adminGroupPermissions: Array<AdminGroupPermissionItem>;
}

type SCell<T extends keyof AdminGroupPermissionItem> =
 TableCell<AdminGroupPermissionItem[T]>;

export const UsersGroupMembers: React.FC<UsersGroupMembersProps> = ({
  getAdminGroupPermission,
  adminUserGroupMemberId,
  adminGroupPermissions,
  deleteAdminGroupPermission,
}) => {
  React.useEffect(
    () => {
      getAdminGroupPermission(adminUserGroupMemberId);
    },
    [getAdminGroupPermission, adminUserGroupMemberId]
  );

  const columns = [
    {
      sortable: true,
      Header: <Header title="Ui Items" showSortIcons={true} />,
      accessor: 'uiItem',
      Cell: (props: SCell<'uiItem'>) => (
        <Cell
          value={props.value}
        />
      ),
    },
    {
      maxWidth: 200,
      sortable: true,
      Header: <Header title="Permission" showSortIcons={true} />,
      accessor: 'permission',
      Cell: (props: SCell<'permission'>) => (
        <Cell
          value={props.value}
        />
      ),
    },
    {
      maxWidth: 100,
      sortable: true,
      accessor: 'deleteButton',
      Cell: (cellInfo: CellInfo) => (
        <Button
          iconName="delete"
          text="Delete"
          size="12"
          withConfirmation={true}
          onClick={() =>
            deleteAdminGroupPermission(
              cellInfo.original.user_group_id,
              cellInfo.original.ui_item,
              cellInfo.original.permission
            )
          }
        />
      ),
    },
  ];

  return (
    <Table
      title="User Group Members"
      data={adminGroupPermissions}
      columns={columns}
      NoDataComponent={TableNoData}
    />
  );
};

export default withSpinner()(UsersGroupMembers);
