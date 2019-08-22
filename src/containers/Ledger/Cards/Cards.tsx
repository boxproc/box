import React from 'react';

import { withSpinner } from 'components/Spinner';
import TablePage from 'components/TablePage';

import { tableColumns } from './cardsComponents';
import { CardsFilterForm } from './forms';

import {
  LedgerCardItemPrepared,
} from 'store/domains';

export interface CardsProps {
  ledgerCards: Array<LedgerCardItemPrepared>;
}

const Cards: React.FC<CardsProps> = ({
  ledgerCards,
}) => {
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
