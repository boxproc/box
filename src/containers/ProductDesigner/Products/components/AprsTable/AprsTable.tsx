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

import { iconNamesConst } from 'consts';

import {
  HandleDeleteProductApr,
  HandleGetProductAprs,
  HandleUpdateProductApr,
  ProductApr,
} from 'store/domains';

import { TableCellType } from 'types';

type TCell<T extends keyof ProductApr> = TableCellType<ProductApr[T]>;

interface AprsTableProps {
  productAprs: Array<ProductApr>;
  getProductAprs: HandleGetProductAprs;
  deleteProductApr: HandleDeleteProductApr;
  updateProductApr: HandleUpdateProductApr;
  isReadOnly: boolean;
  isLoading: boolean;
}

const AprsTable: React.FC<AprsTableProps> = ({
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

  const repaymentOptions = React.useMemo(
    () => {
      const count = productAprs.length;
      const options = [];

      for (let i = 1; i <= count; i++) {
        options.push({ value: i, label: i.toString() });
      }

      return options;
    },
    [productAprs]
  );

  const isEditableCell = React.useMemo(
    () => !isReadOnly && !isLoading,
    [isReadOnly, isLoading]
  );

  const columns = React.useMemo(
    () => [
      {
        maxWidth: 120,
        accessor: 'repaymentOrder',
        Header: <TableHeader title="Repayment Order" />,
        Cell: (cellInfo: CellInfo) => (
          <EditableTableCell
            updateAction={updateProductApr}
            isSmaller={true}
            isNumber={true}
            cellInfo={cellInfo}
            isSelect={true}
            selectOptions={repaymentOptions}
            isEditable={isEditableCell}
          />
        ),
      },
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
        maxWidth: 300,
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
        maxWidth: 120,
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
        maxWidth: 100,
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
        maxWidth: 130,
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
        maxWidth: 60,
        accessor: 'deleteButton',
        Cell: (cellInfo: CellInfo) => (
          <Button
            iconName={iconNamesConst.DELETE}
            text="Delete"
            size="10"
            iconSize="15"
            withConfirmation={true}
            confirmationText={`Confirm want you delete APR?`}
            onClick={() => deleteProductApr({
              productId: cellInfo.original.productId,
              productAprId: cellInfo.original.productAprId,
            })}
          />
        ),
      },
    ],
    [deleteProductApr, updateProductApr, repaymentOptions, isEditableCell]
  );

  return (
    <Box pb="10px">
      <Table
        data={productAprs}
        columns={columns}
        isSmaller={true}
        isScrollbar={false}
      />
    </Box>
  );
};

export default withSpinner()(AprsTable);
