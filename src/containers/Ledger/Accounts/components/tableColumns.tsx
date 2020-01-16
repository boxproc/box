import React from 'react';

import { renderCheckBoxTableCell, TableCell, TableHeader } from 'components';

import { LedgerAccountItemPrepared } from 'store/domains';

import { TableCellType } from 'types';
import { renderProductIcon } from 'utils/renderProductIcon';

type TCell<T extends keyof LedgerAccountItemPrepared> = TableCellType<LedgerAccountItemPrepared[T]>;

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
    maxWidth: 130,
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
    maxWidth: 220,
    sortable: true,
    Header: <TableHeader title="Product Name" />,
    accessor: 'product',
    Cell: (props: TCell<'product'>) => (
      <TableCell
        value={props.value}
        Icon={renderProductIcon(props.original.productType)}
      />
    ),
  },
  {
    maxWidth: 80,
    sortable: true,
    Header: <TableHeader title="Product Override" />,
    accessor: 'productOverrideFlag',
    Cell: renderCheckBoxTableCell(),
  },
  {
    maxWidth: 200,
    sortable: true,
    Header: <TableHeader title="Account Alias" />,
    accessor: 'accountAlias',
    Cell: (props: TCell<'accountAlias'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 200,
    sortable: true,
    Header: <TableHeader title="Customer ID" />,
    accessor: 'customerId',
    Cell: (props: TCell<'customerId'>) => (
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
    maxWidth: 80,
    sortable: true,
    Header: <TableHeader title="Status" />,
    accessor: 'status',
    Cell: (props: TCell<'status'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 150,
    sortable: true,
    Header: <TableHeader title="Balance Settled" />,
    accessor: 'balanceSettled',
    Cell: (props: TCell<'balanceSettled'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 150,
    sortable: true,
    Header: <TableHeader title="Balance Available" />,
    accessor: 'balanceAvailable',
    Cell: (props: TCell<'balanceAvailable'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 150,
    sortable: true,
    Header: <TableHeader title="Amount Due Repayment" />,
    accessor: 'amountDueRepayment',
    Cell: (props: TCell<'amountDueRepayment'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 150,
    sortable: true,
    Header: <TableHeader title="Balance Limit" />,
    accessor: 'balanceLimit',
    Cell: (props: TCell<'balanceLimit'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 150,
    sortable: true,
    Header: <TableHeader title="Balance Limit Shared" />,
    accessor: 'balanceLimitShared',
    Cell: (props: TCell<'balanceLimitShared'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 150,
    sortable: true,
    Header: <TableHeader title="Accrued Interest" />,
    accessor: 'accruedInterest',
    Cell: (props: TCell<'accruedInterest'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
      />
    ),
  },
];
