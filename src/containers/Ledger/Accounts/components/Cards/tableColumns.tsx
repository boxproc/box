import React from 'react';

import { TableCell, TableHeader } from 'components';

import { LedgerAccountsCardsItemPrepared } from 'store';

import { TableCellType } from 'types';

type TCell<T extends keyof LedgerAccountsCardsItemPrepared> =
  TableCellType<LedgerAccountsCardsItemPrepared[T]>;

export const tableColumns = [
  {
    maxWidth: 150,
    Header: <TableHeader title="Pan Alias" />,
    accessor: 'panAlias',
    Cell: (props: TCell<'panAlias'>) => (
      <TableCell
        isNumber={true}
        value={props.value}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 200,
    Header: <TableHeader title="Pan Masked" />,
    accessor: 'panMasked',
    Cell: (props: TCell<'panMasked'>) => (
      <TableCell
        value={props.value}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 100,
    Header: <TableHeader title="Expiry Date" />,
    accessor: 'expiryDate',
    Cell: (props: TCell<'expiryDate'>) => (
      <TableCell
        value={props.value}
        isDate={true}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 100,
    Header: <TableHeader title="Status" />,
    accessor: 'cardStatus',
    Cell: (props: TCell<'cardStatus'>) => (
      <TableCell
        value={props.value}
        isSmaller={true}
      />
    ),
  },
];
