import React from 'react';
import { RowInfo } from 'react-table';

import { withSpinner } from 'components/Spinner';
import { Cell, Header } from 'components/Table';
import TablePage from 'components/TablePage';

import { modalNames } from 'consts';

import {
  AdminUsersGroupInfoPlain,
  HandleGetAdminUsersGroup,
} from 'store/domains/administration/permissions/usersGroups';

import {
  OpenModal,
} from 'store/domains/';

import { TableCell } from 'types';

interface UserFilterProps {
  adminUsersGroupItems: Array<Partial<AdminUsersGroupInfoPlain>>;
  openModal: OpenModal;
  getAdminUsersGroup: HandleGetAdminUsersGroup;
}

type SCell<T extends keyof AdminUsersGroupInfoPlain> = TableCell<AdminUsersGroupInfoPlain[T]>;

export const UsersGroup: React.FC<UserFilterProps> = ({
  openModal,
  getAdminUsersGroup,
  adminUsersGroupItems,
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
        onDoubleClick: () => openModal({
          name: modalNames.EDIT_ADMIN_USERS_GROUP,
          payload: { usersGroupValues: rowInfo.original },
        }),
      };
    },
    [openModal]
  );

  const columns = [
    {
      maxWidth: 100,
      sortable: true,
      filterable: true,
      Header: <Header title="ID" showSortIcons={true} />,
      accessor: 'id',
      Cell: (props: SCell<'id'>) => (
        <Cell
          value={props.value}
          isNumber={true}
        />
      ),
    },
    {
      maxWidth: 300,
      sortable: true,
      filterable: true,
      Header: <Header title="Institution" showSortIcons={true} />,
      accessor: 'institutionId',
      Cell: (props: SCell<'institutionId'>) => (
        <Cell
          value={props.value}
        />
      ),
    },
    {
      maxWidth: 300,
      sortable: true,
      filterable: true,
      Header: <Header title="Name of User Group" showSortIcons={true} />,
      accessor: 'name',
      Cell: (props: SCell<'name'>) => (
        <Cell
          value={props.value}
        />
      ),
    },
  ];

  return (
    <TablePage
      title="Users Group"
      data={adminUsersGroupItems}
      columns={columns}
      addNewModalName={modalNames.ADD_ADMIN_USERS_GROUP}
      getTrGroupProps={handleOnClickRow}
      hint="Double Click on Row to Edit User Group"

    />
  );
};

export default withSpinner({
  isFixed: true,
})(UsersGroup);
