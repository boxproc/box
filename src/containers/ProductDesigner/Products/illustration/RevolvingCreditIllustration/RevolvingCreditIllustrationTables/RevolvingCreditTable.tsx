import React from 'react';
import { ImmutableArray } from 'seamless-immutable';

import { Box } from '@rebass/grid';

import { Table, TableCell, TableHeader } from 'components';
import { IRevCreditIllustrationStatement } from 'store';
import { ITableCell } from 'types';

type TCell<T extends keyof IRevCreditIllustrationStatement> =
  ITableCell<IRevCreditIllustrationStatement[T]>;

const columns = [
  {
    maxWidth: 80,
    accessor: 'startDate',
    Header: <TableHeader title="Start Date" />,
    Cell: (props: TCell<'startDate'>) => (
      <TableCell
        value={props.value}
        isDate={true}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 80,
    accessor: 'endDate',
    Header: <TableHeader title="End Date" />,
    Cell: (props: TCell<'endDate'>) => (
      <TableCell
        value={props.value}
        isDate={true}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 95,
    accessor: 'statementDate',
    Header: <TableHeader title="Statement Date" />,
    Cell: (props: TCell<'statementDate'>) => (
      <TableCell
        value={props.value}
        isDate={true}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 120,
    accessor: 'balanceOpen',
    Header: <TableHeader title="Balance Open" />,
    Cell: (props: TCell<'balanceOpen'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 120,
    accessor: 'balanceClose',
    Header: <TableHeader title="Balance Close" />,
    Cell: (props: TCell<'balanceClose'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 120,
    accessor: 'repaymentMinimumAmountDue',
    Header: <TableHeader title="Due Repayment" />,
    Cell: (props: TCell<'repaymentMinimumAmountDue'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 120,
    minWidth: 120,
    accessor: 'minimumRepayment',
    Header: <TableHeader title="Minimum Repayment" />,
    Cell: (props: TCell<'minimumRepayment'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
        isSmaller={true}
      />
    ),
  },
];

interface IRevolvingCreditTable {
  data: ImmutableArray<IRevCreditIllustrationStatement>;
}

const RevolvingCreditTable: React.FC<IRevolvingCreditTable> = ({ data }) => {
  return (
    <Box pb="10px">
      <Table
        data={data}
        columns={columns}
        isSmaller={true}
      />
    </Box>
  );
};

export default RevolvingCreditTable;
