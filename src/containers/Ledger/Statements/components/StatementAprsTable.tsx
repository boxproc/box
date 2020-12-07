import React from 'react';
import { ImmutableArray } from 'seamless-immutable';

import { renderCheckBoxTableCell, Table, TableCell, TableHeader } from 'components';
import { IStatementApr } from 'store';
import { ITableCell } from 'types';

type TCell<T extends keyof IStatementApr> = ITableCell<IStatementApr[T]>;

interface IStatementAprsTable {
  data: ImmutableArray<IStatementApr>;
}

const StatementAprsTable: React.FC<IStatementAprsTable> = ({
  data,
}) => {
  const columns = React.useMemo(
    () => [
      {
        maxWidth: 90,
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
        maxWidth: 100,
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
        maxWidth: 60,
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
        maxWidth: 100,
        Header: <TableHeader title="Statement Principal" />,
        accessor: 'statementPrincipal',
        Cell: (props: TCell<'statementPrincipal'>) => (
          <TableCell
            value={props.value}
            isSmaller={true}
            isNumber={true}
          />
        ),
      },
      {
        maxWidth: 100,
        Header: <TableHeader title="Previous Statement Unpaid Principal" />,
        accessor: 'prevStmntUnpaidPrincipal',
        Cell: (props: TCell<'prevStmntUnpaidPrincipal'>) => (
          <TableCell
            value={props.value}
            isSmaller={true}
            isNumber={true}
          />
        ),
      },
      {
        maxWidth: 90,
        Header: <TableHeader title="Interest Calc Start Date" />,
        accessor: 'interestCalcStartDate',
        Cell: (props: TCell<'interestCalcStartDate'>) => (
          <TableCell
            value={props.value}
            isSmaller={true}
            isDate={true}
          />
        ),
      },
      {
        maxWidth: 90,
        Header: <TableHeader title="Repayment Date" />,
        accessor: 'repaymentDate',
        Cell: (props: TCell<'repaymentDate'>) => (
          <TableCell
            value={props.value}
            isSmaller={true}
            isDate={true}
          />
        ),
      },
      {
        maxWidth: 60,
        Header: <TableHeader title="Repaid Flag" />,
        accessor: 'repaidFlag',
        Cell: renderCheckBoxTableCell(),
      },
    ],
    []
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
