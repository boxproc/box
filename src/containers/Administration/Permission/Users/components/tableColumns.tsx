import React from 'react';

import { renderCheckBoxTableCell, TableCell, TableHeader } from 'components';

import { AdminUserItemPrepared } from 'store';

import { TableCellType } from 'types';

type TCell<T extends keyof AdminUserItemPrepared> = TableCellType<AdminUserItemPrepared[T]>;

export const tableColumns = [
  {
    maxWidth: 200,
    Header: <TableHeader title="Username" />,
    accessor: 'username',
    Cell: (props: TCell<'username'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 250,
    Header: <TableHeader title="First Name" />,
    accessor: 'firstName',
    Cell: (props: TCell<'firstName'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 250,
    Header: <TableHeader title="Last Name" />,
    accessor: 'lastName',
    Cell: (props: TCell<'lastName'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 130,
    Header: <TableHeader title="Institution" />,
    accessor: 'institution',
    Cell: (props: TCell<'institution'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 200,
    Header: <TableHeader title="Email" />,
    accessor: 'email',
    Cell: (props: TCell<'email'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 120,
    Header: <TableHeader title="Status" />,
    accessor: 'status',
    Cell: (props: TCell<'status'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 80,
    Header: <TableHeader title="2FA Required" />,
    accessor: 'requires2faFlag',
    Cell: renderCheckBoxTableCell(),
  },
  {
    maxWidth: 90,
    Header: <TableHeader title="Change Profile Allowed" />,
    accessor: 'changeProfileAllowedFlag',
    Cell: renderCheckBoxTableCell(),
  },
  {
    maxWidth: 90,
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
    maxWidth: 150,
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
