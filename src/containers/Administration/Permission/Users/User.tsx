import React from 'react';
import { RowInfo } from 'react-table';

import { withSpinner } from 'components/Spinner';
import { Cell, Header } from 'components/Table';
import TablePage from 'components/TablePage';

import { modalNames } from 'consts';

import {
  AdminUserItem,
  HandleFilterUsers,
  HandleGetAdminUser,
} from 'store/domains/administration/permissions/users';

import {
  OpenModal,
} from 'store/domains/';

import { SelectValues, TableCell } from 'types';
import UserFilter from './UserFilter';

interface UserFilterProps {
  adminUserItems: Array<Partial<AdminUserItem>>;
  openModal: OpenModal;
  getAdminUser: HandleGetAdminUser;
  institutionsOptions: Array<SelectValues>;
  filterUsers: HandleFilterUsers;
}

type SCell<T extends keyof AdminUserItem> = TableCell<AdminUserItem[T]>;

export const User: React.FC<UserFilterProps> = ({
  openModal,
  getAdminUser,
  adminUserItems,
  institutionsOptions,
  filterUsers,
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
        onDoubleClick: () => openModal({
          name: modalNames.EDIT_ADMIN_USER,
          payload: { usersValues: rowInfo.original },
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
      Header: <Header title="ID" />,
      accessor: 'id',
      Cell: (props: SCell<'id'>) => (
        <Cell
          value={props.value}
          isNumber={true}
        />
      ),
    },
    {
      sortable: true,
      filterable: true,
      Header: <Header title="Username" />,
      accessor: 'username',
      Cell: (props: SCell<'username'>) => (
        <Cell
          value={props.value}
        />
      ),
    },
    {
      sortable: true,
      filterable: true,
      Header: <Header title="First Name" />,
      accessor: 'firstName',
      Cell: (props: SCell<'firstName'>) => (
        <Cell
          value={props.value}
        />
      ),
    },
    {
      sortable: true,
      filterable: true,
      Header: <Header title="Last Name" />,
      accessor: 'lastName',
      Cell: (props: SCell<'lastName'>) => (
        <Cell
          value={props.value}
        />
      ),
    },
    {
      sortable: true,
      filterable: true,
      Header: <Header title="Email" />,
      accessor: 'email',
      Cell: (props: SCell<'email'>) => (
        <Cell
          value={props.value}
        />
      ),
    },
    {
      sortable: true,
      filterable: true,
      Header: <Header title="Status" />,
      accessor: 'status',
      Cell: (props: SCell<'status'>) => (
        <Cell
          value={props.value}
        />
      ),
    },
    {
      sortable: true,
      filterable: true,
      Header: <Header title="Password entry counter" />,
      accessor: 'passwordEntryCounter',
      Cell: (props: SCell<'passwordEntryCounter'>) => (
        <Cell
          value={props.value}
          isNumber={true}
        />
      ),
    },
    {
      sortable: true,
      filterable: true,
      Header: <Header title="Datetime of last login" />,
      accessor: 'datetimeOfLastLogin',
      Cell: (props: SCell<'datetimeOfLastLogin'>) => (
        <Cell
          value={props.value}
          isDate={true}
        />
      ),
    },
  ];

  return (
    <TablePage
      title="Users"
      data={adminUserItems}
      columns={columns}
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
