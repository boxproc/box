import React from 'react';
import { CellInfo, RowInfo } from 'react-table';
import { ImmutableArray } from 'seamless-immutable';

import { Flex } from '@rebass/grid';

import {
  Button,
  Table,
  TableCell,
  TableHeader,
  withSpinner,
} from 'components';
import { modalNamesConst } from 'consts';
import { IWithModal, withModal } from 'HOCs';
import {
  IDirectDebitMandate,
  THandleChangeDirectDebitMandate,
} from 'store';
import { ITableCell } from 'types';

type TCell<T extends keyof IDirectDebitMandate> = ITableCell<IDirectDebitMandate[T]>;

interface IDirectDebitsMandatesTable extends IWithModal {
  changeMandate: THandleChangeDirectDebitMandate;
  isChangingMandate: boolean;
  isReadOnly: boolean;
  mandates: ImmutableArray<IDirectDebitMandate>;
}

const DirectDebitsMandatesTable: React.FC<IDirectDebitsMandatesTable> = ({
  changeMandate,
  isChangingMandate,
  isReadOnly,
  mandates,
  openModal,
}) => {
  const handleOpenModal = React.useCallback(
    cellInfo => {
      openModal({
        name: modalNamesConst.DIRECT_DEBIT_MANDATE,
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
        maxWidth: 100,
        accessor: 'accountAlias',
        Header: <TableHeader title="Account Alias" />,
        Cell: (props: TCell<'accountAlias'>) => (
          <TableCell
            value={props.value}
            isSmaller={true}
            isNumber={true}
          />
        ),
      },
      {
        maxWidth: 260,
        accessor: 'bankName',
        Header: <TableHeader title="Bank Name" />,
        Cell: (props: TCell<'bankName'>) => (
          <TableCell
            value={props.value}
            isSmaller={true}
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
        maxWidth: 260,
        accessor: 'interfaceName',
        Header: <TableHeader title="Direct Debit Provider" />,
        Cell: (props: TCell<'interfaceName'>) => (
          <TableCell
            value={props.value}
            isSmaller={true}
          />
        ),
      },
      {
        maxWidth: 75,
        Cell: (cellInfo: CellInfo) => (
          <Flex alignItems="flex-start" p="7px 5px">
            <Button
              title="View details"
              text="Details"
              size="10"
              type="reset"
              onClick={() => handleOpenModal(cellInfo)}
            />
          </Flex>
        ),
      },
      {
        maxWidth: 100,
        accessor: 'actionMandate',
        Cell: (cellInfo: CellInfo) => {
          const status = cellInfo.original.status;
          const isCancelled = status && status.toLowerCase() === 'inactive';
          const description = cellInfo.original.description;
          const id = cellInfo.original.id;

          return (
            <Flex alignItems="flex-start" p="7px 5px">
              <Button
                text={isCancelled ? 'Reinstate' : 'Cancel'}
                title={isCancelled ? 'Reinstate mandate' : 'Cancel mandate'}
                size="10"
                disabled={isReadOnly || isChangingMandate}
                withConfirmation={true}
                confirmationText={isCancelled
                  ? `Confirm that you want to reinstate this mandate: ${description}.`
                  : `Confirm that you want to cancel this mandate: ${description}.`
                }
                onClick={isCancelled
                  ? () => changeMandate({ reinstate: true, id })
                  : () => changeMandate({ cancel: true, id })
                }
              />
            </Flex>
          );
        },
      },
    ],
    [isReadOnly, isChangingMandate, handleOpenModal, changeMandate]
  );

  return (
    <Table
      data={mandates}
      columns={columns}
      isSmaller={true}
      getTrGroupProps={handleClickOnRow}
    />
  );
};

export default withModal(withSpinner()(DirectDebitsMandatesTable));
