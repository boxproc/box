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
}

const AprsTable: React.FC<AprsTableProps> = ({
  productAprs,
  getProductAprs,
  deleteProductApr,
  updateProductApr,
}) => {
  const [screenHeight, setScreenHeight] = React.useState(window.innerHeight);

  React.useEffect(
    () => {
      getProductAprs();
    },
    [getProductAprs]
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
      maxWidth: 90,
      sortable: true,
      accessor: 'id',
      Header: <TableHeader title="ID" />,
      Cell: (props: TCell<'id'>) => (
        <TableCell
          value={props.value}
          isSmaller={true}
          isNumber={true}
        />
      ),
    },
    {
      maxWidth: 90,
      sortable: true,
      accessor: 'repaymentSequence',
      Header: <TableHeader title="Repayment Sequence" />,
      Cell: renderEditableTableCell({
        updateAction: updateProductApr,
        isSmaller: true,
        isNumber: true,
        isAlwaysEditable: true,
      }),
    },
    {
      maxWidth: 270,
      sortable: true,
      accessor: 'description',
      Header: <TableHeader title="Description" />,
      Cell: renderEditableTableCell({
        updateAction: updateProductApr,
        isSmaller: true,
        isAlwaysEditable: true,
      }),
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
      Header: <TableHeader title="Rate" />,
      Cell: renderEditableTableCell({
        updateAction: updateProductApr,
        isSmaller: true,
        isNumber: true,
        isAlwaysEditable: true,
      }),
    },
    {
      maxWidth: 90,
      sortable: true,
      accessor: 'graceNumberOfDays',
      Header: <TableHeader title="Grace Number of&nbsp;Days" />,
      Cell: renderEditableTableCell({
        updateAction: updateProductApr,
        isSmaller: true,
        isNumber: true,
        isAlwaysEditable: true,
      }),
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
          onClick={() => deleteProductApr(cellInfo.original.id)}
        />
      ),
    },
  ];

  return (
    <Box pb="10px">
      <Table
        data={productAprs}
        columns={columns}
        pageSize={tablePagesCount}
        isSmaller={true}
      />
    </Box>
  );
};

export default withSpinner()(AprsTable);
