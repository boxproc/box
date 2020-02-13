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
  userGroupMemberId: number;
  getUserGroupMembers: HandleGetAdminUserGroupMembers;
  userGroupMembers: Array<AdminUserGroupMemberPrepared>;
  deleteUserGroupMembers: HandleDeleteAdminUserGroupMembers;
  isReadOnly: boolean;
}

type TCell<T extends keyof AdminUserGroupMemberPrepared> =
  TableCellType<AdminUserGroupMemberPrepared[T]>;

export const UsersGroupMembers: React.FC<UsersGroupMembersProps> = ({
  getUserGroupMembers,
  userGroupMemberId,
  userGroupMembers,
  deleteUserGroupMembers,
  isReadOnly,
}) => {
  React.useEffect(
    () => {
      getUserGroupMembers(userGroupMemberId);
    },
    [getUserGroupMembers, userGroupMemberId]
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
            disabled={isReadOnly}
            confirmationText={`Delete user "${cellInfo.original.username}" from the group?`}
            onClick={() => deleteUserGroupMembers(
              userGroupMemberId,
              cellInfo.original.id
            )}
          />
        ),
      },
    ],
    [userGroupMemberId, deleteUserGroupMembers, isReadOnly]
  );

  return (
    <React.Fragment>
      <T4>Group Members</T4>
      <Table
        data={userGroupMembers}
        columns={columns}
        isHeader={false}
        isSmaller={true}
      />
    </React.Fragment>
  );
};

export default withSpinner()(UsersGroupMembers);
