import React from 'react';

import { withSpinner } from 'components/Spinner';
import { Cell, Header, Table, TableNoData } from 'components/Table';

import {
  AdminGroupPermissionItemForm,
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
  adminGroupPermissions: Array<any>;
}

type SCell<T extends keyof AdminGroupPermissionItemForm> =
 TableCell<AdminGroupPermissionItemForm[T]>;

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
      accessor: 'deleteButton',
      Cell: (cellInfo: CellInfo) => (
        <Button
          iconName="delete"
          text="Delete"
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
