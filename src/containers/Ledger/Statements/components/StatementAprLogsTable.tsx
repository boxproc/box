import React from 'react';
import { ImmutableArray } from 'seamless-immutable';

import { Table, TableCell, TableHeader } from 'components';
import { IStatementAprLog } from 'store';
import { ITableCell } from 'types';

type TCell<T extends keyof IStatementAprLog> = ITableCell<IStatementAprLog[T]>;

interface IStatementAprLogTable {
  data: ImmutableArray<IStatementAprLog>;
}

const StatementAprLogTable: React.FC<IStatementAprLogTable> = ({
  data,
}) => {
  const columns = [
    {
      maxWidth: 120,
      Header: <TableHeader title="Statement ID" />,
      accessor: 'statementId',
      Cell: (props: TCell<'statementId'>) => (
        <TableCell
          value={props.value}
          isSmaller={true}
          isNumber={true}
        />
      ),
    },
    {
      maxWidth: 120,
      Header: <TableHeader title="Transaction ID" />,
      accessor: 'transactionId',
      Cell: (props: TCell<'transactionId'>) => (
        <TableCell
          value={props.value}
          isSmaller={true}
          isNumber={true}
        />
      ),
    },
    {
      maxWidth: 100,
      Header: <TableHeader title="Calculation Date" />,
      accessor: 'calculationDate',
      Cell: (props: TCell<'calculationDate'>) => (
        <TableCell
          value={props.value}
          isSmaller={true}
          isDate={true}
        />
      ),
    },
    {
      maxWidth: 210,
      Header: <TableHeader title="Interest" />,
      accessor: 'interest',
      Cell: (props: TCell<'interest'>) => (
        <TableCell
          value={props.value}
          isSmaller={true}
          isNumber={true}
        />
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      data={data}
      isSmaller={true}
      pageSize={7}
    />
  );
};

export default StatementAprLogTable;
