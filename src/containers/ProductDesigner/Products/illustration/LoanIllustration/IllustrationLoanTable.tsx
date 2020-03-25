import React from 'react';
import { ImmutableArray } from 'seamless-immutable';

import { Box } from '@rebass/grid';

import { Table, TableCell, TableHeader, withSpinner } from 'components';

import { IllustrationProductLoan } from 'store';

import { ITableCellType } from 'types';

type TCell<T extends keyof IllustrationProductLoan> = ITableCellType<IllustrationProductLoan[T]>;

const columns = [
  {
    maxWidth: 100,
    accessor: 'statementId',
    Header: <TableHeader title="Statement ID" />,
    Cell: (props: TCell<'statementId'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 100,
    accessor: 'startDate',
    Header: <TableHeader title="Start Date" />,
    Cell: (props: TCell<'startDate'>) => (
      <TableCell
        value={props.value}
        isDate={true}
      />
    ),
  },
  {
    maxWidth: 100,
    accessor: 'endDate',
    Header: <TableHeader title="End Date" />,
    Cell: (props: TCell<'endDate'>) => (
      <TableCell
        value={props.value}
        isDate={true}
      />
    ),
  },
  {
    maxWidth: 100,
    accessor: 'statementDate',
    Header: <TableHeader title="Statement Date" />,
    Cell: (props: TCell<'statementDate'>) => (
      <TableCell
        value={props.value}
        isDate={true}
      />
    ),
  },
  {
    maxWidth: 150,
    accessor: 'installmentBalance',
    Header: <TableHeader title="Principal" />,
    Cell: (props: TCell<'installmentBalance'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 150,
    accessor: 'apr',
    Header: <TableHeader title="Interest" />,
    Cell: (props: TCell<'apr'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 150,
    accessor: 'fee',
    Header: <TableHeader title="Fees" />,
    Cell: (props: TCell<'fee'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 150,
    accessor: 'repaymentMinimumAmountDue',
    Header: <TableHeader title="Payment Due" />,
    Cell: (props: TCell<'repaymentMinimumAmountDue'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 150,
    accessor: 'amount',
    Header: <TableHeader title="Balance to Repay" />,
    Cell: (props: TCell<'amount'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
      />
    ),
  },
];

interface IllustrationLoanTableProps {
  data: ImmutableArray<IllustrationProductLoan>;
}

const IllustrationLoanTable: React.FC<IllustrationLoanTableProps> = ({ data }) => {
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

export default withSpinner()(IllustrationLoanTable);
