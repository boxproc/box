import React from 'react';
import { CellInfo } from 'react-table';

import { Button, T4, Table, TableCell, withSpinner } from 'components';

import { iconNamesConst } from 'consts';

import {
  AdminUserGroupMemberPrepared,
  HandleDeleteAdminUserGroupMembers,
  HandleGetAdminUserGroupMembers,
} from 'store/domains';

import { TableCellType } from 'types';

interface UsersGroupMembersProps {
  adminUserGroupMemberId: number;
  getAdminUserGroupMembers: HandleGetAdminUserGroupMembers;
  AdminUserGroupMembers: Array<AdminUserGroupMemberPrepared>;
  deleteAdminUserGroupMembers: HandleDeleteAdminUserGroupMembers;
}

type TCell<T extends keyof AdminUserGroupMemberPrepared> =
  TableCellType<AdminUserGroupMemberPrepared[T]>;

export const UsersGroupMembers: React.FC<UsersGroupMembersProps> = ({
  getAdminUserGroupMembers,
  adminUserGroupMemberId,
  AdminUserGroupMembers,
  deleteAdminUserGroupMembers,
}) => {
  React.useEffect(
    () => {
      getAdminUserGroupMembers(adminUserGroupMemberId);
    },
    [getAdminUserGroupMembers, adminUserGroupMemberId]
  );

  const columns = React.useMemo(
    () => [
      {
        accessor: 'username',
        Cell: (props: TCell<'username'>) => (
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
            withConfirmation={true}
            confirmationText={`Delete user "${cellInfo.original.username}" from the group?`}
            onClick={() => deleteAdminUserGroupMembers(
              adminUserGroupMemberId,
              cellInfo.original.id
            )}
          />
        ),
      },
    ],
    [adminUserGroupMemberId, deleteAdminUserGroupMembers]
  );

  return (
    <React.Fragment>
      <T4>Group Members</T4>
      <Table
        data={AdminUserGroupMembers}
        columns={columns}
        pageSize={6}
        isHeader={false}
        isSmaller={true}
      />
    </React.Fragment>
  );
};

export default withSpinner()(UsersGroupMembers);
