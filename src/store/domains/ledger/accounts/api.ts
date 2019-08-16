import { lenderAccountsPathNames } from 'consts';

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
  apiClient.post(lenderAccountsPathNames.GET);

export const addLedgerAccount = (data: Partial<LedgerAccountItem>) =>
  // throttleUtil.getDataAfter(SuccessResponseStatus, 500);
  apiClient.post(lenderAccountsPathNames.CREATE, { data });

export const updateLedgerAccount = (data: Partial<LedgerAccountItem>) =>
  // throttleUtil.getDataAfter(SuccessResponseStatus, 100);
  apiClient.post(lenderAccountsPathNames.UPDATE, { data });

export const filterLedgerAccounts = (data: Partial<LedgerAccountsFilterParamsPrepared>) =>
  // throttleUtil.getDataAfter(LedgerAccountsFilteredItems, 500);
  apiClient.post(lenderAccountsPathNames.GET, { data });
