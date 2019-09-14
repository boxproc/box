import React from 'react';

import { Box, Flex } from '@rebass/grid';

import { Button, Table, TableCell, TableHeader, withSpinner } from 'components';

import { modalNamesConst } from 'consts';

import {
  closeModal,
  HandleGetLedgerAccountCards,
  HandleOrderLedgerAccountCard,
  LedgerAccountsCardsItemPrepared
} from 'store/domains';

import { TableCellType } from 'types';

interface AccountCardsProps {
  ledgerAccountCurrentId: number;
  getLedgerAccountCards: HandleGetLedgerAccountCards;
  ledgerAccountCards: Array<LedgerAccountsCardsItemPrepared>;
  orderLedgerAccountCard: HandleOrderLedgerAccountCard;
}

const modalName = modalNamesConst.INFO_LEDGER_CARDS;

type TCell<T extends keyof LedgerAccountsCardsItemPrepared> =
  TableCellType<LedgerAccountsCardsItemPrepared[T]>;

export const Cards: React.FC<AccountCardsProps> = ({
  getLedgerAccountCards,
  ledgerAccountCurrentId,
  ledgerAccountCards,
  orderLedgerAccountCard,
}) => {
  React.useEffect(
    () => {
      getLedgerAccountCards(ledgerAccountCurrentId);
    },
    [getLedgerAccountCards, ledgerAccountCurrentId]
  );

  const columns = [
    {
      maxWidth: 150,
      Header: <TableHeader title="Pan Alias" />,
      accessor: 'panAlias',
      Cell: (props: TCell<'panAlias'>) => (
        <TableCell
          isNumber={true}
          value={props.value}
        />
      ),
    },
    {
      maxWidth: 300,
      Header: <TableHeader title="Pan Masked" />,
      accessor: 'panMasked',
      Cell: (props: TCell<'panMasked'>) => (
        <TableCell
          value={props.value}
        />
      ),
    },
    {
      maxWidth: 150,
      Header: <TableHeader title="Expiry Date" />,
      accessor: 'expiryDate',
      Cell: (props: TCell<'expiryDate'>) => (
        <TableCell
          value={props.value}
          isDate={true}
        />
      ),
    },
    {
      maxWidth: 150,
      Header: <TableHeader title="Status" />,
      accessor: 'status',
      Cell: (props: TCell<'status'>) => (
        <TableCell
          value={props.value}
        />
      ),
    },
  ];

  return (
    <React.Fragment>
      <Box mb="25px">
        <Button
          type="reset"
          onClick={() => orderLedgerAccountCard(ledgerAccountCurrentId)}
          text="Order Card"
        />
      </Box>
      <Table
        title="Account Cards"
        pageSize={5}
        data={ledgerAccountCards}
        columns={columns}
      />
      <Flex justifyContent="flex-end">
        <Button
          onClick={() => closeModal(modalName)}
          text="Close"
        />
      </Flex>
    </React.Fragment>
  );
};

export default withSpinner()(Cards);
