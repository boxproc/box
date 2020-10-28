import React from 'react';
import { ImmutableArray } from 'seamless-immutable';

import { Box, Flex } from '@rebass/grid';
import { CellInfo, RowInfo } from 'react-table';

import { Button, Table, TableCell, TableHeader, withSpinner } from 'components';

import { modalNamesConst } from 'consts';

import {
  IAccountStatement,
  THandleGetAccountStatements,
  THandleGetStatementAprs,
} from 'store';
import { ITableCell } from 'types';

type TCell<T extends keyof IAccountStatement> = ITableCell<IAccountStatement[T]>;

interface IAccountStatements {
  accountCurrentId: number;
  accountStatements: ImmutableArray<IAccountStatement>;
  getAccountStatements: THandleGetAccountStatements;
  getStatementAprs: THandleGetStatementAprs;
  onCancel: () => void;
}

const AccountStatements: React.FC<IAccountStatements> = ({
  accountCurrentId,
  accountStatements,
  getAccountStatements,
  getStatementAprs,
  onCancel,
}) => {
  React.useEffect(
    () => {
      getAccountStatements(accountCurrentId);
    },
    [getAccountStatements, accountCurrentId]
  );

  const handleClickOnRow = React.useCallback(
    (_, rowInfo: RowInfo) => {
      const statementId = rowInfo.original.id;

      return {
        onDoubleClick: () => {
          getStatementAprs(
            statementId,
            modalNamesConst.STATEMENT_APRS
          );
        },
      };
    },
    [getStatementAprs]
  );

  const tableColumns = React.useMemo(
    () => [
      {
        maxWidth: 85,
        Header: <TableHeader title="ID" />,
        accessor: 'id',
        Cell: (props: TCell<'id'>) => (
          <TableCell
            value={props.value}
            isNumber={true}
          />
        ),
      },
      {
        maxWidth: 65,
        Header: <TableHeader title="Sequence Number" />,
        accessor: 'sequenceNumber',
        Cell: (props: TCell<'sequenceNumber'>) => (
          <TableCell
            value={props.value}
            isNumber={true}
          />
        ),
      },
      {
        maxWidth: 80,
        Header: <TableHeader title="Statement Date" />,
        accessor: 'statementDate',
        Cell: (props: TCell<'statementDate'>) => (
          <TableCell
            isDate={true}
            value={props.value}
            isSmaller={true}
          />
        ),
      },
      {
        maxWidth: 80,
        Header: <TableHeader title="Start Date" />,
        accessor: 'startDate',
        Cell: (props: ITableCell<'startDate'>) => (
          <TableCell
            value={props.value}
            isDate={true}
            isSmaller={true}
          />
        ),
      },
      {
        maxWidth: 120,
        Header: <TableHeader title="Balance Open" />,
        accessor: 'balanceOpen',
        Cell: (props: TCell<'balanceOpen'>) => (
          <TableCell
            isNumber={true}
            value={props.value}
            isSmaller={true}
          />
        ),
      },
      {
        maxWidth: 120,
        Header: <TableHeader title="Balance Close" />,
        accessor: 'balanceClose',
        Cell: (props: TCell<'balanceClose'>) => (
          <TableCell
            isNumber={true}
            value={props.value}
            isSmaller={true}
          />
        ),
      },
      {
        maxWidth: 120,
        Header: <TableHeader title="Repayment Amount" />,
        accessor: 'repaymentMinimumAmountDue',
        Cell: (props: TCell<'repaymentMinimumAmountDue'>) => (
          <TableCell
            isNumber={true}
            value={props.value}
            isSmaller={true}
          />
        ),
      },
      {
        maxWidth: 120,
        Header: <TableHeader title="Repayment Status" />,
        accessor: 'repaymentStatus',
        Cell: (props: TCell<'repaymentStatus'>) => (
          <TableCell
            value={props.value}
            isSmaller={true}
          />
        ),
      },
      {
        maxWidth: 80,
        Header: <TableHeader title="Status" />,
        accessor: 'status',
        Cell: (props: TCell<'status'>) => (
          <TableCell
            value={props.value}
          />
        ),
      },
      {
        maxWidth: 120,
        Header: <TableHeader title="Interest" />,
        accessor: 'accruedInterestTotal',
        Cell: (props: TCell<'accruedInterestTotal'>) => (
          <TableCell
            isNumber={true}
            value={props.value}
            isSmaller={true}
          />
        ),
      },
      {
        maxWidth: 75,
        Cell: (cellInfo: CellInfo) => (
          <Flex
            justifyContent="center"
            width="100%"
            alignItems="center"
            p="7px 5px"
          >
            <Button
              title="Show details"
              text="Details"
              type="reset"
              size={11}
              onClick={() => getStatementAprs(
                cellInfo.original.id,
                modalNamesConst.STATEMENT_APRS
              )}
            />
          </Flex>
        ),
      },
    ],
    [getStatementAprs]
  );

  return (
    <React.Fragment>
      <Table
        pageSize={5}
        data={accountStatements}
        columns={tableColumns}
        getTrGroupProps={handleClickOnRow}
        isSmaller={true}
      />
      <Flex justifyContent="flex-end">
        <Box mt="15px">
          <Button
            text="close"
            type="reset"
            onClick={onCancel}
          />
        </Box>
      </Flex>
    </React.Fragment>
  );
};

export default withSpinner()(AccountStatements);
