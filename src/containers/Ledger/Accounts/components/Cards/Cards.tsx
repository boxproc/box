import React from 'react';
import { ImmutableArray } from 'seamless-immutable';

import { Box, Flex } from '@rebass/grid';

import { Button, Table, withSpinner } from 'components';

import { tableColumns } from './tableColumns';

import {
  IAccountCard,
  THandleGetAccountCards,
  THandleOrderAccountCard,
} from 'store';

interface IAccountCards {
  accountCurrentId: number;
  getAccountCards: THandleGetAccountCards;
  accountCards: ImmutableArray<IAccountCard>;
  orderAccountCard: THandleOrderAccountCard;
  isOrderingCard: boolean;
  onCancel: () => void;
  isReadOnly: boolean;
}

export const Cards: React.FC<IAccountCards> = ({
  getAccountCards,
  accountCurrentId,
  accountCards,
  orderAccountCard,
  onCancel,
  isOrderingCard,
  isReadOnly,
}) => {
  React.useEffect(
    () => {
      getAccountCards(accountCurrentId);
    },
    [getAccountCards, accountCurrentId]
  );

  const handleOrderAccountCard = React.useCallback(
    () => orderAccountCard(accountCurrentId),
    [accountCurrentId, orderAccountCard]
  );

  return (
    <React.Fragment>
      {!isReadOnly && (
        <Box mt="20px" mb="15px">
          <Button
            disabled={isOrderingCard}
            type="reset"
            onClick={handleOrderAccountCard}
            text={isOrderingCard ? 'Ordering...' : 'Order Card'}
            isFocused={true}
          />
        </Box>
      )}
      <Box mt="15px">
        <Table
          title="Account Cards"
          pageSize={8}
          data={accountCards}
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
