import React from 'react';

import { Cell, Header } from 'components/Table';

import { LedgerTransactionItemPrepared } from 'store/domains';

import { TableCell } from 'types';

type TCell<T extends keyof LedgerTransactionItemPrepared> =
  TableCell<LedgerTransactionItemPrepared[T]>;

export const tableColumns = [
  {
    maxWidth: 100,
    sortable: true,
    filterable: true,
    Header: <Header title="ID" showSortIcons={true} />,
    accessor: 'id',
    Cell: (props: TCell<'id'>) => (
      <Cell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 120,
    sortable: true,
    filterable: true,
    Header: <Header title="Account ID" showSortIcons={true} />,
    accessor: 'accountId',
    Cell: (props: TCell<'accountId'>) => (
      <Cell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    sortable: true,
    filterable: true,
    Header: <Header title="Transaction Datetime" showSortIcons={true} />,
    accessor: 'transactionDatetime',
    Cell: (props: TCell<'transactionDatetime'>) => (
      <Cell
        value={props.value}
        isDate={true}
      />
    ),
  },
  {
    sortable: true,
    filterable: true,
    Header: <Header title="Transaction" showSortIcons={true} />,
    accessor: 'transactionTypeDescription',
    Cell: (props: TCell<'transactionTypeDescription'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 100,
    sortable: true,
    filterable: true,
    Header: <Header title="D/C" showSortIcons={true} />,
    accessor: 'debitCreditIndicator',
    Cell: (props: TCell<'debitCreditIndicator'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    sortable: true,
    filterable: true,
    Header: <Header title="Amount" showSortIcons={true} />,
    accessor: 'amount',
    Cell: (props: TCell<'amount'>) => (
      <Cell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    sortable: true,
    filterable: true,
    Header: <Header title="Amount in Original Currency" showSortIcons={true} />,
    accessor: 'amountInOriginalCurrency',
    Cell: (props: TCell<'amountInOriginalCurrency'>) => (
      <Cell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    sortable: true,
    filterable: true,
    Header: <Header title="Description" showSortIcons={true} />,
    accessor: 'description',
    Cell: (props: TCell<'description'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
  {
    sortable: true,
    filterable: true,
    Header: <Header title="Currency" showSortIcons={true} />,
    accessor: 'originalCurrency',
    Cell: (props: TCell<'originalCurrency'>) => (
      <Cell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    sortable: true,
    filterable: true,
    Header: <Header title="Conversion Rate" showSortIcons={true} />,
    accessor: 'cardConversionRate',
    Cell: (props: TCell<'cardConversionRate'>) => (
      <Cell
        value={props.value}
      />
    ),
  },
];
