import { lenderTransactionsPathNames } from 'consts';

import { apiClient } from 'services';

// import { LedgerTransactionsFilteredItems } from './mock';

// import { throttleUtil } from 'utils';
import { LedgerTransactionsFilterParamsPrepared } from './types';

export const filterLedgerTransactions = (data: Partial<LedgerTransactionsFilterParamsPrepared>) =>
  // throttleUtil.getDataAfter(LedgerTransactionsFilteredItems, 500);
  apiClient.post(lenderTransactionsPathNames.GET, { data });
