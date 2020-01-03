import React from 'react';

import { Box, Flex } from '@rebass/grid';
import { CellInfo, RowInfo } from 'react-table';

import { Button, Table, TableCell, TableHeader, withSpinner } from 'components';

import { iconNamesConst, modalNamesConst } from 'consts';

import {
  HandleGetLedgerAccountStatements,
  HandleGetLedgerStatementAprs,
  LedgerAccountStatementItemPrepared,
} from 'store/domains';
import { TableCellType } from 'types';

type TCell<T extends keyof LedgerAccountStatementItemPrepared> =
  TableCellType<LedgerAccountStatementItemPrepared[T]>;

interface AccountStatementsProps {
  accountStatements: Array<LedgerAccountStatementItemPrepared>;
  getLedgerAccountStatements: HandleGetLedgerAccountStatements;
  getLedgerStatementAprs: HandleGetLedgerStatementAprs;
  accountCurrentId: number;
  onCancel: () => void;
}

const AccountStatements: React.FC<AccountStatementsProps> = ({
  getLedgerAccountStatements,
  getLedgerStatementAprs,
  accountStatements,
  accountCurrentId,
  onCancel,
}) => {
  React.useEffect(
    () => {
      getLedgerAccountStatements(accountCurrentId);
    },
    [getLedgerAccountStatements, accountCurrentId]
  );

  const handleClickOnRow = React.useCallback(
    (_, rowInfo: RowInfo) => {
      const statementId = rowInfo.original.id;

      return {
        onDoubleClick: () => {
          getLedgerStatementAprs(
            statementId,
            modalNamesConst.STATEMENT_APRS
          );
        },
      };
    },
    [getLedgerStatementAprs]
  );

  const tableColumns = [
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
      Header: <TableHeader title="First Tr ID" />,
      accessor: 'firstTransactionId',
      Cell: (props: TCell<'firstTransactionId'>) => (
        <TableCell
          isNumber={true}
          value={props.value}
          isSmaller={true}
        />
      ),
    },
    {
      maxWidth: 80,
      Header: <TableHeader title="Last Tr ID" />,
      accessor: 'lastTransactionId',
      Cell: (props: TCell<'lastTransactionId'>) => (
        <TableCell
          isNumber={true}
          value={props.value}
          isSmaller={true}
        />
      ),
    },
    {
      maxWidth: 100,
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
      maxWidth: 100,
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
      maxWidth: 100,
      Header: <TableHeader title="Repayment Amount" />,
      accessor: 'minimumAmountDueRepayment',
      Cell: (props: TCell<'minimumAmountDueRepayment'>) => (
        <TableCell
          isNumber={true}
          value={props.value}
          isSmaller={true}
        />
      ),
    },
    {
      maxWidth: 80,
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
      Header: <TableHeader title="Date of Last Update" />,
      accessor: 'dateOfLastUpdate',
      Cell: (props: TCell<'dateOfLastUpdate'>) => (
        <TableCell
          isDate={true}
          value={props.value}
          isSmaller={true}
        />
      ),
    },
    {
      maxWidth: 100,
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
      maxWidth: 100,
      Header: <TableHeader title="Fee" />,
      accessor: 'accruedFeeTotal',
      Cell: (props: TCell<'accruedFeeTotal'>) => (
        <TableCell
          isNumber={true}
          value={props.value}
          isSmaller={true}
        />
      ),
    },
    {
      maxWidth: 100,
      Header: <TableHeader title="Reward" />,
      accessor: 'accruedRewardTotal',
      Cell: (props: TableCellType<'accruedRewardTotal'>) => (
        <TableCell
          isNumber={true}
          value={props.value}
          isSmaller={true}
        />
      ),
    },
    {
      maxWidth: 60,
      Header: <TableHeader title="Details" />,
      Cell: (cellInfo: CellInfo) => (
        <Flex
          justifyContent="center"
          width="100%"
        >
          <Button
            iconName={iconNamesConst.SHORT_TEXT}
            title="Details"
            type="reset"
            onClick={() => getLedgerStatementAprs(
              cellInfo.original.id,
              modalNamesConst.STATEMENT_APRS
            )}
          />
        </Flex>
      ),
    },
  ];

  return (
    <Box mt="20px">
      <Table
        pageSize={5}
        data={accountStatements}
        columns={tableColumns}
        getTrGroupProps={handleClickOnRow}
        isSmaller={true}
      />
      <Flex justifyContent="flex-end">
        <Box mt="10px">
          <Button
            text="close"
            type="reset"
            onClick={onCancel}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default withSpinner()(AccountStatements);
