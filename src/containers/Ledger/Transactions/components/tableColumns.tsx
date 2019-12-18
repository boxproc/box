import React from 'react';

import { TableCell, TableHeader } from 'components';

import { LedgerTransactionItemPrepared } from 'store/domains';

import { TableCellType } from 'types';

type TCell<T extends keyof LedgerTransactionItemPrepared> =
  TableCellType<LedgerTransactionItemPrepared[T]>;

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
    maxWidth: 100,
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
    maxWidth: 100,
    sortable: true,
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
    sortable: true,
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
    sortable: true,
    Header: <TableHeader title="Transaction" />,
    accessor: 'transactionTypeDescription',
    Cell: (props: TCell<'transactionTypeDescription'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 60,
    sortable: true,
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
    sortable: true,
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
    maxWidth: 65,
    sortable: true,
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
    sortable: true,
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
    sortable: true,
    Header: <TableHeader title="Description" />,
    accessor: 'description',
    Cell: (props: TCell<'description'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 120,
    sortable: true,
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
    maxWidth: 120,
    sortable: true,
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
    maxWidth: 120,
    sortable: true,
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
    maxWidth: 60,
    sortable: true,
    Header: <TableHeader title="Status" />,
    accessor: 'status',
    Cell: (props: TCell<'status'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
];
