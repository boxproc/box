// import { apiClient } from 'services';

import { LedgerTransactionsFilteredItems, ledgerTransactionsItems } from './mock';

import { throttleUtil } from 'utils';

export const getLedgerTransactions = () =>
   throttleUtil.getDataAfter(ledgerTransactionsItems, 500);
  // apiClient.post('/ui/ledger/transactions/get');

export const filterLedgerTransactions = (data: any) =>
  throttleUtil.getDataAfter(LedgerTransactionsFilteredItems, 500);
//   apiClient.post('/ui/ledger/accounts/get', { data });
