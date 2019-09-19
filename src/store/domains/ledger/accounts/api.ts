import { lenderAccountsPathNames } from 'consts';

import { apiClient } from 'services';

// import { LedgerAccountsFilteredItems, SuccessResponseStatus } from './mock';

import { LedgerAccountItem, LedgerAccountsFilterParamsPrepared } from './types';

// import { throttleUtil } from 'utils';

export const addLedgerAccount = (data: Partial<LedgerAccountItem>) =>
  // throttleUtil.getDataAfter(SuccessResponseStatus, 500);
  apiClient.post(lenderAccountsPathNames.CREATE, { data });

export const updateLedgerAccount = (data: Partial<LedgerAccountItem>) =>
  // throttleUtil.getDataAfter(SuccessResponseStatus, 100);
  apiClient.post(lenderAccountsPathNames.UPDATE, { data });

export const filterLedgerAccounts = (data: Partial<LedgerAccountsFilterParamsPrepared>) =>
  // throttleUtil.getDataAfter(LedgerAccountsFilteredItems, 500);
  apiClient.post(lenderAccountsPathNames.GET, { data });

export const getLedgerAccountCards = (accountId: number) =>
  apiClient.post(lenderAccountsPathNames.GET_ACCOUNT_CARDS, {
    data: { account_id: accountId },
  });

export const orderLedgerAccountCard = (accountId: number) =>
  apiClient.post(lenderAccountsPathNames.ORDER_ACCOUNT_CARD, {
    data: { account_id: accountId },
  });

export const getLedgerLastStatement = (accountId: number) =>
  apiClient.post(lenderAccountsPathNames.GET_LAST_STATEMENT, {
    data: { account_id: accountId },
  });
