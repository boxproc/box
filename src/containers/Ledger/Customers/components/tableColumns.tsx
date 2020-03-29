import React from 'react';

import { TableCell, TableHeader } from 'components';

import { LedgerCustomerItemPrepared } from 'store';

import { ITableCell } from 'types';

type TCell<T extends keyof LedgerCustomerItemPrepared> = ITableCell<LedgerCustomerItemPrepared[T]>;

export const tableColumns = [
  {
    maxWidth: 100,
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
    maxWidth: 150,
    Header: <TableHeader title="Institution" />,
    accessor: 'institutionId',
    Cell: (props: TCell<'institutionId'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 220,
    Header: <TableHeader title="First Name" />,
    accessor: 'firstName',
    Cell: (props: TCell<'firstName'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 220,
    Header: <TableHeader title="Last Name" />,
    accessor: 'lastName',
    Cell: (props: TCell<'lastName'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 100,
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
    Header: <TableHeader title="Date of Birth" />,
    accessor: 'dateOfBirth',
    Cell: (props: TCell<'dateOfBirth'>) => (
      <TableCell
        isDate={true}
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
    maxWidth: 150,
    Header: <TableHeader title="Mobile Phone" />,
    accessor: 'mobilePhoneNumber',
    Cell: (props: TCell<'mobilePhoneNumber'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
];
