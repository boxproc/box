import { apiClient } from 'services';

// import { LedgerTransactionsFilteredItems, ledgerTransactionsItems } from './mock';

// import { throttleUtil } from 'utils';
import { LedgerTransactionsFilterParamsPrepared } from './types';

export const getLedgerTransactions = () =>
  // throttleUtil.getDataAfter(ledgerTransactionsItems, 500);
  apiClient.post('/ui/ledger/transactions/get');

export const filterLedgerTransactions = (data: Partial<LedgerTransactionsFilterParamsPrepared>) =>
  // throttleUtil.getDataAfter(LedgerTransactionsFilteredItems, 500);
  apiClient.post('/ui/ledger/transactions/get', { data });
