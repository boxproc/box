import React from 'react';

import { TableCell, TableHeader } from 'components';

import { LedgerCardItemPrepared } from 'store';

import { ITableCell } from 'types';

type TCell<T extends keyof LedgerCardItemPrepared> =
  ITableCell<LedgerCardItemPrepared[T]>;

export const tableColumns = [
  {
    maxWidth: 120,
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
    maxWidth: 120,
    Header: <TableHeader title="Account ID" />,
    accessor: 'accountId',
    Cell: (props: TCell<'accountId'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 120,
    Header: <TableHeader title="Customer ID" />,
    accessor: 'customerId',
    Cell: (props: TCell<'customerId'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 150,
    Header: <TableHeader title="PAN Alias" />,
    accessor: 'panAlias',
    Cell: (props: TCell<'panAlias'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 200,
    Header: <TableHeader title="PAN Masked" />,
    accessor: 'panMasked',
    Cell: (props: TCell<'panMasked'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 120,
    Header: <TableHeader title="Expiry Date" />,
    accessor: 'expiryDate',
    Cell: (props: TCell<'expiryDate'>) => (
      <TableCell
        value={props.value}
        isDate={true}
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
];
