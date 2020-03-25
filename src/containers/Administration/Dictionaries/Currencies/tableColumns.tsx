import React from 'react';

import { TableCell, TableHeader } from 'components';
import { IDictionaryCurrencyPrepared } from 'store';
import { ITableCellType } from 'types';

type TCell<T extends keyof IDictionaryCurrencyPrepared> =
  ITableCellType<IDictionaryCurrencyPrepared[T]>;

export const tableColumns = [
  {
    maxWidth: 150,
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
    Header: <TableHeader title="Currency Code" />,
    accessor: 'currencyCode',
    Cell: (props: TCell<'currencyCode'>) => (
      <TableCell
        value={props.value}
        onCenter={true}
      />
    ),
  },
  {
    maxWidth: 300,
    Header: <TableHeader title="Name" />,
    accessor: 'name',
    Cell: (props: TCell<'name'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
];
