import React from 'react';
import { CellInfo } from 'react-table';
import { ImmutableArray } from 'seamless-immutable';

import { Flex } from '@rebass/grid';

import {
  Button,
  renderCheckBoxTableCell,
  Table,
  TableCell,
  TableHeader,
  withSpinner,
} from 'components';
import {
  IDirectDebitMandate,
  THandleMakeDefaultDirectDebitMandate,
} from 'store';
import { ITableCell } from 'types';

type TCell<T extends keyof IDirectDebitMandate> = ITableCell<IDirectDebitMandate[T]>;

interface IDirectDebitsMandatesTable {
  accountId: number;
  makeDefault: THandleMakeDefaultDirectDebitMandate;
  isChangingMandate: boolean;
  isReadOnly: boolean;
  mandates: ImmutableArray<IDirectDebitMandate>;
}

const DirectDebitsMandatesTable: React.FC<IDirectDebitsMandatesTable> = ({
  accountId,
  makeDefault,
  isChangingMandate,
  isReadOnly,
  mandates,
}) => {
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
        maxWidth: 65,
        Header: <TableHeader title="Default" />,
        accessor: 'defaultFlag',
        Cell: renderCheckBoxTableCell(),
      },
      {
        maxWidth: 100,
        accessor: 'actionMandate',
        Cell: (cellInfo: CellInfo) => {
          const id = cellInfo.original.id;
          const alias = cellInfo.original.accountAlias;
          const isDefault = cellInfo.original.defaultFlag;

          return !isDefault && (
            <Flex alignItems="flex-start" p="7px 5px">
              <Button
                text="Apply"
                title="Apply mandate"
                size="10"
                disabled={isReadOnly || isChangingMandate}
                withConfirmation={true}
                confirmationTitle={`Apply this mandate`}
                confirmationText={`Account no. ending: ••••${alias}`}
                onClick={() => makeDefault({ id, accountId })}
              />
            </Flex>
          );
        },
      },
    ],
    [accountId, isReadOnly, isChangingMandate, makeDefault]
  );

  return (
    <Table
      data={mandates}
      columns={columns}
      isSmaller={true}
    />
  );
};

export default withSpinner()(DirectDebitsMandatesTable);
