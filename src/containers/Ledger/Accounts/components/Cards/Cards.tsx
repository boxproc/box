import React from 'react';
import { ImmutableArray } from 'seamless-immutable';

import { Box, Flex } from '@rebass/grid';

import { Button, Hr, T3, Table, withSpinner } from 'components';
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
        <Box mt="20px" mb="10px">
          <Button
            text="Order Card"
            onClick={handleOrderAccountCard}
            isLoading={isOrderingCard}
            isFocused={true}
            type="reset"
          />
        </Box>
      )}
      <T3>Cards</T3>
      <Box width="550px" mb="20px">
        <Table
          title="Account Cards"
          pageSize={8}
          data={accountCards}
          columns={tableColumns}
          isSmaller={true}
        />
      </Box>
      <Hr />
      <Flex justifyContent="flex-end">
        <Button
          type="reset"
          onClick={onCancel}
          text="Close"
        />
      </Flex>
    </React.Fragment>
  );
};

export default withSpinner()(Cards);
