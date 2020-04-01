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

import { iconNamesConst } from 'consts';

import {
  IProductApr,
  THandleDeleteProductApr,
  THandleGetProductAprs,
  THandleUpdateProductApr,
} from 'store';

import { ITableCell } from 'types';

type TCell<T extends keyof IProductApr> = ITableCell<IProductApr[T]>;

interface IAprsTable {
  productAprs: ImmutableArray<IProductApr>;
  getProductAprs: THandleGetProductAprs;
  deleteProductApr: THandleDeleteProductApr;
  updateProductApr: THandleUpdateProductApr;
  isReadOnly: boolean;
  isLoading: boolean;
}

const AprsTable: React.FC<IAprsTable> = ({
  productAprs,
  getProductAprs,
  deleteProductApr,
  updateProductApr,
  isReadOnly,
  isLoading,
}) => {
  React.useEffect(
    () => {
      getProductAprs();
    },
    [getProductAprs]
  );

  const isEditableCell = React.useMemo(
    () => !isReadOnly && !isLoading,
    [isReadOnly, isLoading]
  );

  const columns = React.useMemo(
    () => [
      {
        maxWidth: 120,
        accessor: 'productAprId',
        Header: <TableHeader title="APR ID" />,
        Cell: (props: TCell<'productAprId'>) => (
          <TableCell
            value={props.value}
            isSmaller={true}
            isNumber={true}
          />
        ),
      },
      {
        maxWidth: 370,
        accessor: 'description',
        Header: <TableHeader title="Description" />,
        Cell: (cellInfo: CellInfo) => (
          <EditableTableCell
            updateAction={updateProductApr}
            isSmaller={true}
            cellInfo={cellInfo}
            isEditable={isEditableCell}
          />
        ),
      },
      {
        maxWidth: 170,
        accessor: 'calculationMethod',
        Header: <TableHeader title="Calculation Method" />,
        Cell: (props: TCell<'calculationMethod'>) => (
          <TableCell
            value={props.value}
            isSmaller={true}
          />
        ),
      },
      {
        maxWidth: 120,
        accessor: 'rate',
        Header: <TableHeader title="Rate %" />,
        Cell: (cellInfo: CellInfo) => (
          <EditableTableCell
            updateAction={updateProductApr}
            isSmaller={true}
            isDecimalNumber={true}
            cellInfo={cellInfo}
            isEditable={isEditableCell}
          />
        ),
      },
      {
        maxWidth: 155,
        accessor: 'graceNumberOfDays',
        Header: <TableHeader title="Grace Number of&nbsp;Days" />,
        Cell: (cellInfo: CellInfo) => (
          <EditableTableCell
            updateAction={updateProductApr}
            isSmaller={true}
            isNumber={true}
            cellInfo={cellInfo}
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
              confirmationText={`Confirm want you delete APR?`}
              onClick={() => deleteProductApr({
                productId: cellInfo.original.productId,
                productAprId: cellInfo.original.productAprId,
              })}
            />
          </Flex>
        ),
      },
    ],
    [deleteProductApr, updateProductApr, isEditableCell]
  );

  return (
    <Box pb="10px">
      <Table
        data={productAprs}
        columns={columns}
        isSmaller={true}
      />
    </Box>
  );
};

export default withSpinner()(AprsTable);
