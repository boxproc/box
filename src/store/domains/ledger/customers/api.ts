// import { lenderCustomersPathNames } from 'consts';

// import { apiClient } from 'services';

import {
  LedgerCustomersFilteredItems,
  LedgerCustomersItems,
  SuccessResponseStatus,
} from './mock';

import { LedgerCustomerItem, LedgerCustomersFilterParamsPrepared } from './types';

import { throttleUtil } from 'utils';

export const getLedgerCustomers = () =>
  throttleUtil.getDataAfter(LedgerCustomersItems, 500);
  // apiClient.post(lenderCustomersPathNames.GET);

export const deleteLedgerCustomer = (id: number) =>
  throttleUtil.getDataAfter(SuccessResponseStatus, 500);
  // apiClient.post(lenderCustomersPathNames.DELETE, {
  //   data: { id },
  // });

export const addLedgerCustomer = (data: Partial<LedgerCustomerItem>) =>
  throttleUtil.getDataAfter(SuccessResponseStatus, 500);
  // apiClient.post(lenderCustomersPathNames.CREATE, { data });

export const updateLedgerCustomer = (data: Partial<LedgerCustomerItem>) =>
  throttleUtil.getDataAfter(SuccessResponseStatus, 100);
  // apiClient.post(lenderCustomersPathNames.UPDATE, { data });

export const filterLedgerCustomers = (data: Partial<LedgerCustomersFilterParamsPrepared>) =>
  throttleUtil.getDataAfter(LedgerCustomersFilteredItems, 500);
  // apiClient.post(lenderCustomersPathNames.GET, { data });
