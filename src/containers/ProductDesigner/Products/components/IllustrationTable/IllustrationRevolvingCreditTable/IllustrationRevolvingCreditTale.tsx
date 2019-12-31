import React from 'react';

import { Box } from '@rebass/grid';

import { Table, TableCell, TableHeader } from 'components';
import { IllustrationProductStatementsRevolvingCredit } from 'store/domains';
import { TableCellType } from 'types';

type TCell<T extends keyof IllustrationProductStatementsRevolvingCredit> =
TableCellType<IllustrationProductStatementsRevolvingCredit[T]>;

interface IllustrationRevolvingCreditTableProps {
  statementsIllustration: Array<IllustrationProductStatementsRevolvingCredit>;
}

const IllustrationLoanTable: React.FC<IllustrationRevolvingCreditTableProps> = ({
  statementsIllustration = [],
}) => {
  const [screenHeight, setScreenHeight] = React.useState(window.innerHeight);

  // update screen height for setting various number of table rows per page
  const updateWindowHeight = () => setScreenHeight(window.innerHeight);

  React.useEffect(
    () => {
      window.addEventListener('resize', updateWindowHeight);
      return () => window.removeEventListener('resize', updateWindowHeight);
    }
  );

  const tablePagesCount = React.useMemo(
    () => screenHeight < 650 ? 8
      : screenHeight < 850 ? 10
        : screenHeight < 950 ? 12 : 15,
    [screenHeight]
  );

  const columns = [
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
      Header: <TableHeader title="Due Repayent" />,
      Cell: (props: TCell<'minimumAmountDueRepayment'>) => (
        <TableCell
          value={props.value}
          isNumber={true}
        />
      ),
    },
  ];

  return (
    <Box pb="10px">
      <Table
        data={statementsIllustration}
        columns={columns}
        pageSize={tablePagesCount}
        isSmaller={true}
        isScrollbar={false}
      />
    </Box>
  );
};

export default IllustrationLoanTable;
