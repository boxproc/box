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
  isOrderingCard: boolean;
}

const modalName = modalNamesConst.EDIT_LEDGER_ACCOUNT;

type TCell<T extends keyof LedgerAccountsCardsItemPrepared> =
  TableCellType<LedgerAccountsCardsItemPrepared[T]>;

export const Cards: React.FC<AccountCardsProps> = ({
  getLedgerAccountCards,
  ledgerAccountCurrentId,
  ledgerAccountCards,
  orderLedgerAccountCard,
  closeModal,
  isOrderingCard,
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
          isSmaller={true}
        />
      ),
    },
    {
      maxWidth: 200,
      Header: <TableHeader title="Pan Masked" />,
      accessor: 'panMasked',
      Cell: (props: TCell<'panMasked'>) => (
        <TableCell
          value={props.value}
          isSmaller={true}
        />
      ),
    },
    {
      maxWidth: 100,
      Header: <TableHeader title="Expiry Date" />,
      accessor: 'expiryDate',
      Cell: (props: TCell<'expiryDate'>) => (
        <TableCell
          value={props.value}
          isDate={true}
          isSmaller={true}
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
          isSmaller={true}
        />
      ),
    },
  ];

  return (
    <React.Fragment>
      <Box mt="20px" mb="15px">
        <Button
          disabled={isOrderingCard}
          type="reset"
          onClick={handleOrderLedgerAccountCard}
          text={isOrderingCard ? 'Ordering...' : 'Order Card'}
          isFocused={true}
        />
      </Box>
      <Table
        title="Account Cards"
        pageSize={8}
        data={ledgerAccountCards}
        columns={columns}
        isSmaller={true}
      />
      <Flex justifyContent="flex-end">
        <Box mt="10px">
          <Button
            type="reset"
            onClick={handleOnCancel}
            text="Close"
          />
        </Box>
      </Flex>
    </React.Fragment>
  );
};

export default withModal(withSpinner()(
  Cards
));
