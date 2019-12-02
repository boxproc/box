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
    filterable: true,
    Cell: (props: TCell<'productFeeId'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 300,
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
