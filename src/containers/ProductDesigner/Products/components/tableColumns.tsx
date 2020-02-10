import React from 'react';

import { renderCheckBoxTableCell, TableCell, TableHeader } from 'components';

import { ProductItem } from 'store/domains';

import { TableCellType } from 'types';
import { renderProductIcon } from 'utils/renderProductIcon';

type TCell<T extends keyof ProductItem> = TableCellType<ProductItem[T]>;

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
    maxWidth: 130,
    Header: <TableHeader title="Institution" />,
    accessor: 'institutionId',
    Cell: (props: TCell<'institutionId'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 300,
    minWidth: 140,
    Header: <TableHeader title="Name" />,
    accessor: 'name',
    Cell: (props: TCell<'name'>) => (
      <TableCell
        value={props.value}
        Icon={renderProductIcon(props.original.productTypeCode)}
      />
    ),
  },
  {
    maxWidth: 300,
    minWidth: 140,
    Header: <TableHeader title="Description" />,
    accessor: 'description',
    Cell: (props: TCell<'description'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 90,
    Header: <TableHeader title="Status" />,
    accessor: 'status',
    Cell: (props: TCell<'status'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 120,
    Header: <TableHeader title="Product Type" />,
    accessor: 'productType',
    Cell: (props: TCell<'productType'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 100,
    Header: <TableHeader title="Scheme" />,
    accessor: 'scheme',
    Cell: (props: TCell<'scheme'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 80,
    Header: <TableHeader title="Currency code" />,
    accessor: 'currencyCode',
    Cell: (props: TCell<'currencyCode'>) => (
      <TableCell
        value={props.value}
        onCenter={true}
      />
    ),
  },
  {
    maxWidth: 110,
    Header: <TableHeader title="History Retention Number of Days" />,
    accessor: 'historyRetentionNumberOfDays',
    Cell: (props: TCell<'historyRetentionNumberOfDays'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 100,
    Header: <TableHeader title="Statement Cycle Type" />,
    accessor: 'statementCycleType',
    Cell: (props: TCell<'statementCycleType'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 100,
    Header: <TableHeader title="Statement Cycle Parameter" />,
    accessor: 'statementCycleParameter',
    Cell: (props: TCell<'statementCycleParameter'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 60,
    Header: <TableHeader title="Locked" />,
    accessor: 'lockedFlag',
    Cell: renderCheckBoxTableCell(),
  },
];
