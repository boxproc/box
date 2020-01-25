import React from 'react';

import { Box } from '@rebass/grid';

import { Table, TableCell, TableHeader, withSpinner } from 'components';

import { IllustrationProductLoan } from 'store/domains';

import { TableCellType } from 'types';

type TCell<T extends keyof IllustrationProductLoan> = TableCellType<IllustrationProductLoan[T]>;

const columns = [
  {
    maxWidth: 100,
    sortable: true,
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
    maxWidth: 120,
    sortable: true,
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
    maxWidth: 120,
    sortable: true,
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
    maxWidth: 120,
    sortable: true,
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
    sortable: true,
    accessor: 'installmentBalance',
    Header: <TableHeader title="Statement Balance" />,
    Cell: (props: TCell<'installmentBalance'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 150,
    sortable: true,
    accessor: 'apr',
    Header: <TableHeader title="Accrued Interest" />,
    Cell: (props: TCell<'apr'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 150,
    sortable: true,
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
    sortable: true,
    accessor: 'minimumAmountDueRepayment',
    Header: <TableHeader title="Payment Due" />,
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
  data: Array<IllustrationProductLoan>;
}

const IllustrationLoanTable: React.FC<IllustrationLoanTableProps> = ({
  data,
}) => {
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
