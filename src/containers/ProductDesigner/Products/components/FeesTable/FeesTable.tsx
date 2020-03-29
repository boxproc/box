import React from 'react';
import { CellInfo } from 'react-table';
import { ImmutableArray } from 'seamless-immutable';

import { Box, Flex } from '@rebass/grid';

import {
  Button,
  EditableTableCell,
  Table,
  TableCell,
  TableHeader,
  withSpinner,
} from 'components';

import { feeRewardsTypesConst, iconNamesConst } from 'consts';

import {
  HandleDeleteProductFee,
  HandleGetProductFeeAprs,
  HandleGetProductFees,
  HandleUpdateProductFee,
  ProductFee,
} from 'store';

import { ISelectValue, ITableCell } from 'types';

type TCell<T extends keyof ProductFee> = ITableCell<ProductFee[T]>;

interface IFeesTable {
  productFees: ImmutableArray<ProductFee>;
  aprsOptions: Array<ISelectValue>;
  getProductFeeApr: HandleGetProductFeeAprs;
  getProductFees: HandleGetProductFees;
  deleteProductFee: HandleDeleteProductFee;
  updateProductFee: HandleUpdateProductFee;
  isReadOnly: boolean;
  isLoading: boolean;
}

const FeesTable: React.FC<IFeesTable> = ({
  aprsOptions,
  productFees,
  getProductFees,
  getProductFeeApr,
  deleteProductFee,
  updateProductFee,
  isReadOnly,
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

  const isEditableCell = React.useMemo(
    () => !isReadOnly && !isLoading,
    [isReadOnly, isLoading]
  );

  const columns = React.useMemo(
    () => [
      {
        maxWidth: 100,
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
        maxWidth: 300,
        accessor: 'description',
        Header: <TableHeader title="Description" />,
        Cell: (cellInfo: CellInfo) => (
          <EditableTableCell
            updateAction={updateProductFee}
            isSmaller={true}
            cellInfo={cellInfo}
            isEditable={isEditableCell}
          />
        ),
      },
      {
        maxWidth: 100,
        accessor: 'rate',
        Header: <TableHeader title="Rate" />,
        Cell: (cellInfo: CellInfo) => (
          <EditableTableCell
            updateAction={updateProductFee}
            isSmaller={true}
            isDecimalNumber={true}
            cellInfo={cellInfo}
            isEditable={(cellInfo.original.feeApplicationConditionValue
              !== feeRewardsTypesConst.APPLY_ONLY_FIXED_AMOUNT) && isEditableCell}
          />
        ),
      },
      {
        maxWidth: 100,
        accessor: 'amount',
        Header: <TableHeader title="Amount" />,
        Cell: (cellInfo: CellInfo) => (
          <EditableTableCell
            updateAction={updateProductFee}
            isSmaller={true}
            isDecimalNumber={true}
            isEditable={(cellInfo.original.feeApplicationConditionValue
              !== feeRewardsTypesConst.APPLY_ONLY_RATE) && isEditableCell}
            cellInfo={cellInfo}
          />
        ),
      },
      {
        maxWidth: 300,
        minWidth: 150,
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
        maxWidth: 300,
        minWidth: 200,
        accessor: 'apr',
        Header: <TableHeader title="APR" />,
        Cell: (cellInfo: CellInfo) => (
          <EditableTableCell
            updateAction={updateProductFee}
            isSmaller={true}
            cellInfo={cellInfo}
            isSelect={true}
            selectOptions={aprsOptions}
            isEditable={isEditableCell}
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
              title="delete"
              size="10"
              withConfirmation={true}
              confirmationText={`Confirm want you delete fee?`}
              onClick={() => deleteProductFee({
                productId: cellInfo.original.productId,
                productFeeId: cellInfo.original.productFeeId,
              })}
            />
          </Flex>
        ),
      },
    ],
    [aprsOptions, deleteProductFee, updateProductFee, isEditableCell]
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
