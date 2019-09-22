import React from 'react';

import { TablePage, withSpinner } from 'components';

import { modalNamesConst } from 'consts';

import { tableColumns } from './components';
import { CardsFilterForm } from './forms';

import { LedgerCardItemPrepared } from 'store/domains';

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
      editModalName={modalNamesConst.INFO_LEDGER_CARDS}
      FilterForm={
        <CardsFilterForm />
      }
    />
  );
};

export default withSpinner()(Cards);
