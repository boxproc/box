import React from 'react';

import { withSpinner } from 'components/Spinner';
import TablePage from 'components/TablePage';

import { modalNames } from 'consts';

import { tableColumns } from './cardsComponents';
import { CardsFilterForm } from './forms';

import {
  HandleSetLedgerLedgerCardId,
  LedgerCardItemPrepared,
} from 'store/domains';

export interface CardsProps {
  ledgerCards: Array<LedgerCardItemPrepared>;
  setLedgerCardId: HandleSetLedgerLedgerCardId;
}

const Cards: React.FC<CardsProps> = ({
  ledgerCards,
  setLedgerCardId,
}) => {
  return (
    <TablePage
      title="Cards"
      data={ledgerCards}
      columns={tableColumns}
      hint="Double Click on Row to View Card"
      editModalName={modalNames.INFO_LEDGER_CARDS}
      setCurrentIdAction={setLedgerCardId}
      FilterForm={
        <CardsFilterForm />
      }
    />
  );
};

export default withSpinner()(Cards);
