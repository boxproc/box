import React from 'react';
import { RowInfo } from 'react-table';

import { withSpinner } from 'components/Spinner';
import TablePage from 'components/TablePage';

import { modalNames } from 'consts';

import { tableColumns } from './components';
import { TransactionsFilterForm } from './forms';

import {
  HandleSetLedgerTransactionId,
  LedgerTransactionItemPrepared,
  OpenModal,
} from 'store/domains';

export interface TransactionsProps {
  openModal: OpenModal;
  ledgerTransactions: Array<LedgerTransactionItemPrepared>;
  setLedgerTransactionId: HandleSetLedgerTransactionId;
}

const Transactions: React.FC<TransactionsProps> = ({
  openModal,
  ledgerTransactions,
  setLedgerTransactionId,
}) => {
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
    [openModal, setLedgerTransactionId]
  );
  return (
    <TablePage
      title="Transactions"
      data={ledgerTransactions}
      columns={tableColumns}
      hint="Double Click on Row to View Transaction"
      getTrGroupProps={handleOnClickRow}
      FilterForm={
        <TransactionsFilterForm />
      }
    />
  );
};

export default withSpinner()(Transactions);
