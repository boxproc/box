import React from 'react';

import { Cell, Header } from 'components/Table';

import { AdminUserItemPrepared } from 'store/domains/administration/permissions/users';

import { TableCell } from 'types';

type SCell<T extends keyof AdminUserItemPrepared> = TableCell<AdminUserItemPrepared[T]>;

export const tableColumns = [
  {
    maxWidth: 100,
    sortable: true,
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
    Header: <Header title="Email" />,
    accessor: 'email',
    Cell: (props: SCell<'email'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 150,
    sortable: true,
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
    maxWidth: 200,
    sortable: true,
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
