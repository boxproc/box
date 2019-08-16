import { lenderTransactionsPathNames } from 'consts';

import { apiClient } from 'services';

// import { LedgerTransactionsFilteredItems, ledgerTransactionsItems } from './mock';

// import { throttleUtil } from 'utils';
import { LedgerTransactionsFilterParamsPrepared } from './types';

export const getLedgerTransactions = () =>
  // throttleUtil.getDataAfter(ledgerTransactionsItems, 500);
  apiClient.post(lenderTransactionsPathNames.GET);

export const filterLedgerTransactions = (data: Partial<LedgerTransactionsFilterParamsPrepared>) =>
  // throttleUtil.getDataAfter(LedgerTransactionsFilteredItems, 500);
  apiClient.post(lenderTransactionsPathNames.GET, { data });
