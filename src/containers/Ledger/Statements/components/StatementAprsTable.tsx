import React from 'react';
import { ImmutableArray } from 'seamless-immutable';

import { Table, TableCell, TableHeader } from 'components';
import { IStatementApr } from 'store';
import { ITableCell } from 'types';

type TCell<T extends keyof IStatementApr> = ITableCell<IStatementApr[T]>;

export const tableColumns = [
  {
    maxWidth: 150,
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
    maxWidth: 200,
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
    maxWidth: 150,
    Header: <TableHeader title="Rate" />,
    accessor: 'rate',
    Cell: (props: TCell<'rate'>) => (
      <TableCell
        value={props.value}
        isSmaller={true}
        isNumber={true}
      />
    ),
  },
];

interface IStatementAprsTable {
  data: ImmutableArray<IStatementApr>;
}

const StatementAprsTable: React.FC<IStatementAprsTable> = ({ data }) => {
  return (
    <Table
      columns={tableColumns}
      data={data}
      isSmaller={true}
      pageSize={7}
    />
  );
};

export default StatementAprsTable;
