import React from 'react';

import { TableCell, TableHeader } from 'components';

import { LedgerStatementTransactionsItemPrepared } from 'store/domains';

import { TableCellType } from 'types';

type TCell<T extends keyof LedgerStatementTransactionsItemPrepared> =
  TableCellType<LedgerStatementTransactionsItemPrepared[T]>;

export const tableTransactionsColumns = [
  {
    maxWidth: 120,
    Header: <TableHeader title="Transaction Datetime" />,
    accessor: 'transactionDatetime',
    Cell: (props: TCell<'transactionDatetime'>) => (
      <TableCell
        value={props.value}
        isDate={true}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 120,
    Header: <TableHeader title="Amount" />,
    accessor: 'amount',
    Cell: (props: TCell<'amount'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 120,
    Header: <TableHeader title="Amount in Original Currency" />,
    accessor: 'amountInOriginalCurrency',
    Cell: (props: TCell<'amountInOriginalCurrency'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 120,
    Header: <TableHeader title="Balance Available Before" />,
    accessor: 'balanceAvailableBefore',
    Cell: (props: TCell<'balanceAvailableBefore'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 120,
    Header: <TableHeader title="Balance Available After" />,
    accessor: 'balanceAvailableAfter',
    Cell: (props: TCell<'balanceAvailableAfter'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 120,
    Header: <TableHeader title="Balance Settled Before" />,
    accessor: 'balanceSettledBefore',
    Cell: (props: TCell<'balanceSettledBefore'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 120,
    Header: <TableHeader title="Balance Settled After" />,
    accessor: 'balanceSettledAfter',
    Cell: (props: TCell<'balanceSettledAfter'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 200,
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
    maxWidth: 80,
    Header: <TableHeader title="APR Rate" />,
    accessor: 'aprRate',
    Cell: (props: TCell<'aprRate'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
        isSmaller={true}
      />
    ),
  },
];
