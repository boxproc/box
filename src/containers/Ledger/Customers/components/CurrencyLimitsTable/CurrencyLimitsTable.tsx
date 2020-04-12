import React from 'react';
import { CellInfo } from 'react-table';
import { ImmutableArray } from 'seamless-immutable';

import { Box, Flex } from '@rebass/grid';

import {
  Button,
  EditableTableCell,
  ISpinner,
  Table,
  TableCell,
  TableHeader,
  withSpinner,
} from 'components';
import { ICurrencyLimit, THandleGetCurrencyLimits, THandleUpdateCurrencyLimit } from 'store';
import { ITableCell } from 'types';

type TCell<T extends keyof ICurrencyLimit> = ITableCell<ICurrencyLimit[T]>;

interface ICurrencyLimitsTable extends ISpinner {
  currencyLimits: ImmutableArray<any>;
  getCurrencyLimits: THandleGetCurrencyLimits;
  isReadOnly: boolean;
  onCancel: () => void;
  updateCurrencyLimit: THandleUpdateCurrencyLimit;
}

const CurrencyLimitsTable: React.FC<ICurrencyLimitsTable> = ({
  currencyLimits,
  getCurrencyLimits,
  isLoading,
  isReadOnly,
  onCancel,
  updateCurrencyLimit,
}) => {
  React.useEffect(
    () => {
      getCurrencyLimits();
    },
    [getCurrencyLimits]
  );

  const isEditableCell = React.useMemo(
    () => !isReadOnly && !isLoading,
    [isReadOnly, isLoading]
  );

  const columns = React.useMemo(
    () => [
      {
        maxWidth: 100,
        accessor: 'currencyNumericCode',
        Header: <TableHeader title="Numeric Code" />,
        Cell: (props: TCell<'currencyNumericCode'>) => (
          <TableCell
            value={props.value}
            isSmaller={true}
            onCenter={true}
          />
        ),
      },
      {
        maxWidth: 100,
        accessor: 'currencyCode',
        Header: <TableHeader title="Currency Code" />,
        Cell: (props: TCell<'currencyCode'>) => (
          <TableCell
            value={props.value}
            onCenter={true}
          />
        ),
      },
      {
        maxWidth: 300,
        accessor: 'currencyName',
        Header: <TableHeader title="Currency Name" />,
        Cell: (props: TCell<'currencyName'>) => (
          <TableCell
            value={props.value}
            isSmaller={true}
          />
        ),
      },
      {
        maxWidth: 150,
        accessor: 'currentBalance',
        Header: <TableHeader title="Current Balance" />,
        Cell: (props: TCell<'currentBalance'>) => (
          <TableCell
            value={props.value}
            isSmaller={true}
            isNumber={true}
          />
        ),
      },
      {
        maxWidth: 150,
        accessor: 'limit',
        Header: <TableHeader title="Limit" />,
        Cell: (cellInfo: CellInfo) => (
          <EditableTableCell
            updateAction={updateCurrencyLimit}
            isSmaller={true}
            cellInfo={cellInfo}
            isDecimalNumber={true}
            isEditable={isEditableCell}
          />
        ),
      },
    ],
    [updateCurrencyLimit, isEditableCell]
  );

  return (
    <React.Fragment>
      <Box my="20px">
        <Table
          data={currencyLimits}
          columns={columns}
          isSmaller={true}
        />
      </Box>
      <Flex justifyContent="flex-end">
        <Button
          text="Close"
          onClick={onCancel}
        />
      </Flex>
    </React.Fragment>
  );
};

export default withSpinner()(CurrencyLimitsTable);
