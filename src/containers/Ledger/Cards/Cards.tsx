import React from 'react';

import { withSpinner } from 'components';

import { modalNamesConst } from 'consts';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';
import { CardsFilter } from './forms';

import {
  HandleFilterLedgerAccountsById,
  HandleFilterLedgerCards,
  HandleFilterLedgerCustomersById,
  HandleFilterLedgerStatementsById,
  HandleFilterLedgerTransactionsById,
  LedgerCardItemPrepared,
  ResetCards
} from 'store/domains';

import { SelectValues } from 'types';

export interface CardsProps {
  currentId: number;
  ledgerCards: Array<LedgerCardItemPrepared>;
  filterLedgerCards: HandleFilterLedgerCards;
  institutionsOptions: Array<SelectValues>;
  filterLedgerCustomersById: HandleFilterLedgerCustomersById;
  filterLedgerAccountsById: HandleFilterLedgerAccountsById;
  filterLedgerTransactionsById: HandleFilterLedgerTransactionsById;
  filterLedgerStatementsById: HandleFilterLedgerStatementsById;
  resetCards: ResetCards;
}

const Cards: React.FC<CardsProps> = ({
  ledgerCards,
  filterLedgerCards,
  filterLedgerCustomersById,
  filterLedgerAccountsById,
  filterLedgerTransactionsById,
  filterLedgerStatementsById,
  institutionsOptions,
  currentId,
  resetCards,
}) => {
  React.useEffect(
    () => {
      return () => resetCards();
    },
    [resetCards]
  );

  const contextMenuItems = React.useMemo(
    () => [
      {
        isDivider: true,
      },
      {
        name: 'Accounts',
        action: () => filterLedgerAccountsById({ card_id: currentId }),
      },
      {
        name: 'Customers',
        action: () => filterLedgerCustomersById({ card_id: currentId }),
      },
      {
        name: 'Statements',
        action: () => filterLedgerStatementsById({ card_id: currentId }),
      },
      {
        name: 'Transactions',
        action: () => filterLedgerTransactionsById({ card_id: currentId }),
      },
    ],
    [
      filterLedgerCustomersById,
      filterLedgerTransactionsById,
      filterLedgerStatementsById,
      filterLedgerAccountsById,
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
      data={ledgerCards}
      columns={tableColumns}
      editModalName={modalNamesConst.INFO_LEDGER_CARDS}
      contextMenuItems={contextMenuItems}
      filterAction={filterLedgerCards}
      isDownloadButton={true}
      initialFilterValues={initialFilterValues}
      FilterForm={
        <CardsFilter institutionsOptions={institutionsOptions} />
      }
    />
  );
};

export default withSpinner({
  isFixed: true,
})(Cards);
