import React from 'react';

import { withSpinner } from 'components/Spinner';
import TablePage from 'components/TablePage';

import { tableColumns } from './cardsComponents';
import { CardsFilterForm } from './forms';

import {
  HandleGetLedgerCards,
  LedgerCardItemPrepared,
} from 'store/domains';

export interface CardsProps {
  getLedgerCards: HandleGetLedgerCards;
  ledgerCards: Array<LedgerCardItemPrepared>;
}

const Cards: React.FC<CardsProps> = ({
  getLedgerCards,
  ledgerCards,
}) => {
  React.useEffect(
    () => {
        getLedgerCards();
    },
    [getLedgerCards]
  );

  return (
    <TablePage
      title="Cards"
      data={ledgerCards}
      columns={tableColumns}
      FilterForm={
        <CardsFilterForm />
      }
    />
  );
};

export default withSpinner()(Cards);
