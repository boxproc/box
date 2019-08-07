import { apiClient } from 'services';

// import {
//   LedgerAccountsFilteredItems,
//   LedgerAccountsItems,
//   SuccessResponseStatus,
// } from './mock';

import { LedgerAccountItem, LedgerAccountsFilterParamsPrepared } from './types';

// import { throttleUtil } from 'utils';

export const getLedgerAccounts = () =>
  // throttleUtil.getDataAfter(LedgerAccountsItems, 500);
  apiClient.post('/ui/ledger/accounts/get');

export const updateLedgerAccount = (data: Partial<LedgerAccountItem>) =>
  // throttleUtil.getDataAfter(SuccessResponseStatus, 100);
  apiClient.post('/ui/ledger/accounts/update', { data });

export const filterLedgerAccounts = (data: Partial<LedgerAccountsFilterParamsPrepared>) =>
  // throttleUtil.getDataAfter(LedgerAccountsFilteredItems, 500);
  apiClient.post('/ui/ledger/accounts/get', { data });
