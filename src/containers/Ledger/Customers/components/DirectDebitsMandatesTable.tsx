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
import { iconNamesConst, modalNamesConst } from 'consts';
import { IWithModal, withModal } from 'HOCs';
import { IDirectDebitMandate, THandleGetDirectDebitMandates } from 'store';
import { ITableCell } from 'types';

type TCell<T extends keyof IDirectDebitMandate> = ITableCell<IDirectDebitMandate[T]>;

interface IDirectDebitsMandatesTable extends IWithModal {
  customerId: number;
  getMandates: THandleGetDirectDebitMandates;
  isReadOnly: boolean;
  mandates: ImmutableArray<IDirectDebitMandate>;
  isLoading: boolean;
}

const DirectDebitsMandatesTable: React.FC<IDirectDebitsMandatesTable> = ({
  customerId,
  getMandates,
  isReadOnly,
  mandates,
  openModal,
}) => {
  React.useEffect(
    () => {
      getMandates({ customerId });
    },
    [getMandates, customerId]
  );

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
        maxWidth: 120,
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
        maxWidth: 200,
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
        maxWidth: 200,
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
        maxWidth: 100,
        accessor: 'actionMandate',
        Cell: (cellInfo: CellInfo) => (
          <Flex alignItems="flex-start" p="7px 5px">
            <Button
              text={cellInfo.original.status !== 'cancelled' ? 'Cancel' : 'Reinstate'}
              title={cellInfo.original.status !== 'cancelled'
                ? 'Cancel mandate'
                : 'Reinstate mandate'
              }
              size="10"
              disabled={isReadOnly}
              withConfirmation={true}
              confirmationText={cellInfo.original.status !== 'cancelled'
                // tslint:disable-next-line: max-line-length
                ? `Confirm that you want to cancel this mandate: ${cellInfo.original.description}.`
                // tslint:disable-next-line: max-line-length
                : `Confirm that you want to reinstate this mandate: ${cellInfo.original.description}.`
              }
              onClick={() => console.log('---')}
            />
          </Flex>
        ),
      },
    ],
    [isReadOnly, handleOpenModal]
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
