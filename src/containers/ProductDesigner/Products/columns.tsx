import React from 'react';

import { Cell, Header } from 'components/Table';
import { renderCheckBoxIcon } from 'components/Table/utils';

import {
  ProductItem,
} from 'store/domains';

import { TableCell } from 'types';

type PCell<T extends keyof ProductItem> = TableCell<ProductItem[T]>;

export const columns = [
  {
    maxWidth: 80,
    filterable: true,
    Header: <Header title="ID" />,
    accessor: 'id',
    Cell: (props: PCell<'id'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    sortable: true,
    filterable: true,
    Header: <Header title="Institution ID" showSortIcons={true} />,
    accessor: 'institutionId',
    Cell: (props: PCell<'institutionId'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    sortable: true,
    filterable: true,
    Header: <Header title="Name" showSortIcons={true} />,
    accessor: 'name',
    Cell: (props: PCell<'name'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    sortable: true,
    filterable: true,
    Header: <Header title="Description" showSortIcons={true} />,
    accessor: 'description',
    Cell: (props: PCell<'description'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 130,
    sortable: true,
    filterable: true,
    Header: <Header title="Status" showSortIcons={true} />,
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
    filterable: true,
    Header: <Header title="Product Type" showSortIcons={true} />,
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
    filterable: true,
    Header: <Header title="Scheme" showSortIcons={true} />,
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
    filterable: true,
    Header: <Header title="Currency code" showSortIcons={true} />,
    accessor: 'currencyCode',
    Cell: (props: PCell<'currencyCode'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    sortable: true,
    filterable: true,
    Header: <Header title="History Retention Number of Days" showSortIcons={true} />,
    accessor: 'historyRetentionNumberOfDay',
    Cell: (props: PCell<'historyRetentionNumberOfDay'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    sortable: true,
    filterable: true,
    Header: <Header title="Default Statement Cycle ID" showSortIcons={true} />,
    accessor: 'defaultStatementCycleId',
    Cell: (props: PCell<'defaultStatementCycleId'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 95,
    sortable: true,
    Header: <Header title="Locked" showSortIcons={true} />,
    accessor: 'lockedFlag',
    Cell: renderCheckBoxIcon(),
  },
];
