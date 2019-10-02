import React from 'react';

import { TableCell, TableHeader } from 'components';

import { LedgerCardItemPrepared } from 'store/domains';

import { TableCellType } from 'types';

type TCell<T extends keyof LedgerCardItemPrepared> =
  TableCellType<LedgerCardItemPrepared[T]>;

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
    maxWidth: 100,
    sortable: true,
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
    maxWidth: 150,
    sortable: true,
    Header: <TableHeader title="PAN Alias" />,
    accessor: 'panAlias',
    Cell: (props: TCell<'panAlias'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 300,
    sortable: true,
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
    sortable: true,
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
    maxWidth: 100,
    sortable: true,
    Header: <TableHeader title="Status" />,
    accessor: 'cardStatusName',
    Cell: (props: TCell<'cardStatusName'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
];
