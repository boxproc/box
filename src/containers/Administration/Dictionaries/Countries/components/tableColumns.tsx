import React from 'react';

import { TableCell, TableHeader } from 'components';

import { DictionaryCountriesItemPrepared } from 'store/domains';

import { TableCellType } from 'types';

type TCell<T extends keyof DictionaryCountriesItemPrepared> =
  TableCellType<DictionaryCountriesItemPrepared[T]>;

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
    Header: <TableHeader title="Country Code" />,
    accessor: 'countryCode',
    Cell: (props: TCell<'countryCode'>) => (
      <TableCell
        value={props.value}
        onCenter={true}
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
