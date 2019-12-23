import React from 'react';

import { Box, Flex } from '@rebass/grid';

import { Button, Table, withSpinner } from 'components';

import { tableColumns } from './tableColumns';

import {
  HandleGetLedgerAccountCards,
  HandleOrderLedgerAccountCard,
  LedgerAccountsCardsItemPrepared
} from 'store/domains';

interface AccountCardsProps {
  ledgerAccountCurrentId: number;
  getLedgerAccountCards: HandleGetLedgerAccountCards;
  ledgerAccountCards: Array<LedgerAccountsCardsItemPrepared>;
  orderLedgerAccountCard: HandleOrderLedgerAccountCard;
  isOrderingCard: boolean;
  onCancel: () => void;
  isReadOnly: boolean;
}

export const Cards: React.FC<AccountCardsProps> = ({
  getLedgerAccountCards,
  ledgerAccountCurrentId,
  ledgerAccountCards,
  orderLedgerAccountCard,
  onCancel,
  isOrderingCard,
  isReadOnly,
}) => {
  React.useEffect(
    () => {
      getLedgerAccountCards(ledgerAccountCurrentId);
    },
    [getLedgerAccountCards, ledgerAccountCurrentId]
  );

  const handleOrderLedgerAccountCard = React.useCallback(
    () => orderLedgerAccountCard(ledgerAccountCurrentId),
    [ledgerAccountCurrentId, orderLedgerAccountCard]
  );

  return (
    <React.Fragment>
      {!isReadOnly && (
        <Box mt="20px" mb="15px">
          <Button
            disabled={isOrderingCard}
            type="reset"
            onClick={handleOrderLedgerAccountCard}
            text={isOrderingCard ? 'Ordering...' : 'Order Card'}
            isFocused={true}
          />
        </Box>
      )}
      <Box mt="20px">
        <Table
          title="Account Cards"
          pageSize={8}
          data={ledgerAccountCards}
          columns={tableColumns}
          isSmaller={true}
        />
      </Box>
      <Flex justifyContent="flex-end">
        <Box mt="10px">
          <Button
            type="reset"
            onClick={onCancel}
            text="Close"
          />
        </Box>
      </Flex>
    </React.Fragment>
  );
};

export default withSpinner()(Cards);
