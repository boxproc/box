import React from 'react';

import { ProductImages, renderCheckBoxTableCell, TableCell, TableHeader } from 'components';
import { IProduct } from 'store';
import { ITableCell } from 'types';

type TCell<T extends keyof IProduct> = ITableCell<IProduct[T]>;

export const tableColumns = [
  {
    maxWidth: 70,
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
    maxWidth: 150,
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
    minWidth: 150,
    Header: <TableHeader title="Name" />,
    accessor: 'name',
    Cell: (props: TCell<'name'>) => (
      <TableCell
        value={props.value}
        Icon={ProductImages[props.original.productTypeCode]}
      />
    ),
  },
  {
    maxWidth: 300,
    minWidth: 150,
    Header: <TableHeader title="Description" />,
    accessor: 'description',
    Cell: (props: TCell<'description'>) => (
      <TableCell
        value={props.value}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 65,
    Header: <TableHeader title="Status" />,
    accessor: 'status',
    Cell: (props: TCell<'status'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 85,
    Header: <TableHeader title="Product Type" />,
    accessor: 'productType',
    Cell: (props: TCell<'productType'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 85,
    Header: <TableHeader title="Scheme" />,
    accessor: 'scheme',
    Cell: (props: TCell<'scheme'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 65,
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
    maxWidth: 105,
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
    maxWidth: 65,
    Header: <TableHeader title="Billing Day" />,
    accessor: 'statementCycleParameter',
    Cell: (props: TCell<'statementCycleParameter'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 65,
    Header: <TableHeader title="Locked" />,
    accessor: 'lockedFlag',
    Cell: renderCheckBoxTableCell(),
  },
];
