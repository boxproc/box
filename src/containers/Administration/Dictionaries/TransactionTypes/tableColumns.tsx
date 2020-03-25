import React from 'react';

import { TableCell, TableHeader } from 'components';

import { IDictionaryTransactionTypePrepared } from 'store';

import { ITableCellType } from 'types';

type TCell<T extends keyof IDictionaryTransactionTypePrepared> =
  ITableCellType<IDictionaryTransactionTypePrepared[T]>;

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
    maxWidth: 180,
    Header: <TableHeader title="Debit Credit Indicator" />,
    accessor: 'debitCreditIndicator',
    Cell: (props: TCell<'debitCreditIndicator'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 250,
    Header: <TableHeader title="Description" />,
    accessor: 'description',
    Cell: (props: TCell<'description'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
];
