import React from 'react';

import { withSpinner } from 'components/Spinner';
import TablePage from 'components/TablePage';

import { tableColumns } from './cardsComponents';
import { CardsFilterForm } from './forms';

import { modalNames } from 'consts';
import { RowInfo } from 'react-table';
import {
  HandleSetLedgerLedgerCardId,
  LedgerCardItemPrepared,
  OpenModal,

} from 'store/domains';

export interface CardsProps {
  openModal: OpenModal;
  ledgerCards: Array<LedgerCardItemPrepared>;
  setLedgerCardId: HandleSetLedgerLedgerCardId;
}

const Cards: React.FC<CardsProps> = ({
  openModal,
  ledgerCards,
  setLedgerCardId,
}) => {
  const handleOnClickRow = React.useCallback(
    (_, rowInfo: RowInfo) => {
      return {
        onDoubleClick: () => {
          setLedgerCardId(rowInfo.original.id);
          openModal({
            name: modalNames.INFO_LEDGER_CARDS,
          });
        },
      };
    },
    [openModal, setLedgerCardId]
  );
  return (
    <TablePage
      title="Cards"
      data={ledgerCards}
      columns={tableColumns}
      hint="Double Click on Row to View Card"
      getTrGroupProps={handleOnClickRow}
      FilterForm={
        <CardsFilterForm />
      }
    />
  );
};

export default withSpinner()(Cards);
