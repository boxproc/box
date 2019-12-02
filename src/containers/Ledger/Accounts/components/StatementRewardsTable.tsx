import React from 'react';

import { Table, TableCell, TableHeader } from 'components';

import { LedgerStatementRewardItemPrepared } from 'store/domains';
import { TableCellType } from 'types';

type TCell<T extends keyof LedgerStatementRewardItemPrepared> =
  TableCellType<LedgerStatementRewardItemPrepared[T]>;

export const tableColumns = [
  {
    maxWidth: 150,
    sortable: true,
    Header: <TableHeader title="Product Reward ID" />,
    accessor: 'productRewardId',
    Cell: (props: TCell<'productRewardId'>) => (
      <TableCell
        value={props.value}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 300,
    sortable: true,
    Header: <TableHeader title="Accrued Reward" />,
    accessor: 'accruedReward',
    Cell: (props: TCell<'accruedReward'>) => (
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
    Header: <TableHeader title="Reward Application Condition" />,
    accessor: 'rewardApplicationCondition',
    Cell: (props: TCell<'rewardApplicationCondition'>) => (
      <TableCell
        value={props.value}
      />
    ),
  },
];

interface StatementRewardsTableProps {
  data: Array<LedgerStatementRewardItemPrepared>;
}

const StatementRewardsTable: React.FC<StatementRewardsTableProps> = ({
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

export default StatementRewardsTable;
