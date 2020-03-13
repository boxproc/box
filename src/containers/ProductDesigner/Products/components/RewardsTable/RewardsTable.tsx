import React from 'react';
import { CellInfo } from 'react-table';

import { Box, Flex } from '@rebass/grid';

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
  isReadOnly: boolean;
  isLoading: boolean;
}

const RewardsTable: React.FC<RewardsTableProps> = ({
  productRewards,
  getProductRewards,
  deleteProductReward,
  updateProductReward,
  isReadOnly,
  isLoading,
}) => {
  React.useEffect(
    () => {
      getProductRewards();
    },
    [getProductRewards]
  );

  const isEditableCell = React.useMemo(
    () => !isReadOnly && !isLoading,
    [isReadOnly, isLoading]
  );

  const columns = React.useMemo(
    () => [
      {
        maxWidth: 120,
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
        maxWidth: 250,
        accessor: 'description',
        Header: <TableHeader title="Description" />,
        Cell: (cellInfo: CellInfo) => (
          <EditableTableCell
            updateAction={updateProductReward}
            isSmaller={true}
            cellInfo={cellInfo}
            isEditable={isEditableCell}
          />
        ),
      },
      {
        maxWidth: 120,
        accessor: 'rate',
        Header: <TableHeader title="Rate" />,
        Cell: (cellInfo: CellInfo) => (
          <EditableTableCell
            updateAction={updateProductReward}
            isSmaller={true}
            isDecimalNumber={true}
            cellInfo={cellInfo}
            isEditable={(cellInfo.original.rewardApplicationConditionValue
              !== feeRewardsTypesCodes.APPLY_ONLY_FIXED_AMOUNT) && isEditableCell}
          />
        ),
      },
      {
        maxWidth: 120,
        accessor: 'amount',
        Header: <TableHeader title="Amount" />,
        Cell: (cellInfo: CellInfo) => (
          <EditableTableCell
            updateAction={updateProductReward}
            isSmaller={true}
            isDecimalNumber={true}
            cellInfo={cellInfo}
            isEditable={(cellInfo.original.rewardApplicationConditionValue
              !== feeRewardsTypesCodes.APPLY_ONLY_RATE) && isEditableCell}
          />
        ),
      },
      {
        maxWidth: 300,
        minWidth: 240,
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
        maxWidth: 65,
        accessor: 'deleteButton',
        Cell: (cellInfo: CellInfo) => (
          <Flex
            justifyContent="center"
            width="100%"
          >
            <Button
              iconName={iconNamesConst.DELETE}
              title="Delete"
              size="10"
              withConfirmation={true}
              confirmationText={`Confirm want you delete reward?`}
              onClick={() => deleteProductReward({
                productId: cellInfo.original.productId,
                productRewardId: cellInfo.original.productRewardId,
              })}
            />
          </Flex>
        ),
      },
    ],
    [deleteProductReward, updateProductReward, isEditableCell]
  );

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
