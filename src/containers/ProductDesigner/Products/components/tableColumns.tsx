import React from 'react';

import { Cell, Header } from 'components/Table';
import { renderCheckBoxIcon } from 'components/Table/utils';

import { ProductItem } from 'store/domains';

import { TableCell } from 'types';

type PCell<T extends keyof ProductItem> = TableCell<ProductItem[T]>;

export const tableColumns = [
  {
    maxWidth: 100,
    sortable: true,
    Header: <Header title="ID" />,
    accessor: 'id',
    Cell: (props: PCell<'id'>) => (
      <Cell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    sortable: true,
    Header: <Header title="Institution" />,
    accessor: 'institutionId',
    Cell: (props: PCell<'institutionId'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    sortable: true,
    Header: <Header title="Name" />,
    accessor: 'name',
    Cell: (props: PCell<'name'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    sortable: true,
    Header: <Header title="Description" />,
    accessor: 'description',
    Cell: (props: PCell<'description'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 150,
    sortable: true,
    Header: <Header title="Status" />,
    accessor: 'status',
    Cell: (props: PCell<'status'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 130,
    sortable: true,
    Header: <Header title="Product Type" />,
    accessor: 'productType',
    Cell: (props: PCell<'productType'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 130,
    sortable: true,
    Header: <Header title="Scheme" />,
    accessor: 'scheme',
    Cell: (props: PCell<'scheme'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 130,
    sortable: true,
    Header: <Header title="Currency code" />,
    accessor: 'currencyCode',
    Cell: (props: PCell<'currencyCode'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    sortable: true,
    Header: <Header title="History Retention Number of Days" />,
    accessor: 'historyRetentionNumberOfDay',
    Cell: (props: PCell<'historyRetentionNumberOfDay'>) => (
      <Cell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    sortable: true,
    Header: <Header title="Default Statement Cycle" />,
    accessor: 'defaultStatementCycleId',
    Cell: (props: PCell<'defaultStatementCycleId'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 100,
    sortable: true,
    Header: <Header title="Locked" />,
    accessor: 'lockedFlag',
    Cell: renderCheckBoxIcon(),
  },
];
