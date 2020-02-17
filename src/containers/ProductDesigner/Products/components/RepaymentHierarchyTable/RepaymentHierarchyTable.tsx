import React from 'react';

import { Box } from '@rebass/grid';

import {
  SmallText,
  Table,
  TableCell,
  TableHeader,
  withSpinner,
} from 'components';

import {
  HandleGetRepaymentHierarchy,
  HandleUpdateRepaymentHierarchy,
  RepaymentHierarchy,
} from 'store/domains';

import { TableCellType } from 'types';

type TCell<T extends keyof RepaymentHierarchy> = TableCellType<RepaymentHierarchy[T]>;

interface RepaymentHierarchyTableProps {
  data: Array<RepaymentHierarchy>;
  getRepaymentHierarchy: HandleGetRepaymentHierarchy;
  updateRepaymentHierarchy: HandleUpdateRepaymentHierarchy;
  isReadOnly: boolean;
  isLoading: boolean;
}

const RepaymentHierarchyTable: React.FC<RepaymentHierarchyTableProps> = ({
  data,
  getRepaymentHierarchy,
  updateRepaymentHierarchy,
  isReadOnly,
  isLoading,
}) => {
  React.useEffect(
    () => {
      getRepaymentHierarchy();
    },
    [getRepaymentHierarchy]
  );

  const isEditableCell = React.useMemo(
    () => !isReadOnly && !isLoading,
    [isReadOnly, isLoading]
  );

  const columns = React.useMemo(
    () => [
      {
        maxWidth: 130,
        accessor: 'repaymentPriority',
        Header: <TableHeader title="Repayment Priority" />,
        Cell: (props: TCell<'repaymentPriority'>) => (
          <TableCell
            value={props.value}
            isSmaller={true}
            isNumber={true}
          />
        ),
      },
      {
        maxWidth: 200,
        accessor: 'elementIdentifier',
        Header: <TableHeader title="Element Identifier" />,
        Cell: (props: TCell<'elementIdentifier'>) => (
          <TableCell
            value={props.value}
            isSmaller={true}
          />
        ),
      },
      {
        maxWidth: 130,
        accessor: 'productId',
        Header: <TableHeader title="Product ID" />,
        Cell: (props: TCell<'productId'>) => (
          <TableCell
            value={props.value}
            isSmaller={true}
            isNumber={true}
          />
        ),
      },
      {
        maxWidth: 130,
        accessor: 'productElementId',
        Header: <TableHeader title="Product Element ID" />,
        Cell: (props: TCell<'productElementId'>) => (
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
        Cell: (props: TCell<'description'>) => (
          <TableCell
            value={props.value}
            isSmaller={true}
          />
        ),
      },
    ],
    [isEditableCell]
  );

  return (
    <Box py="10px">
      <SmallText accentColor={true} bold={true}>Works on mocks</SmallText>
      <Table
        data={data}
        columns={columns}
        isSmaller={true}
      />
    </Box>
  );
};

export default withSpinner()(RepaymentHierarchyTable);
