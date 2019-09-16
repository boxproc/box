import React from 'react';

import { TableCell, TableHeader } from 'components';

import { TableCellType } from 'types';

interface TableColumnsProps {
  id: number;
  accountId: number;
  dateFrom: string;
  dateTo: string;
  balanceOpen: number;
  balanceClose: number;
  minimumAmountDueRepayment: number;
  statementCycleId: number;
  cycleExecutionHistoryId: number;
  accountAlias: number;
  institution: string;
  product: string;
  firstName: string;
  lastName: string;
}

type TCell<T extends keyof TableColumnsProps> = TableCellType<TableColumnsProps[T]>;

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
    accessor: 'institution',
    Cell: (props: TCell<'institution'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 200,
    sortable: true,
    Header: <TableHeader title="Product name" />,
    accessor: 'product',
    Cell: (props: TCell<'product'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 150,
    sortable: true,
    Header: <TableHeader title="Account" />,
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
    Header: <TableHeader title="First name" />,
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
    Header: <TableHeader title="Last name" />,
    accessor: 'lastName',
    Cell: (props: TCell<'lastName'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 200,
    sortable: true,
    Header: <TableHeader title="Date from" />,
    accessor: 'dateFrom',
    Cell: (props: TCell<'dateFrom'>) => (
      <TableCell
        value={props.value}
        isDate={true}
      />
    ),
  },
  {
    maxWidth: 200,
    sortable: true,
    Header: <TableHeader title="Date to" />,
    accessor: 'dateTo',
    Cell: (props: TCell<'dateTo'>) => (
      <TableCell
        value={props.value}
        isDate={true}
      />
    ),
  },
  {
    maxWidth: 150,
    sortable: true,
    Header: <TableHeader title="Balance open" />,
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
    Header: <TableHeader title="Balance close" />,
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
    Header: <TableHeader title="Minimum amount due repayment" />,
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
    Header: <TableHeader title="Statement cycle" />,
    accessor: 'statementCycleId',
    Cell: (props: TCell<'statementCycleId'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 150,
    sortable: true,
    Header: <TableHeader title="Cycle execution history" />,
    accessor: 'cycleExecutionHistoryId',
    Cell: (props: TCell<'cycleExecutionHistoryId'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
      />
    ),
  },
];
