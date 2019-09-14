import React from 'react';

import { TablePage, withSpinner } from 'components';

import { modalNamesConst } from 'consts';

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
      editModalName={modalNamesConst.INFO_LEDGER_CARDS}
      setCurrentIdAction={setLedgerCardId}
      FilterForm={
        <CardsFilterForm />
      }
    />
  );
};

export default withSpinner()(Cards);
