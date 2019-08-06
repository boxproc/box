// import { apiClient } from 'services';

import {
  LedgerCustomersFilteredItems,
  LedgerCustomersItems,
  SuccessResponseStatus,
} from './mock';

import { throttleUtil } from 'utils';
import { LedgerCustomerItem, LedgerCustomersFilterParamsPrepared } from './types';

export const getLedgerCustomers = () =>
  throttleUtil.getDataAfter(LedgerCustomersItems, 500);
// apiClient.post('');

export const deleteLedgerCustomer = (id: number) =>
  throttleUtil.getDataAfter(SuccessResponseStatus, 500);
// apiClient.post('', {
//   data: { id },
// });

export const addLedgerCustomer = (data: Partial<LedgerCustomerItem>) =>
  throttleUtil.getDataAfter(SuccessResponseStatus, 500);
// apiClient.post('', { data });

export const updateLedgerCustomer = (data: Partial<LedgerCustomerItem>) =>
  throttleUtil.getDataAfter(SuccessResponseStatus, 100);
// apiClient.post('', { data });

export const filterLedgerCustomers = (data: Partial<LedgerCustomersFilterParamsPrepared>) =>
  throttleUtil.getDataAfter(LedgerCustomersFilteredItems, 500);
  // apiClient.post('', {data});
