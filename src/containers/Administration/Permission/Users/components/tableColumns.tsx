import React from 'react';

import { renderCheckBoxIconTableCell, TableCell, TableHeader } from 'components';

import { AdminUserItemPrepared } from 'store/domains';

import { TableCellType } from 'types';

type TCell<T extends keyof AdminUserItemPrepared> = TableCellType<AdminUserItemPrepared[T]>;

export const tableColumns = [
  {
    maxWidth: 100,
    sortable: true,
    Header: <TableHeader title="ID" />,
    accessor: 'id',
    Cell: (props: TCell<'id'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 200,
    sortable: true,
    Header: <TableHeader title="Username" />,
    accessor: 'username',
    Cell: (props: TCell<'username'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 200,
    sortable: true,
    Header: <TableHeader title="First Name" />,
    accessor: 'firstName',
    Cell: (props: TCell<'firstName'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 200,
    sortable: true,
    Header: <TableHeader title="Last Name" />,
    accessor: 'lastName',
    Cell: (props: TCell<'lastName'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 200,
    sortable: true,
    Header: <TableHeader title="Email" />,
    accessor: 'email',
    Cell: (props: TCell<'email'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 150,
    sortable: true,
    Header: <TableHeader title="Status" />,
    accessor: 'status',
    Cell: (props: TCell<'status'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 100,
    sortable: true,
    Header: <TableHeader title="2FA Required" />,
    accessor: 'requires2faFlag',
    Cell: renderCheckBoxIconTableCell(),
  },
  {
    maxWidth: 100,
    sortable: true,
    Header: <TableHeader title="Change Profile Allowed" />,
    accessor: 'changeProfileAllowedFlag',
    Cell: renderCheckBoxIconTableCell(),
  },
  {
    maxWidth: 100,
    sortable: true,
    Header: <TableHeader title="Password Entry Counter" />,
    accessor: 'passwordEntryCounter',
    Cell: (props: TCell<'passwordEntryCounter'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 200,
    sortable: true,
    Header: <TableHeader title="Datetime of Last Login" />,
    accessor: 'datetimeOfLastLogin',
    Cell: (props: TCell<'datetimeOfLastLogin'>) => (
      <TableCell
        value={props.value}
        isDate={true}
      />
    ),
  },
];
