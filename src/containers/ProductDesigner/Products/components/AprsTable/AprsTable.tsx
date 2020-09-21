import React from 'react';
import { CellInfo } from 'react-table';
import { ImmutableArray } from 'seamless-immutable';

import { Box, Flex } from '@rebass/grid';

import styled from 'theme';

import {
  Button,
  EditableTableCell,
  renderCheckBoxTableCell,
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

  const countData = React.useMemo(
    () => productAprs && productAprs.length,
    [productAprs]
  );

  const columns = React.useMemo(
    () => [
      {
        maxWidth: 80,
        accessor: 'repaymentPriority',
        Header: <TableHeader title="Repayment Priority" />,
        Cell: (cellInfo: CellInfo) => (
          <React.Fragment>
            <TableCell
              value={cellInfo.value}
              isSmaller={true}
              isNumber={true}
            />
            {isEditableCell && (
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
                    onClick={() => updateProductApr({
                      ...cellInfo.original,
                      repaymentPriority: cellInfo.original.repaymentPriority - 1,
                    })}
                  />
                </ArrowButtonWrapper>
                <ArrowButtonWrapper>
                  <Button
                    iconName={iconNamesConst.ARROW_DOWN}
                    title="Move down"
                    disabled={(cellInfo.index === countData - 1) || !isEditableCell}
                    onClick={() => updateProductApr({
                      ...cellInfo.original,
                      repaymentPriority: cellInfo.original.repaymentPriority + 1,
                    })}
                  />
                </ArrowButtonWrapper>
              </Flex>
            )}
          </React.Fragment>
        ),
      },
      {
        maxWidth: 80,
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
        maxWidth: 410,
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
        maxWidth: 150,
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
        maxWidth: 70,
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
        maxWidth: 90,
        accessor: 'initialInterestFreeDays',
        Header: <TableHeader title="Initial Interest Free Days" />,
        Cell: (props: TCell<'initialInterestFreeDays'>) => (
          <TableCell
            value={props.value}
            isSmaller={true}
            isNumber={true}
          />
        ),
      },
      {
        maxWidth: 90,
        Header: <TableHeader title="Always Charge Interest" />,
        accessor: 'alwaysChargeInterest',
        Cell: renderCheckBoxTableCell(),
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
              title={isEditableCell ? 'delete' : ''}
              size="10"
              withConfirmation={true}
              confirmationText={`Confirm want you delete APR?`}
              disabled={!isEditableCell}
              onClick={() => deleteProductApr({
                productId: cellInfo.original.productId,
                productAprId: cellInfo.original.productAprId,
              })}
            />
          </Flex>
        ),
      },
    ],
    [deleteProductApr, updateProductApr, isEditableCell, countData]
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
