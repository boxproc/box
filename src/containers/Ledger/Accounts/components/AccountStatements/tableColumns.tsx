import React from 'react';

import { TableCell, TableHeader } from 'components';

import { LedgerAccountStatementItemPrepared } from 'store/domains';

import { TableCellType } from 'types';

type TCell<T extends keyof LedgerAccountStatementItemPrepared> =
  TableCellType<LedgerAccountStatementItemPrepared[T]>;

export const tableColumns = [
  {
    maxWidth: 80,
    Header: <TableHeader title="Statement Date" />,
    accessor: 'statementDate',
    Cell: (props: TCell<'statementDate'>) => (
      <TableCell
        isDate={true}
        value={props.value}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 80,
    Header: <TableHeader title="First Transaction ID" />,
    accessor: 'firstTransactionId',
    Cell: (props: TCell<'firstTransactionId'>) => (
      <TableCell
        isNumber={true}
        value={props.value}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 80,
    Header: <TableHeader title="Last Transaction ID" />,
    accessor: 'lastTransactionId',
    Cell: (props: TCell<'lastTransactionId'>) => (
      <TableCell
        isNumber={true}
        value={props.value}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 100,
    Header: <TableHeader title="Balance Open" />,
    accessor: 'balanceOpen',
    Cell: (props: TCell<'balanceOpen'>) => (
      <TableCell
        isNumber={true}
        value={props.value}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 100,
    Header: <TableHeader title="Balance Close" />,
    accessor: 'balanceClose',
    Cell: (props: TCell<'balanceClose'>) => (
      <TableCell
        isNumber={true}
        value={props.value}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 100,
    Header: <TableHeader title="Minimum Amount Due Repayment" />,
    accessor: 'minimumAmountDueRepayment',
    Cell: (props: TCell<'minimumAmountDueRepayment'>) => (
      <TableCell
        isNumber={true}
        value={props.value}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 80,
    Header: <TableHeader title="Repayment Status" />,
    accessor: 'repaymentStatus',
    Cell: (props: TCell<'repaymentStatus'>) => (
      <TableCell
        value={props.value}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 80,
    Header: <TableHeader title="Date of Last Update" />,
    accessor: 'dateOfLastUpdate',
    Cell: (props: TCell<'dateOfLastUpdate'>) => (
      <TableCell
        isDate={true}
        value={props.value}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 100,
    Header: <TableHeader title="Accrued Interest Total" />,
    accessor: 'accruedInterestTotal',
    Cell: (props: TCell<'accruedInterestTotal'>) => (
      <TableCell
        isNumber={true}
        value={props.value}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 100,
    Header: <TableHeader title="Accrued Fee Total" />,
    accessor: 'accruedFeeTotal',
    Cell: (props: TCell<'accruedFeeTotal'>) => (
      <TableCell
        isNumber={true}
        value={props.value}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 100,
    Header: <TableHeader title="Accrued Reward Total" />,
    accessor: 'accruedRewardTotal',
    Cell: (props: TCell<'accruedRewardTotal'>) => (
      <TableCell
        isNumber={true}
        value={props.value}
        isSmaller={true}
      />
    ),
  },
];
