import React from 'react';
import { CellInfo } from 'react-table';
import { ImmutableArray } from 'seamless-immutable';

import { Flex } from '@rebass/grid';

import {
  Button,
  Table,
  TableCell,
  TableHeader,
  withSpinner,
} from 'components';
import { IDirectDebitMandate } from 'store';
import { ITableCell } from 'types';

type TCell<T extends keyof IDirectDebitMandate> = ITableCell<IDirectDebitMandate[T]>;

interface IDirectDebitsMandatesTable {
  data: ImmutableArray<IDirectDebitMandate>;
  isReadOnly: boolean;
}

const DirectDebitsMandatesTable: React.FC<IDirectDebitsMandatesTable> = ({
  data,
  isReadOnly,
}) => {
  const columns = React.useMemo(
    () => [
      {
        maxWidth: 80,
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
        maxWidth: 140,
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
        maxWidth: 170,
        accessor: 'providerRef',
        Header: <TableHeader title="Provider Reference" />,
        Cell: (props: TCell<'providerRef'>) => (
          <TableCell
            value={props.value}
            isSmaller={true}
          />
        ),
      },
      {
        maxWidth: 170,
        accessor: 'description',
        Header: <TableHeader title="Description" />,
        Cell: (props: TCell<'description'>) => (
          <TableCell
            value={props.value}
            isSmaller={true}
          />
        ),
      },
      {
        maxWidth: 120,
        accessor: 'lastUpdateTimestamp',
        Header: <TableHeader title="Last Update Datetime" />,
        Cell: (props: TCell<'lastUpdateTimestamp'>) => (
          <TableCell
            value={props.value}
            isSmaller={true}
            isDate={true}
          />
        ),
      },
      {
        maxWidth: 100,
        accessor: 'actionMandate',
        Cell: (cellInfo: CellInfo) => (
          <Flex alignItems="flex-start" p="7px 5px">
            <Button
              text={cellInfo.original.status !== 'Cancelled' ? 'Cancel' : 'Reinstate'}
              title={cellInfo.original.status !== 'Cancelled'
                ? 'Cancel mandate'
                : 'Reinstate mandate'
              }
              size="10"
              disabled={isReadOnly}
              withConfirmation={true}
              confirmationText={cellInfo.original.status !== 'Cancelled'
                // tslint:disable-next-line: max-line-length
                ? `Confirm that you want to cancel this mandate \n ${cellInfo.original.providerRef}.`
                // tslint:disable-next-line: max-line-length
                : `Confirm that you want to reinstate this mandate \n ${cellInfo.original.providerRef}.`
              }
              onClick={() => console.log('---')}
            />
          </Flex>
        ),
      },
    ],
    [isReadOnly]
  );

  return (
    <Table
      data={data}
      columns={columns}
      isSmaller={true}
    />
  );
};

export default withSpinner()(DirectDebitsMandatesTable);
