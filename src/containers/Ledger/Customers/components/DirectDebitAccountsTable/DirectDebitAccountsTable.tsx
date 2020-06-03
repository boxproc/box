import React from 'react';
import { CellInfo, RowInfo } from 'react-table';
import { ImmutableArray } from 'seamless-immutable';

import { Box, Flex } from '@rebass/grid';

import {
  Button,
  Table,
  TableCell,
  TableHeader,
  withSpinner,
} from 'components';
import { iconNamesConst, modalNamesConst } from 'consts';
import { IWithModal, withModal } from 'HOCs';
import {
  IDirectDebitAccount,
  THandleAddDirectDebitMandate,
  THandleGetDirectDebitAccounts,
} from 'store';
import { ITableCell } from 'types';

type TCell<T extends keyof IDirectDebitAccount> = ITableCell<IDirectDebitAccount[T]>;

interface IDirectDebitAccountsTable extends IWithModal {
  accounts: ImmutableArray<IDirectDebitAccount>;
  addMandate: THandleAddDirectDebitMandate;
  getAccounts: THandleGetDirectDebitAccounts;
  isAddingMandate: boolean;
  isLoading: boolean;
  isReadOnly: boolean;
}

const DirectDebitAccountsTable: React.FC<IDirectDebitAccountsTable> = ({
  accounts,
  addMandate,
  getAccounts,
  isAddingMandate,
  isLoading,
  isReadOnly,
  openModal,
}) => {
  React.useEffect(
    () => {
      getAccounts();
    },
    [getAccounts]
  );

  const isButtonsDisabled = React.useMemo(
    () => isReadOnly || isLoading || isAddingMandate,
    [isReadOnly, isLoading, isAddingMandate]
  );

  const handleOpenModal = React.useCallback(
    cellInfo => {
      openModal({
        name: modalNamesConst.DIRECT_DEBIT_ACCOUNT,
        payload: cellInfo.original,
      });
    },
    [openModal]
  );

  const handleClickOnRow = React.useCallback(
    (_, rowInfo: RowInfo) => {
      return {
        onDoubleClick: () => handleOpenModal(rowInfo),
      };
    },
    [handleOpenModal]
  );

  const columns = React.useMemo(
    () => [
      {
        maxWidth: 70,
        accessor: 'accountField1',
        Header: <TableHeader title="Account" />,
        Cell: (props: TCell<'accountField1'>) => (
          <TableCell
            value={props.value}
            isSmaller={true}
            isNumber={true}
          />
        ),
      },
      {
        maxWidth: 90,
        accessor: 'accountField3',
        Header: <TableHeader title="Bank Name" />,
        Cell: (props: TCell<'accountField3'>) => (
          <TableCell
            value={props.value}
            isSmaller={true}
            isNumber={true}
          />
        ),
      },
      {
        maxWidth: 150,
        accessor: 'accountholderName',
        Header: <TableHeader title="Accountholder Name" />,
        Cell: (props: TCell<'accountholderName'>) => (
          <TableCell
            value={props.value}
            isSmaller={true}
          />
        ),
      },
      {
        maxWidth: 70,
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
        maxWidth: 130,
        accessor: 'providerCustomerRef',
        Header: <TableHeader title="Provider Customer Ref" />,
        Cell: (props: TCell<'providerCustomerRef'>) => (
          <TableCell
            value={props.value}
            isSmaller={true}
          />
        ),
      },
      {
        maxWidth: 130,
        accessor: 'providerAccountRef',
        Header: <TableHeader title="Provider Account Ref" />,
        Cell: (props: TCell<'providerAccountRef'>) => (
          <TableCell
            value={props.value}
            isSmaller={true}
          />
        ),
      },
      {
        maxWidth: 100,
        accessor: 'providerName',
        Header: <TableHeader title="Provider" />,
        Cell: (props: TCell<'providerName'>) => (
          <TableCell
            value={props.value}
            isSmaller={true}
          />
        ),
      },
      {
        maxWidth: 50,
        Header: <TableHeader title="Details" />,
        Cell: (cellInfo: CellInfo) => (
          <Flex alignItems="flex-start" p="10px 5px">
            <Button
              iconName={iconNamesConst.SHORT_TEXT}
              title="Details"
              type="reset"
              onClick={() => handleOpenModal(cellInfo)}
            />
          </Flex>
        ),
      },
      {
        maxWidth: 90,
        accessor: 'createMandate',
        Cell: (cellInfo: CellInfo) => (
          <Flex alignItems="flex-start" p="7px 5px">
            <Button
              text="+ Mandate"
              title="Create a mandate"
              size="10"
              disabled={isButtonsDisabled}
              withConfirmation={true}
              confirmationTitle="Create a mandate?"
              // tslint:disable-next-line: max-line-length
              confirmationText={`Bank account: ${cellInfo.original.accountField1}`}
              onClick={() => addMandate(cellInfo.original.id)}
            />
          </Flex>
        ),
      },
      {
        maxWidth: 80,
        accessor: 'disableAccount',
        Cell: (cellInfo: CellInfo) => {
          return cellInfo.original.status !== 'inactive' && (
            <Flex alignItems="flex-start" p="7px 5px">
              <Button
                text="Disable"
                title={isReadOnly ? '' : 'Disable bank account'}
                size="10"
                disabled={isButtonsDisabled}
                withConfirmation={true}
                confirmationTitle="Disable account?"
                // tslint:disable-next-line: max-line-length
                confirmationText={`Confirm that you want to disable bank account: ${cellInfo.original.accountField1}`}
                onClick={() => console.log(cellInfo.original.id)}
              />
            </Flex>
          );
        },
      },
    ],
    [isReadOnly, handleOpenModal, isButtonsDisabled, addMandate]
  );

  return (
    <Box pb="10px">
      <Table
        data={accounts}
        columns={columns}
        isSmaller={true}
        getTrGroupProps={handleClickOnRow}
      />
    </Box>
  );
};

export default withSpinner()(withModal(DirectDebitAccountsTable));
