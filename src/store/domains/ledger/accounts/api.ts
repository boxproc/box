import { lenderAccountsPathNames } from 'consts';

import { apiClient } from 'services';

// import { ledgerAccountsFilteredItems, successResponseStatus } from './mock';

import { LedgerAccountItem, LedgerAccountsFilterPrepared } from './types';

// import { throttleUtil } from 'utils';

export const filterLedgerAccounts = (data: Partial<LedgerAccountsFilterPrepared>) =>
  // throttleUtil.getDataAfter(ledgerAccountsFilteredItems, 500);
  apiClient.post(lenderAccountsPathNames.GET, { data });

export const addLedgerAccount = (data: Partial<LedgerAccountItem>) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClient.post(lenderAccountsPathNames.CREATE, { data });

export const addProductOverride = (id: number) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClient.post(lenderAccountsPathNames.CREATE_PRODUCT_OVERRIDE, {
    data: { product_id: id },
  });

export const updateLedgerAccount = (data: Partial<LedgerAccountItem>) =>
  // throttleUtil.getDataAfter(successResponseStatus, 100);
  apiClient.post(lenderAccountsPathNames.UPDATE, { data });

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
