import { lenderCustomersPathNames } from 'consts';

import { apiClient } from 'services';

// import { ledgerCustomersFilteredItems, successResponseStatus } from './mock';

import { LedgerCustomerItem, LedgerCustomersFilterPrepared, LedgerId } from './types';

// import { throttleUtil } from 'utils';

export const deleteLedgerCustomer = (id: number) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClient.post(lenderCustomersPathNames.DELETE, {
    data: { id },
  });

export const addLedgerCustomer = (data: Partial<LedgerCustomerItem>) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClient.post(lenderCustomersPathNames.CREATE, { data });

export const updateLedgerCustomer = (data: Partial<LedgerCustomerItem>) =>
  // throttleUtil.getDataAfter(successResponseStatus, 100);
  apiClient.post(lenderCustomersPathNames.UPDATE, { data });

export const filterLedgerCustomers = (data: Partial<LedgerCustomersFilterPrepared>) =>
  // throttleUtil.getDataAfter(ledgerCustomersFilteredItems, 500);
  apiClient.post(lenderCustomersPathNames.GET, { data });

export const filterLedgerCustomersById = (data: LedgerId) =>
  // throttleUtil.getDataAfter(ledgerCustomersFilteredItems, 500);
  apiClient.post(lenderCustomersPathNames.GET, { data });
