import { lenderAccountsPathNames } from 'consts';

import { apiClient } from 'services';

// import { ledgerAccountsFilteredItems, successResponseStatus } from './mock';

import { LedgerId } from '../customers';
import { LedgerAccountItem, LedgerAccountsFilterPrepared } from './types';

// import { throttleUtil } from 'utils';

export const filterLedgerAccounts = (data: Partial<LedgerAccountsFilterPrepared>) =>
  // throttleUtil.getDataAfter(ledgerAccountsFilteredItems, 500);
  apiClient.post(lenderAccountsPathNames.GET, { data });

export const addLedgerAccount = (data: Partial<LedgerAccountItem>) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClient.post(lenderAccountsPathNames.CREATE, { data });

export const addProductOverride = (accountId: number) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClient.post(lenderAccountsPathNames.CREATE_PRODUCT_OVERRIDE, {
    data: { account_id: accountId },
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

export const filterLedgerAccountsById = (data: LedgerId) =>
  // throttleUtil.getDataAfter(ledgerCustomersFilteredItems, 500);
  apiClient.post(lenderAccountsPathNames.GET, { data });
