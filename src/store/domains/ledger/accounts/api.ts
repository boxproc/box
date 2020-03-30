import { apiClientService } from 'services';

import { LedgerId } from '../customers';
// import { accountsMock, successResponseMock } from './mock';
import { IAccountData, IAccountsFilterToSend } from './types';
// import { throttleUtil } from 'utils';

/**
 * Filter accounts API
 */
export const filterAccounts = (data: Partial<IAccountsFilterToSend>) =>
  // throttleUtil.getDataAfter(accountsMock, 500);
  apiClientService.post('ui/ledger/accounts/get', { data });

/**
 * Add account API
 */
export const addAccount = (data: Partial<IAccountData>) =>
  // throttleUtil.getDataAfter(successResponseMock, 500);
  apiClientService.post('ui/ledger/accounts/create', { data });

/**
 * Add product override API
 */
export const addProductOverride = (accountId: number) =>
  // throttleUtil.getDataAfter(successResponseMock, 500);
  apiClientService.post('ui/product_designer/products/override/create_products_override', {
    data: { account_id: accountId },
  });

/**
 * Update account API
 */
export const updateAccount = (data: Partial<IAccountData>) =>
  // throttleUtil.getDataAfter(successResponseMock, 100);
  apiClientService.post('ui/ledger/accounts/update', { data });

/**
 * Get account cards API
 */
export const getAccountCards = (accountId: number) =>
  apiClientService.post('ui/ledger/cards/get_account_cards', {
    data: { account_id: accountId },
  });

/**
 * Order account card API
 */
export const orderAccountCard = (accountId: number) =>
  apiClientService.post('ui/ledger/cards/order_card', {
    data: { account_id: accountId },
  });

/**
 * Filter accounts by account ID API
 */
export const filterAccountsById = (data: LedgerId) =>
  // throttleUtil.getDataAfter(ledgerCustomersFilteredItems, 500);
  apiClientService.post('ui/ledger/accounts/get', { data });
