import React from 'react';

import { TableCell, TableHeader } from 'components';

import { LedgerStatementItemPrepared } from 'store/domains';

import { TableCellType } from 'types';

type TCell<T extends keyof LedgerStatementItemPrepared> =
  TableCellType<LedgerStatementItemPrepared[T]>;

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
    Header: <TableHeader title="Product Name" />,
    accessor: 'productName',
    Cell: (props: TCell<'productName'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 150,
    sortable: true,
    Header: <TableHeader title="Account ID" />,
    accessor: 'accountId',
    Cell: (props: TCell<'accountId'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 150,
    sortable: true,
    Header: <TableHeader title="Account Alias" />,
    accessor: 'accountAlias',
    Cell: (props: TCell<'accountAlias'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 200,
    sortable: true,
    Header: <TableHeader title="First Name" />,
    accessor: 'firstName',
    Cell: (props: TCell<'firstName'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 200,
    sortable: true,
    Header: <TableHeader title="Last Name" />,
    accessor: 'lastName',
    Cell: (props: TCell<'lastName'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 100,
    sortable: true,
    Header: <TableHeader title="First Transaction ID" />,
    accessor: 'firstTransactionId',
    Cell: (props: TCell<'firstTransactionId'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 100,
    sortable: true,
    Header: <TableHeader title="Last Transaction ID" />,
    accessor: 'lastTransactionId',
    Cell: (props: TCell<'lastTransactionId'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 200,
    sortable: true,
    Header: <TableHeader title="Statement Date" />,
    accessor: 'statementDate',
    Cell: (props: TCell<'statementDate'>) => (
      <TableCell
        value={props.value}
        isDate={true}
      />
    ),
  },
  {
    maxWidth: 150,
    sortable: true,
    Header: <TableHeader title="Balance Open" />,
    accessor: 'balanceOpen',
    Cell: (props: TCell<'balanceOpen'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 150,
    sortable: true,
    Header: <TableHeader title="Balance Close" />,
    accessor: 'balanceClose',
    Cell: (props: TCell<'balanceClose'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 150,
    sortable: true,
    Header: <TableHeader title="Minimum Amount Due Repayment" />,
    accessor: 'minimumAmountDueRepayment',
    Cell: (props: TCell<'minimumAmountDueRepayment'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 150,
    sortable: true,
    Header: <TableHeader title="Statement Cycle" />,
    accessor: 'statementCycle',
    Cell: (props: TCell<'statementCycleName'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 150,
    sortable: true,
    Header: <TableHeader title="Cycle Execution History" />,
    accessor: 'cycleExecutionHistoryId',
    Cell: (props: TCell<'cycleExecutionHistoryId'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
      />
    ),
  },
];
