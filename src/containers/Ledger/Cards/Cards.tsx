import React from 'react';
import { ImmutableArray } from 'seamless-immutable';

import { modalNamesConst } from 'consts';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';
import { CardsFilter } from './forms';

import {
  HandleFilterLedgerAccountsById,
  HandleFilterLedgerCards,
  HandleFilterLedgerCustomersById,
  HandleFilterLedgerTransactionsById,
  LedgerCardItemPrepared,
  ResetCards,
  THandleFilterStatementsById,
} from 'store';

import { ISelectValue } from 'types';

export interface CardsProps {
  currentId: number;
  cards: ImmutableArray<LedgerCardItemPrepared>;
  filterCards: HandleFilterLedgerCards;
  institutionsOptions: Array<ISelectValue>;
  filterCustomersById: HandleFilterLedgerCustomersById;
  filterAccountsById: HandleFilterLedgerAccountsById;
  filterTransactionsById: HandleFilterLedgerTransactionsById;
  filterStatementsById: THandleFilterStatementsById;
  resetCards: ResetCards;
  isLoading: boolean;
}

const Cards: React.FC<CardsProps> = ({
  cards,
  filterCards,
  filterCustomersById,
  filterAccountsById,
  filterTransactionsById,
  filterStatementsById,
  institutionsOptions,
  currentId,
  resetCards,
  isLoading,
}) => {
  React.useEffect(
    () => {
      return () => resetCards();
    },
    [resetCards]
  );

  const contextMenuItems = React.useMemo(
    () => [
      { isDivider: true },
      {
        name: 'Accounts',
        action: () => filterAccountsById({ card_id: currentId }),
      },
      {
        name: 'Customers',
        action: () => filterCustomersById({ card_id: currentId }),
      },
      {
        name: 'Statements',
        action: () => filterStatementsById({ card_id: currentId }),
      },
      {
        name: 'Transactions',
        action: () => filterTransactionsById({ card_id: currentId }),
      },
    ],
    [
      filterCustomersById,
      filterTransactionsById,
      filterStatementsById,
      filterAccountsById,
      currentId,
    ]
  );

  const initialFilterValues = React.useMemo(
    () => {
      return {
        institutionId: institutionsOptions[0],
      };
    },
    [institutionsOptions]
  );

  return (
    <PageTemplate
      title="Cards"
      data={cards}
      columns={tableColumns}
      viewingModalName={modalNamesConst.INFO_CARDS}
      contextMenuItems={contextMenuItems}
      filterAction={filterCards}
      isDownloadButton={true}
      isLoading={isLoading}
      initialFilterValues={initialFilterValues}
      FilterForm={
        <CardsFilter
          isDisabled={isLoading}
          institutionsOptions={institutionsOptions}
        />
      }
    />
  );
};

export default Cards;
