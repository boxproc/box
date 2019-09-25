import React from 'react';

import { TableCell, TableHeader } from 'components';

import { AdminCurrenciesItemPrepared } from 'store/domains';

import { TableCellType } from 'types';

type TCell<T extends keyof AdminCurrenciesItemPrepared> =
  TableCellType<AdminCurrenciesItemPrepared[T]>;

export const tableColumns = [
  {
    maxWidth: 150,
    sortable: true,
    Header: <TableHeader title="Numeric Code" />,
    accessor: 'numericCode',
    Cell: (props: TCell<'numericCode'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 150,
    sortable: true,
    Header: <TableHeader title="Currency Code" />,
    accessor: 'currencyCode',
    Cell: (props: TCell<'currencyCode'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 300,
    sortable: true,
    Header: <TableHeader title="Name" />,
    accessor: 'name',
    Cell: (props: TCell<'name'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
];
