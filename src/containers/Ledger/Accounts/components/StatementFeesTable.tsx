import React from 'react';

import { Table, TableCell, TableHeader } from 'components';

import { LedgerStatementFeeItemPrepared } from 'store/domains';
import { TableCellType } from 'types';

type TCell<T extends keyof LedgerStatementFeeItemPrepared> =
  TableCellType<LedgerStatementFeeItemPrepared[T]>;

export const tableColumns = [
  {
    maxWidth: 150,
    sortable: true,
    Header: <TableHeader title="Product Fee ID" />,
    accessor: 'productFeeId',
    Cell: (props: TCell<'productFeeId'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 200,
    sortable: true,
    Header: <TableHeader title="Accrued Fee" />,
    accessor: 'accruedFee',
    Cell: (props: TCell<'accruedFee'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 200,
    sortable: true,
    Header: <TableHeader title="Description" />,
    accessor: 'description',
    Cell: (props: TCell<'description'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
  {
    maxWidth: 200,
    sortable: true,
    Header: <TableHeader title="Rate" />,
    accessor: 'rate',
    Cell: (props: TCell<'rate'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 200,
    sortable: true,
    Header: <TableHeader title="Amount" />,
    accessor: 'amount',
    Cell: (props: TCell<'amount'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 200,
    sortable: true,
    Header: <TableHeader title="Fee Application Condition" />,
    accessor: 'feeApplicationCondition',
    Cell: (props: TCell<'feeApplicationCondition'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
];

interface StatementFeesTableProps {
  data: Array<LedgerStatementFeeItemPrepared>;
}

const StatementFeesTable: React.FC<StatementFeesTableProps> = ({
  data,
}) => {
  return (
    <Table
      columns={tableColumns}
      data={data}
      pageSize={7}
      isSmaller={true}
    />
  );
};

export default StatementFeesTable;
