import React from 'react';

import { Box } from '@rebass/grid';

import { Table, TableCell, TableHeader } from 'components';
import { IllustrationProductStatementsRevolvingCredit } from 'store/domains';
import { TableCellType } from 'types';

type TCell<T extends keyof IllustrationProductStatementsRevolvingCredit> =
  TableCellType<IllustrationProductStatementsRevolvingCredit[T]>;

const columns = [
  {
    maxWidth: 125,
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
    maxWidth: 125,
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
    maxWidth: 125,
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
    maxWidth: 120,
    sortable: true,
    accessor: 'balanceOpen',
    Header: <TableHeader title="Balance Open" />,
    Cell: (props: TCell<'balanceOpen'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 120,
    sortable: true,
    accessor: 'balanceClose',
    Header: <TableHeader title="Balance Close" />,
    Cell: (props: TCell<'balanceClose'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 120,
    sortable: true,
    accessor: 'minimumAmountDueRepayment',
    Header: <TableHeader title="Due Repayment" />,
    Cell: (props: TCell<'minimumAmountDueRepayment'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
      />
    ),
  },
];

interface IllustrationRevolvingCreditTableProps {
  statementsIllustration: Array<IllustrationProductStatementsRevolvingCredit>;
}

const IllustrationLoanTable: React.FC<IllustrationRevolvingCreditTableProps> = ({
  statementsIllustration = [],
}) => {
  return (
    <Box pb="10px">
      <Table
        data={statementsIllustration}
        columns={columns}
        isSmaller={true}
      />
    </Box>
  );
};

export default IllustrationLoanTable;
