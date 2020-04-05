import React from 'react';
import { CellInfo } from 'react-table';
import { ImmutableArray } from 'seamless-immutable';

import { Flex } from '@rebass/grid';

import { Button, T4, Table, TableCell, withSpinner } from 'components';

import { iconNamesConst } from 'consts';

import {
  IUsersGroupMember,
  THandleDeleteUsersGroupMember,
  THandleGetUsersGroupMembers,
} from 'store';

import { ITableCell } from 'types';

interface IUsersGroupMembers {
  deleteUsersGroupMember: THandleDeleteUsersGroupMember;
  getUsersGroupMembers: THandleGetUsersGroupMembers;
  isReadOnly: boolean;
  memberId: number;
  members: ImmutableArray<IUsersGroupMember>;
}

type TCell<T extends keyof IUsersGroupMember> = ITableCell<IUsersGroupMember[T]>;

export const UsersGroupMembers: React.FC<IUsersGroupMembers> = ({
  getUsersGroupMembers,
  memberId,
  members,
  deleteUsersGroupMember,
  isReadOnly,
}) => {
  React.useEffect(
    () => {
      getUsersGroupMembers(memberId);
    },
    [getUsersGroupMembers, memberId]
  );

  const columns = React.useMemo(
    () => [
      {
        minWidth: 600,
        accessor: 'username',
        Cell: (props: TCell<'username'>) => (
          <TableCell
            value={props.value}
            isSmaller={true}
          />
        ),
      },
      {
        maxWidth: 65,
        accessor: 'deleteButton',
        Cell: (cellInfo: CellInfo) => (
          <Flex
            justifyContent="center"
            width="100%"
          >
            <Button
              iconName={iconNamesConst.DELETE}
              title="Remove"
              size="10"
              withConfirmation={true}
              disabled={isReadOnly}
              confirmationText={`Delete user "${cellInfo.original.username}" from the group?`}
              onClick={() => deleteUsersGroupMember(
                memberId,
                cellInfo.original.id
              )}
            />
          </Flex>
        ),
      },
    ],
    [memberId, deleteUsersGroupMember, isReadOnly]
  );

  return (
    <React.Fragment>
      <T4>Group Members</T4>
      <Table
        data={members}
        columns={columns}
        isHeader={false}
        isSmaller={true}
      />
    </React.Fragment>
  );
};

export default withSpinner()(UsersGroupMembers);
