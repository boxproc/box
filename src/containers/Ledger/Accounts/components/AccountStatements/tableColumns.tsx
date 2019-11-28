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
    maxWidth: 80,
    Header: <TableHeader title="Product APR ID" />,
    accessor: 'productAprId',
    Cell: (props: TCell<'productAprId'>) => (
      <TableCell
        isNumber={true}
        value={props.value}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 100,
    Header: <TableHeader title="Accrued Interest" />,
    accessor: 'accruedInterest',
    Cell: (props: TCell<'accruedInterest'>) => (
      <TableCell
        isNumber={true}
        value={props.value}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 80,
    Header: <TableHeader title="Product Fee ID" />,
    accessor: 'productFeeId',
    Cell: (props: TCell<'productFeeId'>) => (
      <TableCell
        isNumber={true}
        value={props.value}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 100,
    Header: <TableHeader title="Accrued Fee" />,
    accessor: 'accruedFee',
    Cell: (props: TCell<'accruedFee'>) => (
      <TableCell
        isNumber={true}
        value={props.value}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 80,
    Header: <TableHeader title="Product Reward ID" />,
    accessor: 'productRewardId',
    Cell: (props: TCell<'productRewardId'>) => (
      <TableCell
        isNumber={true}
        value={props.value}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 100,
    Header: <TableHeader title="Accrued Reward" />,
    accessor: 'accruedReward',
    Cell: (props: TCell<'accruedReward'>) => (
      <TableCell
        isNumber={true}
        value={props.value}
        isSmaller={true}
      />
    ),
  },
];
