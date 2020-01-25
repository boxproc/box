import React from 'react';

import { Box } from '@rebass/grid';

import { Table, TableCell, TableHeader } from 'components';
import { IllustrationProductTransactionsRevolvingCredit } from 'store/domains';
import { TableCellType } from 'types';

type TCell<T extends keyof IllustrationProductTransactionsRevolvingCredit> =
  TableCellType<IllustrationProductTransactionsRevolvingCredit[T]>;

const columns = [
  {
    maxWidth: 125,
    sortable: true,
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
    sortable: true,
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
    maxWidth: 60,
    sortable: true,
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
    maxWidth: 125,
    sortable: true,
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
    sortable: true,
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
    sortable: true,
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
    sortable: true,
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
    sortable: true,
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
    sortable: true,
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
    maxWidth: 100,
    sortable: true,
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
  data: Array<IllustrationProductTransactionsRevolvingCredit>;
}

const TransactionsTable: React.FC<TransactionsTableProps> = ({
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

export default TransactionsTable;
