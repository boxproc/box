import React from 'react';

import { renderCheckBoxIconTableCell, TableCell, TableHeader } from 'components';

import { ProductItem } from 'store/domains';

import { TableCellType } from 'types';

type TCell<T extends keyof ProductItem> = TableCellType<ProductItem[T]>;

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
    maxWidth: 200,
    sortable: true,
    Header: <TableHeader title="Institution" />,
    accessor: 'institutionId',
    Cell: (props: TCell<'institutionId'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 200,
    sortable: true,
    Header: <TableHeader title="Name" />,
    accessor: 'name',
    Cell: (props: TCell<'name'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    sortable: true,
    Header: <TableHeader title="Description" />,
    accessor: 'description',
    Cell: (props: TCell<'description'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 150,
    sortable: true,
    Header: <TableHeader title="Status" />,
    accessor: 'status',
    Cell: (props: TCell<'status'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 130,
    sortable: true,
    Header: <TableHeader title="Product Type" />,
    accessor: 'productType',
    Cell: (props: TCell<'productType'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 130,
    sortable: true,
    Header: <TableHeader title="Scheme" />,
    accessor: 'scheme',
    Cell: (props: TCell<'scheme'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 130,
    sortable: true,
    Header: <TableHeader title="Currency code" />,
    accessor: 'currencyCode',
    Cell: (props: TCell<'currencyCode'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 130,
    sortable: true,
    Header: <TableHeader title="History Retention Number of Days" />,
    accessor: 'historyRetentionNumberOfDay',
    Cell: (props: TCell<'historyRetentionNumberOfDay'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 200,
    sortable: true,
    Header: <TableHeader title="Default Statement Cycle" />,
    accessor: 'defaultStatementCycleId',
    Cell: (props: TCell<'defaultStatementCycleId'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 100,
    sortable: true,
    Header: <TableHeader title="Locked" />,
    accessor: 'lockedFlag',
    Cell: renderCheckBoxIconTableCell(),
  },
];
