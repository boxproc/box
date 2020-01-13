import React from 'react';
import { CellInfo } from 'react-table';

import { Box } from '@rebass/grid';

import {
  Button,
  EditableTableCell,
  Table,
  TableCell,
  TableHeader,
  withSpinner,
} from 'components';

import { feeRewardsTypesCodes, iconNamesConst } from 'consts';

import {
  HandleDeleteProductReward,
  HandleGetProductRewards,
  HandleUpdateProductReward,
  ProductReward,
} from 'store/domains';

import { TableCellType } from 'types';

type TCell<T extends keyof ProductReward> = TableCellType<ProductReward[T]>;

interface RewardsTableProps {
  productRewards: Array<ProductReward>;
  getProductRewards: HandleGetProductRewards;
  deleteProductReward: HandleDeleteProductReward;
  updateProductReward: HandleUpdateProductReward;
}

const RewardsTable: React.FC<RewardsTableProps> = ({
  productRewards,
  getProductRewards,
  deleteProductReward,
  updateProductReward,
}) => {
  React.useEffect(
    () => {
      getProductRewards();
    },
    [getProductRewards]
  );

  const columns = [
    {
      maxWidth: 100,
      sortable: true,
      accessor: 'productRewardId',
      Header: <TableHeader title="Product Reward ID" />,
      Cell: (props: TCell<'productRewardId'>) => (
        <TableCell
          value={props.value}
          isSmaller={true}
          isNumber={true}
        />
      ),
    },
    {
      maxWidth: 350,
      sortable: true,
      accessor: 'description',
      Header: <TableHeader title="Description" />,
      Cell: (cellInfo: CellInfo) => (
        <EditableTableCell
          updateAction={updateProductReward}
          isSmaller={true}
          cellInfo={cellInfo}
        />
      ),
    },
    {
      maxWidth: 120,
      sortable: true,
      accessor: 'rate',
      Header: <TableHeader title="Rate" />,
      Cell: (cellInfo: CellInfo) => (
        <EditableTableCell
          updateAction={updateProductReward}
          isSmaller={true}
          isDecimalNumber={true}
          cellInfo={cellInfo}
          isEditable={cellInfo.original.rewardApplicationConditionValue
            !== feeRewardsTypesCodes.APPLY_ONLY_FIXED_AMOUNT}
        />
      ),
    },
    {
      maxWidth: 120,
      sortable: true,
      accessor: 'amount',
      Header: <TableHeader title="Amount" />,
      Cell: (cellInfo: CellInfo) => (
        <EditableTableCell
          updateAction={updateProductReward}
          isSmaller={true}
          isDecimalNumber={true}
          cellInfo={cellInfo}
          isEditable={cellInfo.original.rewardApplicationConditionValue
            !== feeRewardsTypesCodes.APPLY_ONLY_RATE}
        />
      ),
    },
    {
      maxWidth: 200,
      sortable: true,
      accessor: 'rewardApplicationCondition',
      Header: <TableHeader title="Reward Application Condition" />,
      Cell: (props: TCell<'rewardApplicationCondition'>) => (
        <TableCell
          value={props.value}
          isSmaller={true}
        />
      ),
    },
    {
      maxWidth: 80,
      accessor: 'deleteButton',
      Cell: (cellInfo: CellInfo) => (
        <Button
          iconName={iconNamesConst.DELETE}
          text="Delete"
          size="10"
          iconSize="15"
          withConfirmation={true}
          confirmationText={`Confirm want you delete reward?`}
          onClick={() => deleteProductReward({
            productId: cellInfo.original.productId,
            productRewardId: cellInfo.original.productRewardId,
          })}
        />
      ),
    },
  ];

  return (
    <Box pb="10px">
      <Table
        data={productRewards}
        columns={columns}
        isSmaller={true}
      />
    </Box>
  );
};

export default withSpinner()(RewardsTable);
