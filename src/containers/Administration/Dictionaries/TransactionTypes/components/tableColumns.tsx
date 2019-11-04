import React from 'react';

import { TableCell, TableHeader } from 'components';

import { DictionaryTransactionTypes } from 'store/domains';

import { TableCellType } from 'types';

type TCell<T extends keyof DictionaryTransactionTypes> =
  TableCellType<DictionaryTransactionTypes[T]>;

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
    maxWidth: 180,
    sortable: true,
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
    sortable: true,
    Header: <TableHeader title="Description" />,
    accessor: 'description',
    Cell: (props: TCell<'description'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
];
