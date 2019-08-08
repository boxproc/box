import React from 'react';
import { RowInfo } from 'react-table';

import { withSpinner } from 'components/Spinner';
import TablePage from 'components/TablePage';

import { modalNames } from 'consts';

import { tableColumns } from './transactionsComponents';

import {
  HandleFilterLedgerTransactions,
  HandleGetLedgerTransactions,
  HandleSetLedgerTransactionId,
  LedgerTransactionItemPrepared,
  OpenModal,
} from 'store/domains';

import { SelectValues } from 'types';
import { TransactionsFilterForm } from './forms';

export interface TransactionsProps {
  institutionsOptions: Array<SelectValues>;
  openModal: OpenModal;
  getLedgerTransactions: HandleGetLedgerTransactions;
  ledgerTransactions: Array<LedgerTransactionItemPrepared>;
  setLedgerTransactionId: HandleSetLedgerTransactionId;
  filterLedgerTransactions: HandleFilterLedgerTransactions;
}

const Transactions: React.FC<TransactionsProps> = ({
  openModal,
  getLedgerTransactions,
  ledgerTransactions,
  setLedgerTransactionId,
  filterLedgerTransactions,
}) => {
  React.useEffect(
    () => {
      getLedgerTransactions();
    },
    [getLedgerTransactions]
  );
  const handleOnClickRow = React.useCallback(
    (_, rowInfo: RowInfo) => {
      return {
        onDoubleClick: () => {
          setLedgerTransactionId(rowInfo.original.id);
          openModal({
            name: modalNames.LEDGER_TRANSACTION,
          });
        },
      };
    },
    [openModal]
  );
  return (
    <TablePage
      title="Transactions"
      data={ledgerTransactions}
      columns={tableColumns}
      hint="Double Click on Row to View Transaction"
      getTrGroupProps={handleOnClickRow}
      FilterForm={
        <TransactionsFilterForm
          filterLedgerTransactions={filterLedgerTransactions}
        />
      }
    />
  );
};

export default withSpinner()(Transactions);
