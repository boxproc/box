import { lenderTransactionsPathNames } from 'consts';

import { apiClient } from 'services';

// import { ledgerTransactionsFilteredItems } from './mock';

// import { throttleUtil } from 'utils';
import { LedgerId } from '../customers';
import { LedgerTransactionsFilterPrepared } from './types';

export const filterLedgerTransactions = (data: Partial<LedgerTransactionsFilterPrepared>) =>
  // throttleUtil.getDataAfter(ledgerTransactionsFilteredItems, 500);
  apiClient.post(lenderTransactionsPathNames.GET, { data });

export const filterLedgerTransactionsById = (data: LedgerId) =>
  // throttleUtil.getDataAfter(ledgerCustomersFilteredItems, 500);
  apiClient.post(lenderTransactionsPathNames.GET, { data });
