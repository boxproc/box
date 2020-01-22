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
  isLoading: boolean;
}

const AprsTable: React.FC<AprsTableProps> = ({
  productAprs,
  getProductAprs,
  deleteProductApr,
  updateProductApr,
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

  const columns = React.useMemo(
    () => [
      {
        maxWidth: 90,
        sortable: true,
        accessor: 'repaymentOrder',
        Header: <TableHeader title="Repayment Order" />,
        Cell: (cellInfo: CellInfo) => (
          <EditableTableCell
            updateAction={updateProductApr}
            isSmaller={true}
            cellInfo={cellInfo}
            isSelect={true}
            selectOptions={repaymentOptions}
            isEditable={false}
            // isEditable={!isLoading}
          />
        ),
      },
      {
        maxWidth: 90,
        sortable: true,
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
        maxWidth: 380,
        sortable: true,
        accessor: 'description',
        Header: <TableHeader title="Description" />,
        Cell: (cellInfo: CellInfo) => (
          <EditableTableCell
            updateAction={updateProductApr}
            isSmaller={true}
            cellInfo={cellInfo}
            isEditable={!isLoading}
          />
        ),
      },
      {
        maxWidth: 120,
        sortable: true,
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
        sortable: true,
        accessor: 'rate',
        Header: <TableHeader title="Rate %" />,
        Cell: (cellInfo: CellInfo) => (
          <EditableTableCell
            updateAction={updateProductApr}
            isSmaller={true}
            isDecimalNumber={true}
            cellInfo={cellInfo}
            isEditable={!isLoading}
          />
        ),
      },
      {
        maxWidth: 100,
        sortable: true,
        accessor: 'graceNumberOfDays',
        Header: <TableHeader title="Grace Number of&nbsp;Days" />,
        Cell: (cellInfo: CellInfo) => (
          <EditableTableCell
            updateAction={updateProductApr}
            isSmaller={true}
            isNumber={true}
            cellInfo={cellInfo}
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
            confirmationText={`Confirm want you delete APR?`}
            onClick={() => deleteProductApr({
              productId: cellInfo.original.productId,
              productAprId: cellInfo.original.productAprId,
            })}
          />
        ),
      },
    ],
    [deleteProductApr, updateProductApr, isLoading, repaymentOptions]
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
