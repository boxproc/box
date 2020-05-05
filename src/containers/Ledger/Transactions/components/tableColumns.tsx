import React from 'react';

import { TableCell, TableHeader } from 'components';

import { ITransaction } from 'store';

import { ITableCell } from 'types';

type TCell<T extends keyof ITransaction> = ITableCell<ITransaction[T]>;

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
    maxWidth: 100,
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
    maxWidth: 100,
    Header: <TableHeader title="Card ID" />,
    accessor: 'cardId',
    Cell: (props: TCell<'cardId'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 200,
    Header: <TableHeader title="Transaction Datetime" />,
    accessor: 'transactionDatetime',
    Cell: (props: TCell<'transactionDatetime'>) => (
      <TableCell
        value={props.value}
        isDate={true}
      />
    ),
  },
  {
    maxWidth: 200,
    Header: <TableHeader title="Transaction" />,
    accessor: 'transactionTypeDescription',
    Cell: (props: TCell<'transactionTypeDescription'>) => (
      <TableCell
        value={props.value}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 50,
    Header: <TableHeader title="D/C" />,
    accessor: 'debitCreditIndicator',
    Cell: (props: TCell<'debitCreditIndicator'>) => (
      <TableCell
        value={props.value}
        onCenter={true}
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
      />
    ),
  },
  {
    maxWidth: 60,
    Header: <TableHeader title="Currency" />,
    accessor: 'originalCurrency',
    Cell: (props: TCell<'originalCurrency'>) => (
      <TableCell
        value={props.value}
        onCenter={true}
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
      />
    ),
  },
  {
    maxWidth: 80,
    Header: <TableHeader title="Fee Rate" />,
    accessor: 'feeRate',
    Cell: (props: TCell<'feeRate'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 80,
    Header: <TableHeader title="Reward Rate" />,
    accessor: 'rewardRate',
    Cell: (props: TCell<'rewardRate'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 80,
    Header: <TableHeader title="Status" />,
    accessor: 'status',
    Cell: (props: TCell<'status'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
];
