import React from 'react';

import { TablePage, withSpinner } from 'components';

import { modalNamesConst } from 'consts';

import { tableColumns } from './components';
import { CardsFilter } from './forms';

import { HandleFilterLedgerCards, LedgerCardItemPrepared } from 'store/domains';

export interface CardsProps {
  ledgerCards: Array<LedgerCardItemPrepared>;
  filterLedgerCards: HandleFilterLedgerCards;
}

const Cards: React.FC<CardsProps> = ({
  ledgerCards,
  filterLedgerCards,
}) => {
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
