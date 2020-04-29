import React from 'react';

import { TableCell, TableHeader } from 'components';
import { ICurrencyRate } from 'store';
import { ITableCell } from 'types';

type TCell<T extends keyof ICurrencyRate> = ITableCell<ICurrencyRate[T]>;

export const tableColumns = [
  {
    maxWidth: 200,
    Header: <TableHeader title="Institution" />,
    accessor: 'institutionName',
    Cell: (props: TCell<'institutionName'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 200,
    Header: <TableHeader title="Provider" />,
    accessor: 'provider',
    Cell: (props: TCell<'provider'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 100,
    Header: <TableHeader title="From Currency" />,
    accessor: 'fromCurrency',
    Cell: (props: TCell<'fromCurrency'>) => (
      <TableCell
        value={props.value}
        onCenter={true}
      />
    ),
  },
  {
    maxWidth: 100,
    Header: <TableHeader title="To Currency" />,
    accessor: 'toCurrency',
    Cell: (props: TCell<'toCurrency'>) => (
      <TableCell
        value={props.value}
        onCenter={true}
      />
    ),
  },
  {
    maxWidth: 100,
    Header: <TableHeader title="Spot Rate" />,
    accessor: 'spotRate',
    Cell: (props: TCell<'spotRate'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 160,
    Header: <TableHeader title="Provider Datetime" />,
    accessor: 'providerDatetime',
    Cell: (props: TCell<'providerDatetime'>) => (
      <TableCell
        value={props.value}
        isDate={true}
      />
    ),
  },
  {
    maxWidth: 160,
    Header: <TableHeader title="Provider Datetime" />,
    accessor: 'providerDatetime',
    Cell: (props: TCell<'providerDatetime'>) => (
      <TableCell
        value={props.value}
        isDate={true}
      />
    ),
  },
];
