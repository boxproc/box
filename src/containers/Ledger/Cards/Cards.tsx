import React from 'react';

import { TablePage, withSpinner } from 'components';

import { modalNamesConst } from 'consts';

import { tableColumns } from './components';
import { CardsFilter } from './forms';

import { HandleFilterLedgerCards, LedgerCardItemPrepared, ResetCards } from 'store/domains';

export interface CardsProps {
  ledgerCards: Array<LedgerCardItemPrepared>;
  filterLedgerCards: HandleFilterLedgerCards;
  resetCards: ResetCards;
}

const Cards: React.FC<CardsProps> = ({
  ledgerCards,
  filterLedgerCards,
  resetCards,
}) => {
  React.useEffect(
    () => {
      return () => resetCards();
    },
    [resetCards]
  );

  return (
    <TablePage
      title="Cards"
      data={ledgerCards}
      columns={tableColumns}
      editModalName={modalNamesConst.INFO_LEDGER_CARDS}
      filterAction={filterLedgerCards}
      FilterForm={
        <CardsFilter />
      }
    />
  );
};

export default withSpinner()(Cards);
