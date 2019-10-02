import React from 'react';

import { Box, Flex } from '@rebass/grid';

import { Button, Table, TableCell, TableHeader, withSpinner } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst } from 'consts';

import {
  HandleGetLedgerAccountCards,
  HandleOrderLedgerAccountCard,
  LedgerAccountsCardsItemPrepared
} from 'store/domains';

import { TableCellType } from 'types';

interface AccountCardsProps extends WithModalProps {
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
  closeModal,
}) => {
  React.useEffect(
    () => {
      getLedgerAccountCards(ledgerAccountCurrentId);
    },
    [getLedgerAccountCards, ledgerAccountCurrentId]
  );

  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  const handleOrderLedgerAccountCard = React.useCallback(
    () => orderLedgerAccountCard(ledgerAccountCurrentId),
    [ledgerAccountCurrentId, orderLedgerAccountCard]
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
      maxWidth: 120,
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
      maxWidth: 100,
      Header: <TableHeader title="Status" />,
      accessor: 'cardStatus',
      Cell: (props: TCell<'cardStatus'>) => (
        <TableCell
          value={props.value}
        />
      ),
    },
  ];

  return (
    <React.Fragment>
      <Box mb="15px">
        <Button
          type="reset"
          onClick={handleOrderLedgerAccountCard}
          text="Order Card"
          isFocused={true}
        />
      </Box>
      <Table
        title="Account Cards"
        pageSize={5}
        data={ledgerAccountCards}
        columns={columns}
      />
      <Flex justifyContent="flex-end">
        <Box mt="10px">
          <Button
            onClick={handleOnCancel}
            text="Close"
          />
        </Box>
      </Flex>
    </React.Fragment>
  );
};

export default withSpinner()(
  withModal(Cards)
);
