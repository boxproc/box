import React from 'react';
import { CellInfo } from 'react-table';

import { Button, T4, Table, TableCell, TableHeader, withSpinner } from 'components';

import { iconNamesConst } from 'consts';

import {
  AdminGroupPermissionItem,
  HandleDeleteAdminGroupPermissions,
  HandleGetAdminGroupPermissions,
} from 'store/domains';

import { TableCellType } from 'types';

interface UsersGroupMembersProps {
  userGroupMemberId: number;
  getGroupPermission: HandleGetAdminGroupPermissions;
  deleteGroupPermission: HandleDeleteAdminGroupPermissions;
  groupPermissions: Array<AdminGroupPermissionItem>;
}

type TCell<T extends keyof AdminGroupPermissionItem> =
  TableCellType<AdminGroupPermissionItem[T]>;

export const UsersGroupMembers: React.FC<UsersGroupMembersProps> = ({
  getGroupPermission,
  userGroupMemberId,
  groupPermissions,
  deleteGroupPermission,
}) => {
  React.useEffect(
    () => {
      getGroupPermission(userGroupMemberId);
    },
    [getGroupPermission, userGroupMemberId]
  );

  const columns = React.useMemo(
    () => [
      {
        Header: <TableHeader title="UI Item" />,
        accessor: 'uiItem',
        filterable: true,
        Cell: (props: TCell<'uiItem'>) => (
          <TableCell
            value={props.value}
            isSmaller={true}
          />
        ),
      },
      {
        maxWidth: 200,
        Header: <TableHeader title="Permission" />,
        accessor: 'permission',
        Cell: (props: TCell<'permission'>) => (
          <TableCell
            value={props.value}
            isSmaller={true}
          />
        ),
      },
      {
        maxWidth: 90,
        accessor: 'deleteButton',
        Cell: (cellInfo: CellInfo) => (
          <Button
            iconName={iconNamesConst.DELETE}
            text="Remove"
            size="10"
            iconSize="15"
            confirmationText={`Delete UI item "${cellInfo.original.uiItem}" from the group?`}
            withConfirmation={true}
            onClick={() =>
              deleteGroupPermission(
                cellInfo.original.userGroupId,
                cellInfo.original.uiItem
              )
            }
          />
        ),
      },
    ],
    [deleteGroupPermission]
  );

  return (
    <React.Fragment>
      <T4>Group Permissions</T4>
      <Table
        data={groupPermissions}
        columns={columns}
        pageSize={9}
        isSmaller={true}
      />
    </React.Fragment>
  );
};

export default withSpinner()(UsersGroupMembers);
