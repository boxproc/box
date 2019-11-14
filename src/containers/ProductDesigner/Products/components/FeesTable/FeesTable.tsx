import React from 'react';
import { CellInfo } from 'react-table';

import { Box } from '@rebass/grid';

import {
  Button,
  renderEditableTableCell,
  Table,
  TableCell,
  TableHeader,
  withSpinner,
} from 'components';

import { iconNamesConst } from 'consts';

import {
  HandleDeleteProductFee,
  HandleGetProductFees,
  HandleUpdateProductFee,
  ProductFee,
} from 'store/domains';

import { TableCellType } from 'types';

type TCell<T extends keyof ProductFee> = TableCellType<ProductFee[T]>;

interface FeesTableProps {
  productFees: Array<ProductFee>;
  getProductFees: HandleGetProductFees;
  deleteProductFee: HandleDeleteProductFee;
  updateProductFee: HandleUpdateProductFee;
  isOnlyAmount: boolean;
  isOnlyRate: boolean;
}

const FeesTable: React.FC<FeesTableProps> = ({
  productFees,
  getProductFees,
  deleteProductFee,
  updateProductFee,
  isOnlyAmount,
  isOnlyRate,
}) => {
  const [screenHeight, setScreenHeight] = React.useState(window.innerHeight);

  React.useEffect(
    () => {
      getProductFees();
    },
    [getProductFees]
  );

  // update screen height for setting various number of table rows per page
  const updateWindowHeight = () => setScreenHeight(window.innerHeight);

  React.useEffect(
    () => {
      window.addEventListener('resize', updateWindowHeight);
      return () => window.removeEventListener('resize', updateWindowHeight);
    }
  );

  const tablePagesCount = React.useMemo(
    () => screenHeight < 650 ? 8
      : screenHeight < 850 ? 10
        : screenHeight < 950 ? 12 : 15,
    [screenHeight]
  );

  const columns = [
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
      Cell: renderEditableTableCell({
        updateAction: updateProductFee,
        isSmaller: true,
        isAlwaysEditable: true,
      }),
    },
    {
      maxWidth: 120,
      sortable: true,
      accessor: 'rate',
      Header: <TableHeader title="Rate" />,
      Cell: renderEditableTableCell({
        updateAction: updateProductFee,
        isSmaller: true,
        isDecimalNumber: true,
        isAlwaysEditable: !isOnlyAmount,
      }),
    },
    {
      maxWidth: 120,
      sortable: true,
      accessor: 'amount',
      Header: <TableHeader title="Amount" />,
      Cell: renderEditableTableCell({
        updateAction: updateProductFee,
        isSmaller: true,
        isDecimalNumber: true,
        isAlwaysEditable: !isOnlyRate,
      }),
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
  ];

  return (
    <Box pb="10px">
      <Table
        data={productFees}
        columns={columns}
        pageSize={tablePagesCount}
        isSmaller={true}
      />
    </Box>
  );
};

export default withSpinner()(FeesTable);
