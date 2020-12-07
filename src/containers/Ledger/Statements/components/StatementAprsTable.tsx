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
  const columns = [
    {
      maxWidth: 60,
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
      maxWidth: 75,
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
      maxWidth: 75,
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
      Header: <TableHeader title="Always Charge Interest" />,
      accessor: 'alwaysChargeInterest',
      Cell: renderCheckBoxTableCell(),
    },
    {
      maxWidth: 60,
      Header: <TableHeader title="Repaid" />,
      accessor: 'repaidFlag',
      Cell: renderCheckBoxTableCell(),
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
      maxWidth: 100,
      Header: <TableHeader title="Previous Accrued Interest" />,
      accessor: 'prevAccruedInterest',
      Cell: (props: TCell<'prevAccruedInterest'>) => (
        <TableCell
          value={props.value}
          isSmaller={true}
          isNumber={true}
        />
      ),
    },
    {
      maxWidth: 100,
      Header: <TableHeader title="Outstanding Accrued Interest" />,
      accessor: 'outsdAccruedInterest',
      Cell: (props: TCell<'outsdAccruedInterest'>) => (
        <TableCell
          value={props.value}
          isSmaller={true}
          isNumber={true}
        />
      ),
    },
    {
      maxWidth: 100,
      Header: <TableHeader title="Accrued Interest Repaid" />,
      accessor: 'accruedInterestRepaid',
      Cell: (props: TCell<'accruedInterestRepaid'>) => (
        <TableCell
          value={props.value}
          isSmaller={true}
          isNumber={true}
        />
      ),
    },
    {
      maxWidth: 100,
      Header: <TableHeader title="Previous Accrued Interest Repaid" />,
      accessor: 'prevAccruedInterestRepaid',
      Cell: (props: TCell<'prevAccruedInterestRepaid'>) => (
        <TableCell
          value={props.value}
          isSmaller={true}
          isNumber={true}
        />
      ),
    },
    {
      maxWidth: 100,
      Header: <TableHeader title="Outstanding Accrued Interest Repaid" />,
      accessor: 'outsdAccruedInterestRepaid',
      Cell: (props: TCell<'outsdAccruedInterestRepaid'>) => (
        <TableCell
          value={props.value}
          isSmaller={true}
          isNumber={true}
        />
      ),
    },
    {
      maxWidth: 100,
      Header: <TableHeader title="Statement Unpaid Principal" />,
      accessor: 'stmntUnpaidPrincipal',
      Cell: (props: TCell<'stmntUnpaidPrincipal'>) => (
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
      maxWidth: 100,
      Header: <TableHeader title="Outstanding Statement Unpaid Principal" />,
      accessor: 'outsdStmntUnpaidPrincipal',
      Cell: (props: TCell<'outsdStmntUnpaidPrincipal'>) => (
        <TableCell
          value={props.value}
          isSmaller={true}
          isNumber={true}
        />
      ),
    },
    {
      maxWidth: 100,
      Header: <TableHeader title="Statement Repaid Principal" />,
      accessor: 'stmntRepaidPrincipal',
      Cell: (props: TCell<'stmntRepaidPrincipal'>) => (
        <TableCell
          value={props.value}
          isSmaller={true}
          isNumber={true}
        />
      ),
    },
    {
      maxWidth: 100,
      Header: <TableHeader title="Previous Statement Repaid Principal" />,
      accessor: 'prevStmntRepaidPrincipal',
      Cell: (props: TCell<'prevStmntRepaidPrincipal'>) => (
        <TableCell
          value={props.value}
          isSmaller={true}
          isNumber={true}
        />
      ),
    },
    {
      maxWidth: 100,
      Header: <TableHeader title="Outstanding Statement Repaid Principal" />,
      accessor: 'outsdStmntRepaidPrincipal',
      Cell: (props: TCell<'outsdStmntRepaidPrincipal'>) => (
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

export default StatementAprsTable;
