import { apiClient } from 'services';

// import {
//   LedgerCustomersFilteredItems,
//   LedgerCustomersItems,
//   SuccessResponseStatus,
// } from './mock';

import { LedgerCustomerItem, LedgerCustomersFilterParamsPrepared } from './types';

// import { throttleUtil } from 'utils';

export const getLedgerCustomers = () =>
  // throttleUtil.getDataAfter(LedgerCustomersItems, 500);
  apiClient.post('/ui/ledger/customers/get');

export const deleteLedgerCustomer = (id: number) =>
  // throttleUtil.getDataAfter(SuccessResponseStatus, 500);
  apiClient.post('/ui/ledger/customers/delete', {
    data: { id },
  });

export const addLedgerCustomer = (data: Partial<LedgerCustomerItem>) =>
  // throttleUtil.getDataAfter(SuccessResponseStatus, 500);
  apiClient.post('/ui/ledger/customers/create', { data });

export const updateLedgerCustomer = (data: Partial<LedgerCustomerItem>) =>
  // throttleUtil.getDataAfter(SuccessResponseStatus, 100);
  apiClient.post('/ui/ledger/customers/update', { data });

export const filterLedgerCustomers = (data: Partial<LedgerCustomersFilterParamsPrepared>) =>
  // throttleUtil.getDataAfter(LedgerCustomersFilteredItems, 500);
  apiClient.post('/ui/ledger/customers/get', { data });
