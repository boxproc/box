import React from 'react';
import { CellInfo } from 'react-table';

import { Box, Flex } from '@rebass/grid';

import styled from 'theme';

import {
  Button,
  Table,
  TableCell,
  TableHeader,
  withSpinner,
} from 'components';

import { iconNamesConst } from 'consts';

import {
  HandleGetRepaymentHierarchy,
  HandleUpdateRepaymentHierarchy,
  RepaymentHierarchy,
} from 'store';

import { TableCellType } from 'types';

const ArrowButtonWrapper = styled.div`
  position: relative;
  width: 18px;
  height: 13px;
  overflow: hidden;

  .button {
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -13px;
    margin-top: -13px;

    &:disabled {
      opacity: .7;
      pointer-events: none;
    }
  }
`;

type TCell<T extends keyof RepaymentHierarchy> = TableCellType<RepaymentHierarchy[T]>;

interface RepaymentHierarchyTableProps {
  data: Array<RepaymentHierarchy>;
  getRepaymentHierarchy: HandleGetRepaymentHierarchy;
  updateRepaymentHierarchy: HandleUpdateRepaymentHierarchy;
  isReadOnly: boolean;
  isUpdating: boolean;
}

const RepaymentHierarchyTable: React.FC<RepaymentHierarchyTableProps> = ({
  data,
  getRepaymentHierarchy,
  updateRepaymentHierarchy,
  isReadOnly,
  isUpdating,
}) => {
  React.useEffect(
    () => {
      getRepaymentHierarchy();
    },
    [getRepaymentHierarchy]
  );

  const isEditableCell = React.useMemo(
    () => !isReadOnly && !isUpdating,
    [isReadOnly, isUpdating]
  );

  const countData = React.useMemo(
    () => data && data.length,
    [data]
  );

  const columns = React.useMemo(
    () => [
      {
        maxWidth: 120,
        accessor: 'repaymentPriority',
        Header: <TableHeader title="Repayment Priority" />,
        Cell: (cellInfo: CellInfo) => (
          <React.Fragment>
            <TableCell
              value={cellInfo.value}
              isSmaller={true}
              isNumber={true}
            />
            <Flex
              flexDirection="column"
              alignItems="center"
              p="2px 5px 5px 0"
            >
              <ArrowButtonWrapper>
                <Button
                  iconName={iconNamesConst.ARROW_UP}
                  title="Move up"
                  disabled={(cellInfo.index === 0) || !isEditableCell}
                  onClick={() => updateRepaymentHierarchy({
                    id: cellInfo.original.id,
                    productId: cellInfo.original.productId,
                    repaymentPriority: cellInfo.original.repaymentPriority - 1,
                  })}
                />
              </ArrowButtonWrapper>
              <ArrowButtonWrapper>
                <Button
                  iconName={iconNamesConst.ARROW_DOWN}
                  title="Move down"
                  disabled={(cellInfo.index === countData - 1) || !isEditableCell}
                  onClick={() => updateRepaymentHierarchy({
                    id: cellInfo.original.id,
                    productId: cellInfo.original.productId,
                    repaymentPriority: cellInfo.original.repaymentPriority + 1,
                  })}
                />
              </ArrowButtonWrapper>
            </Flex>
          </React.Fragment>
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
        maxWidth: 130,
        accessor: 'status',
        Header: <TableHeader title="Status" />,
        Cell: (props: TCell<'status'>) => (
          <TableCell
            value={props.value}
            isSmaller={true}
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
    [isEditableCell, countData, updateRepaymentHierarchy]
  );

  return (
    <Box py="10px">
      <Table
        data={data}
        columns={columns}
        isSmaller={true}
      />
    </Box>
  );
};

export default withSpinner()(RepaymentHierarchyTable);
