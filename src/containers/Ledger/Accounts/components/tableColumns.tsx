import React from 'react';

import { Cell, Header } from 'components/Table';

import { LedgerAccountItemPrepared } from 'store/domains';

import { TableCell } from 'types';

type ACell<T extends keyof LedgerAccountItemPrepared> =
  TableCell<LedgerAccountItemPrepared[T]>;

export const tableColumns = [
  {
    maxWidth: 100,
    sortable: true,
    Header: <Header title="ID" />,
    accessor: 'id',
    Cell: (props: ACell<'id'>) => (
      <Cell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 200,
    sortable: true,
    Header: <Header title="Institution" />,
    accessor: 'institutionId',
    Cell: (props: ACell<'institutionId'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 300,
    sortable: true,
    Header: <Header title="Product Name" />,
    accessor: 'productName',
    Cell: (props: ACell<'productName'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 200,
    sortable: true,
    Header: <Header title="Account Alias" />,
    accessor: 'accountAlias',
    Cell: (props: ACell<'accountAlias'>) => (
      <Cell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 200,
    sortable: true,
    Header: <Header title="Customer ID" />,
    accessor: 'customerId',
    Cell: (props: ACell<'customerId'>) => (
      <Cell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 200,
    sortable: true,
    Header: <Header title="First Name" />,
    accessor: 'customerFirstName',
    Cell: (props: ACell<'customerFirstName'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 200,
    sortable: true,
    Header: <Header title="Last Name" />,
    accessor: 'customerLastName',
    Cell: (props: ACell<'customerLastName'>) => (
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
    Cell: (props: ACell<'status'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 150,
    sortable: true,
    Header: <Header title="Balance Settled" />,
    accessor: 'balanceSettled',
    Cell: (props: ACell<'balanceSettled'>) => (
      <Cell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 150,
    sortable: true,
    Header: <Header title="Balance Available" />,
    accessor: 'balanceAvailable',
    Cell: (props: ACell<'balanceAvailable'>) => (
      <Cell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 150,
    sortable: true,
    Header: <Header title="Amount Due Repayment" />,
    accessor: 'amountDueRepayment',
    Cell: (props: ACell<'amountDueRepayment'>) => (
      <Cell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 150,
    sortable: true,
    Header: <Header title="Balance Limit" />,
    accessor: 'balanceLimit',
    Cell: (props: ACell<'balanceLimit'>) => (
      <Cell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 150,
    sortable: true,
    Header: <Header title="Balance Limit Shared" />,
    accessor: 'balanceLimitShared',
    Cell: (props: ACell<'balanceLimitShared'>) => (
      <Cell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 150,
    sortable: true,
    Header: <Header title="Accrued Interest" />,
    accessor: 'accruedInterest',
    Cell: (props: ACell<'accruedInterest'>) => (
      <Cell
        value={props.value}
        isNumber={true}
      />
    ),
  },
];
