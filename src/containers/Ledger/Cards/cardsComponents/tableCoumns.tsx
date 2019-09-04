import React from 'react';

import { Cell, Header } from 'components/Table';

import { LedgerCardItemPrepared } from 'store/domains';

import { TableCell } from 'types';

type TCell<T extends keyof LedgerCardItemPrepared> =
  TableCell<LedgerCardItemPrepared[T]>;

export const tableColumns = [
  {
    maxWidth: 100,
    sortable: true,
    Header: <Header title="ID" />,
    accessor: 'id',
    Cell: (props: TCell<'id'>) => (
      <Cell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 150,
    sortable: true,
    Header: <Header title="PAN Alias" />,
    accessor: 'panAlias',
    Cell: (props: TCell<'panAlias'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 300,
    sortable: true,
    Header: <Header title="PAN Masked" />,
    accessor: 'panMasked',
    Cell: (props: TCell<'panMasked'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 200,
    sortable: true,
    Header: <Header title="Expiry Date" />,
    accessor: 'expiryDate',
    Cell: (props: TCell<'expiryDate'>) => (
      <Cell
        value={props.value}
        isDate={true}
      />
    ),
  },
  {
    maxWidth: 100,
    sortable: true,
    Header: <Header title="Account ID" />,
    accessor: 'accountId',
    Cell: (props: TCell<'accountId'>) => (
      <Cell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 150,
    sortable: true,
    Header: <Header title="Status" />,
    accessor: 'status',
    Cell: (props: TCell<'status'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
];
