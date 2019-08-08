import React from 'react';

import { Cell, Header } from 'components/Table';

import { TableCell } from 'types';

interface LedgerAccountItem {
  id: string;
  institutionId: number;
  accountAlias: string;
  customerId: number;
  customerFirstName: string;
  customerLastName: string;
  productType: string;
  status: string;
  balanceSettled: number;
  balanceAvailable: number;
  amountDueRepayment: number;
  balanceLimit: number;
  balanceLimitShared: number;
  accruedInterest: number;
}

type ACell<T extends keyof LedgerAccountItem> = TableCell<LedgerAccountItem[T]>;

export const tableColumns = [
  {
    maxWidth: 70,
    sortable: true,
    filterable: true,
    Header: <Header title="ID" showSortIcons={true} />,
    accessor: 'id',
    Cell: (props: ACell<'id'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    sortable: true,
    filterable: true,
    Header: <Header title="Institution" showSortIcons={true} />,
    accessor: 'institutionId',
    Cell: (props: ACell<'institutionId'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    sortable: true,
    filterable: true,
    Header: <Header title="Account Alias" showSortIcons={true} />,
    accessor: 'accountAlias',
    Cell: (props: ACell<'accountAlias'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    sortable: true,
    filterable: true,
    Header: <Header title="Customer ID" showSortIcons={true} />,
    accessor: 'customerId',
    Cell: (props: ACell<'customerId'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    sortable: true,
    filterable: true,
    Header: <Header title="Customer First Name" showSortIcons={true} />,
    accessor: 'customerFirstName',
    Cell: (props: ACell<'customerFirstName'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    sortable: true,
    filterable: true,
    Header: <Header title="Customer Last Name" showSortIcons={true} />,
    accessor: 'customerLastName',
    Cell: (props: ACell<'customerLastName'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    sortable: true,
    filterable: true,
    Header: <Header title="Product Name" showSortIcons={true} />,
    accessor: 'productType',
    Cell: (props: ACell<'productType'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    sortable: true,
    filterable: true,
    Header: <Header title="Status" showSortIcons={true} />,
    accessor: 'status',
    Cell: (props: ACell<'status'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    sortable: true,
    filterable: true,
    Header: <Header title="Balance Settled" showSortIcons={true} />,
    accessor: 'balanceSettled',
    Cell: (props: ACell<'balanceSettled'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    sortable: true,
    filterable: true,
    Header: <Header title="Balance Available" showSortIcons={true} />,
    accessor: 'balanceAvailable',
    Cell: (props: ACell<'balanceAvailable'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    sortable: true,
    filterable: true,
    Header: <Header title="Amount Due Repayment" showSortIcons={true} />,
    accessor: 'amountDueRepayment',
    Cell: (props: ACell<'amountDueRepayment'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    sortable: true,
    filterable: true,
    Header: <Header title="Balance Limit" showSortIcons={true} />,
    accessor: 'balanceLimit',
    Cell: (props: ACell<'balanceLimit'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    sortable: true,
    filterable: true,
    Header: <Header title="Balance Limit Shared" showSortIcons={true} />,
    accessor: 'balanceLimitShared',
    Cell: (props: ACell<'balanceLimitShared'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    sortable: true,
    filterable: true,
    Header: <Header title="Accrued Interest" showSortIcons={true} />,
    accessor: 'accruedInterest',
    Cell: (props: ACell<'accruedInterest'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
];
