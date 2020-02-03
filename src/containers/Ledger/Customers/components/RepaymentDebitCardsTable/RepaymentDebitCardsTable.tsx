import React from 'react';

import { Box } from '@rebass/grid';

import {
  Table,
  TableCell,
  TableHeader,
  withSpinner,
} from 'components';

import { HandleGetRepaymentDebitCards, RepaymentDebitCardsItemPrepared } from 'store/domains';

import { TableCellType } from 'types';

type TCell<T extends keyof RepaymentDebitCardsItemPrepared> =
  TableCellType<RepaymentDebitCardsItemPrepared[T]>;

interface RepaymentDebitCardsTableProps {
  repaymentDebitCards: Array<RepaymentDebitCardsItemPrepared>;
  getRepaymentDebitCards: HandleGetRepaymentDebitCards;
}

const RepaymentDebitCardsTable: React.FC<RepaymentDebitCardsTableProps> = ({
  repaymentDebitCards,
  getRepaymentDebitCards,
}) => {
  React.useEffect(
    () => {
      getRepaymentDebitCards();
    },
    [getRepaymentDebitCards]
  );

  const columns = React.useMemo(
    () => [
      {
        maxWidth: 90,
        accessor: 'customerId',
        Header: <TableHeader title="Customer ID" />,
        Cell: (props: TCell<'customerId'>) => (
          <TableCell
            value={props.value}
            isSmaller={true}
            isNumber={true}
          />
        ),
      },
      {
        maxWidth: 120,
        accessor: 'panAlias',
        Header: <TableHeader title="Pan Alias" />,
        Cell: (props: TCell<'panAlias'>) => (
          <TableCell
            value={props.value}
            isSmaller={true}
          />
        ),
      },
      {
        maxWidth: 120,
        accessor: 'panMasked',
        Header: <TableHeader title="Pan Masked" />,
        Cell: (props: TCell<'panMasked'>) => (
          <TableCell
            value={props.value}
            isSmaller={true}
          />
        ),
      },
      {
        maxWidth: 100,
        accessor: 'expiryDate',
        Header: <TableHeader title="Expiry Date" />,
        Cell: (props: TCell<'expiryDate'>) => (
          <TableCell
            value={props.value}
            isSmaller={true}
            isDate={true}
          />
        ),
      },
      {
        maxWidth: 100,
        accessor: 'cvv2Encrypted',
        Header: <TableHeader title="cvv2" />,
        Cell: (props: TCell<'cvv2Encrypted'>) => (
          <TableCell
            value={props.value}
            isSmaller={true}
          />
        ),
      },
      {
        maxWidth: 120,
        accessor: 'cardholderName',
        Header: <TableHeader title="Cardholder Name" />,
        Cell: (props: TCell<'cardholderName'>) => (
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
        maxWidth: 150,
        accessor: 'repaymentInterfaceName',
        Header: <TableHeader title="Repayment Interface" />,
        Cell: (props: TCell<'repaymentInterfaceName'>) => (
          <TableCell
            value={props.value}
            isSmaller={true}
          />
        ),
      },
      {
        maxWidth: 120,
        accessor: 'lastUpdateDatetime',
        Header: <TableHeader title="Last Update Datetime" />,
        Cell: (props: TCell<'lastUpdateDatetime'>) => (
          <TableCell
            value={props.value}
            isSmaller={true}
            isDate={true}
          />
        ),
      },
    ],
    []
  );

  return (
    <Box pb="10px">
      <Table
        data={repaymentDebitCards}
        columns={columns}
        isSmaller={true}
      />
    </Box>
  );
};

export default withSpinner()(RepaymentDebitCardsTable);
