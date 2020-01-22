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
  HandleDeleteProductFee,
  HandleGetProductFeeAprs,
  HandleGetProductFees,
  HandleUpdateProductFee,
  ProductFee,
} from 'store/domains';

import { SelectValue, TableCellType } from 'types';

type TCell<T extends keyof ProductFee> = TableCellType<ProductFee[T]>;

interface FeesTableProps {
  productFees: Array<ProductFee>;
  aprsOptions: Array<SelectValue>;
  getProductFeeApr: HandleGetProductFeeAprs;
  getProductFees: HandleGetProductFees;
  deleteProductFee: HandleDeleteProductFee;
  updateProductFee: HandleUpdateProductFee;
  isLoading: boolean;
}

const FeesTable: React.FC<FeesTableProps> = ({
  aprsOptions,
  productFees,
  getProductFees,
  getProductFeeApr,
  deleteProductFee,
  updateProductFee,
  isLoading,
}) => {
  React.useEffect(
    () => {
      Promise.all([
        getProductFees(),
        getProductFeeApr(),
      ]);
    },
    [getProductFees, getProductFeeApr]
  );

  const columns = React.useMemo(
    () => [
      {
        maxWidth: 100,
        sortable: true,
        accessor: 'productFeeId',
        Header: <TableHeader title="Product Fee ID" />,
        Cell: (props: TCell<'productFeeId'>) => (
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
            updateAction={updateProductFee}
            isSmaller={true}
            cellInfo={cellInfo}
            isEditable={!isLoading}
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
            updateAction={updateProductFee}
            isSmaller={true}
            isDecimalNumber={true}
            cellInfo={cellInfo}
            isEditable={(cellInfo.original.feeApplicationConditionValue
              !== feeRewardsTypesCodes.APPLY_ONLY_FIXED_AMOUNT) && !isLoading}
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
            updateAction={updateProductFee}
            isSmaller={true}
            isDecimalNumber={true}
            isEditable={(cellInfo.original.feeApplicationConditionValue
              !== feeRewardsTypesCodes.APPLY_ONLY_RATE) && !isLoading}
            cellInfo={cellInfo}
          />
        ),
      },
      {
        maxWidth: 200,
        sortable: true,
        accessor: 'feeApplicationCondition',
        Header: <TableHeader title="Fee Application Condition" />,
        Cell: (props: TCell<'feeApplicationCondition'>) => (
          <TableCell
            value={props.value}
            isSmaller={true}
          />
        ),
      },
      {
        maxWidth: 200,
        sortable: true,
        accessor: 'apr',
        Header: <TableHeader title="APR" />,
        Cell: (cellInfo: CellInfo) => (
          <EditableTableCell
            updateAction={updateProductFee}
            isSmaller={true}
            cellInfo={cellInfo}
            isSelect={true}
            selectOptions={aprsOptions}
            isEditable={!isLoading}
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
            confirmationText={`Confirm want you delete fee?`}
            onClick={() => deleteProductFee({
              productId: cellInfo.original.productId,
              productFeeId: cellInfo.original.productFeeId,
            })}
          />
        ),
      },
    ],
    [isLoading, aprsOptions, deleteProductFee, updateProductFee]
  );

  return (
    <Box pb="10px">
      <Table
        data={productFees}
        columns={columns}
        isSmaller={true}
        isScrollbar={false}
      />
    </Box>
  );
};

export default withSpinner()(FeesTable);
