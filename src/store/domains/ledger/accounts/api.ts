import { apiClientService } from 'services';

// import { ledgerAccountsFilteredItems, successResponseStatus } from './mock';

import { LedgerId } from '../customers';
import { LedgerAccountItem, LedgerAccountsFilterPrepared } from './types';

// import { throttleUtil } from 'utils';

export const filterLedgerAccounts = (data: Partial<LedgerAccountsFilterPrepared>) =>
  // throttleUtil.getDataAfter(ledgerAccountsFilteredItems, 500);
  apiClientService.post('ui/ledger/accounts/get', { data });

export const addLedgerAccount = (data: Partial<LedgerAccountItem>) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClientService.post('ui/ledger/accounts/create', { data });

export const addProductOverride = (accountId: number) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClientService.post('ui/product_designer/products/override/create_products_override', {
    data: { account_id: accountId },
  });

export const updateLedgerAccount = (data: Partial<LedgerAccountItem>) =>
  // throttleUtil.getDataAfter(successResponseStatus, 100);
  apiClientService.post('ui/ledger/accounts/update', { data });

export const getLedgerAccountCards = (accountId: number) =>
  apiClientService.post('ui/ledger/cards/get_account_cards', {
    data: { account_id: accountId },
  });

export const orderLedgerAccountCard = (accountId: number) =>
  apiClientService.post('ui/ledger/cards/order_card', {
    data: { account_id: accountId },
  });

export const filterLedgerAccountsById = (data: LedgerId) =>
  // throttleUtil.getDataAfter(ledgerCustomersFilteredItems, 500);
  apiClientService.post('ui/ledger/accounts/get', { data });
