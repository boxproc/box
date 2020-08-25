import React from 'react';
import { CellInfo } from 'react-table';
import { ImmutableArray } from 'seamless-immutable';

import { Flex } from '@rebass/grid';

import { Button, Table, TableCell, TableHeader } from 'components';
import { IStatementApr, THandleGetStatementAprLogs } from 'store';
import { ITableCell } from 'types';

type TCell<T extends keyof IStatementApr> = ITableCell<IStatementApr[T]>;

interface IStatementAprsTable {
  data: ImmutableArray<IStatementApr>;
  getStatementAprLogs: THandleGetStatementAprLogs;
  isStatementAprLogsLoading: boolean;
}

const StatementAprsTable: React.FC<IStatementAprsTable> = ({
  data,
  getStatementAprLogs,
  isStatementAprLogsLoading,
}) => {
  const columns = React.useMemo(
    () => [
      {
        maxWidth: 100,
        Header: <TableHeader title="Product APR ID" />,
        accessor: 'productAprId',
        Cell: (props: TCell<'productAprId'>) => (
          <TableCell
            value={props.value}
            isSmaller={true}
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
            isSmaller={true}
            isNumber={true}
          />
        ),
      },
      {
        maxWidth: 500,
        Header: <TableHeader title="Description" />,
        accessor: 'description',
        Cell: (props: TCell<'description'>) => (
          <TableCell
            value={props.value}
            isSmaller={true}
          />
        ),
      },
      {
        maxWidth: 100,
        Header: <TableHeader title="Rate %" />,
        accessor: 'rate',
        Cell: (props: TCell<'rate'>) => (
          <TableCell
            value={props.value}
            isSmaller={true}
            isNumber={true}
          />
        ),
      },
      {
        maxWidth: 130,
        accessor: 'showBreakdown',
        Cell: (cellInfo: CellInfo) => (
          <Flex alignItems="flex-start" p="7px 5px">
            <Button
              text="Show breakdown"
              size="10"
              disabled={isStatementAprLogsLoading}
              onClick={() => getStatementAprLogs({
                statementId: cellInfo.original.statementId,
                productAprId: cellInfo.original.productAprId,
              })}
            />
          </Flex>
        ),
      },
    ],
    [getStatementAprLogs, isStatementAprLogsLoading]
  );

  return (
    <Table
      columns={columns}
      data={data}
      isSmaller={true}
      pageSize={7}
    />
  );
};

export default StatementAprsTable;
