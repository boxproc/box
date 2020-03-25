import React from 'react';
import { ImmutableArray } from 'seamless-immutable';

import { Box } from '@rebass/grid';

import { Table, TableCell, TableHeader } from 'components';
import { IllustrationProductTransactionsRevolvingCredit } from 'store';
import { ITableCellType } from 'types';

type TCell<T extends keyof IllustrationProductTransactionsRevolvingCredit> =
  ITableCellType<IllustrationProductTransactionsRevolvingCredit[T]>;

const columns = [
  {
    maxWidth: 80,
    accessor: 'transactionDatetime',
    Header: <TableHeader title="Transaction Date" />,
    Cell: (props: TCell<'transactionDatetime'>) => (
      <TableCell
        value={props.value}
        isDate={true}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 150,
    accessor: 'transactionType',
    Header: <TableHeader title="Transaction Type" />,
    Cell: (props: TCell<'transactionType'>) => (
      <TableCell
        value={props.value}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 50,
    accessor: 'debitCreditIndicator',
    Header: <TableHeader title="D/C" />,
    Cell: (props: TCell<'debitCreditIndicator'>) => (
      <TableCell
        value={props.value}
        isSmaller={true}
        onCenter={true}
      />
    ),
  },
  {
    maxWidth: 150,
    accessor: 'description',
    Header: <TableHeader title="Description" />,
    Cell: (props: TCell<'description'>) => (
      <TableCell
        value={props.value}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 125,
    accessor: 'amount',
    Header: <TableHeader title="Amount" />,
    Cell: (props: TCell<'amount'>) => (
      <TableCell
        value={props.value}
        isDecimalNumber={true}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 125,
    accessor: 'balanceSettledBefore',
    Header: <TableHeader title="Balance Settled Before" />,
    Cell: (props: TCell<'balanceSettledBefore'>) => (
      <TableCell
        value={props.value}
        isDecimalNumber={true}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 125,
    accessor: 'balanceAvailableBefore',
    Header: <TableHeader title="Balance Available Before" />,
    Cell: (props: TCell<'balanceAvailableBefore'>) => (
      <TableCell
        value={props.value}
        isDecimalNumber={true}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 125,
    accessor: 'balanceSettledAfter',
    Header: <TableHeader title="Balance Settled After" />,
    Cell: (props: TCell<'balanceSettledAfter'>) => (
      <TableCell
        value={props.value}
        isDecimalNumber={true}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 125,
    accessor: 'balanceAvailableAfter',
    Header: <TableHeader title="Balance Available After" />,
    Cell: (props: TCell<'balanceAvailableAfter'>) => (
      <TableCell
        value={props.value}
        isDecimalNumber={true}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 80,
    accessor: 'aprRate',
    Header: <TableHeader title="Rate %" />,
    Cell: (props: TCell<'aprRate'>) => (
      <TableCell
        value={props.value}
        isDecimalNumber={true}
        isSmaller={true}
      />
    ),
  },
];

interface TransactionsTableProps {
  data: ImmutableArray<IllustrationProductTransactionsRevolvingCredit>;
}

const TransactionsTable: React.FC<TransactionsTableProps> = ({ data }) => {
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

export default TransactionsTable;
