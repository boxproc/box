import React from 'react';

import { ProductImages, renderCheckBoxTableCell, TableCell, TableHeader } from 'components';

import { IAccount } from 'store';

import { ITableCell } from 'types';

type TCell<T extends keyof IAccount> = ITableCell<IAccount[T]>;

export const tableColumns = [
  {
    maxWidth: 80,
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
    maxWidth: 150,
    Header: <TableHeader title="Institution" />,
    accessor: 'institutionId',
    Cell: (props: TCell<'institutionId'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 300,
    minWidth: 150,
    Header: <TableHeader title="Product Name" />,
    accessor: 'product',
    Cell: (props: TCell<'product'>) => (
      <TableCell
        value={props.value}
        Icon={ProductImages[props.original.productType]}
      />
    ),
  },
  {
    maxWidth: 60,
    Header: <TableHeader title="Product Override" />,
    accessor: 'productOverrideFlag',
    Cell: renderCheckBoxTableCell(),
  },
  {
    maxWidth: 150,
    Header: <TableHeader title="Account Alias" />,
    accessor: 'accountAlias',
    Cell: (props: TCell<'accountAlias'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 80,
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
    Header: <TableHeader title="Balance Authorised" />,
    accessor: 'balanceAuthorised',
    Cell: (props: TCell<'balanceAuthorised'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 150,
    Header: <TableHeader title="Amount Due Repayment" />,
    accessor: 'repaymentAmountDue',
    Cell: (props: TCell<'repaymentAmountDue'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 150,
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
