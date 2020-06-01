// import { successResponseMock } from 'consts';
import { successResponseMock } from 'consts';
import { apiClientService } from 'services';
// import { currencyLimitMock, customersMock, directDebitAccountsMock } from './mock';
import { directDebitAccountsMock, directDebitMandatesMock } from './mock';
import {
  ICurrencyLimitData,
  ICustomerData,
  ICustomersFilterToSend,
  IDirectDebitAccountData,
  IRepaymentDebitCardData,
  TLedgerId,
} from './types';

import { throttleUtil } from 'utils';

// import { throttleUtil } from 'utils';

/**
 * Filter customers API
 */
export const filterCustomers = (data: Partial<ICustomersFilterToSend>) =>
  // throttleUtil.getDataAfter(customersMock, 500);
  apiClientService.post('ui/ledger/customers/get', { data });

/**
 * Delete customer API
 */
export const deleteCustomer = (id: number) =>
  // throttleUtil.getDataAfter(successResponseMock, 500);
  apiClientService.post('ui/ledger/customers/delete', {
    data: { id },
  });

/**
 * Add customer API
 */
export const addCustomer = (data: Partial<ICustomerData>) =>
  // throttleUtil.getDataAfter(successResponseMock, 500);
  apiClientService.post('ui/ledger/customers/create', { data });

/**
 * Update customer API
 */
export const updateCustomer = (data: Partial<ICustomerData>) =>
  // throttleUtil.getDataAfter(successResponseMock, 100);
  apiClientService.post('ui/ledger/customers/update', { data });

/**
 * Filter customers by ID API
 */
export const filterCustomersById = (data: TLedgerId) =>
  // throttleUtil.getDataAfter(customersMock, 500);
  apiClientService.post('ui/ledger/customers/get', { data });

/**
 * Add repayment debit card API
 */
export const addRepaymentDebitCard = (data: Partial<IRepaymentDebitCardData>) =>
  apiClientService.post('ui/ledger/customers/create_repayment_debit_card', { data });

/**
 * Get repayment debit cards API
 */
export const getRepaymentDebitCards = (data: number) =>
  apiClientService.post('ui/ledger/customers/get_repayment_debit_card', {
    data: { customer_id: data },
  });

/**
 * Add direct debit account API
 */
export const addDirectDebitAccount = (data: Partial<IDirectDebitAccountData>) =>
  apiClientService.post('ui/ledger/customers/create_repayment_direct_debits', { data });

/**
 * Get direct debit accounts API
 */
export const getDirectDebitAccounts = (data: number) =>
  throttleUtil.getDataAfter(directDebitAccountsMock, 500);
// apiClientService.post('ui/ledger/customers/get_repayment_direct_debits', {
//   data: { customer_id: data },
// });

/**
 * Add direct debit mandate API
 */
export const addDirectDebitMandate = (data: number) =>
  throttleUtil.getDataAfter(successResponseMock, 500);
// apiClientService.post('', {
//   data: { account_id: data },
// });

/**
 * Get direct debit mandates API
 */
export const getDirectDebitMandates = (data: number) =>
  throttleUtil.getDataAfter(directDebitMandatesMock, 500);
// apiClientService.post('', {
//   data: { account_id: data },
// });

/**
 * Get customer currency limits API
 */
export const getCurrencyLimit = (id: number) =>
  // throttleUtil.getDataAfter(currencyLimitMock, 500);
  apiClientService.post('ui/ledger/customers/get_limit', {
    data: { customer_id: id },
  });

/**
 * Update customer currency limit API
 */
export const updateCurrencyLimit = (data: Partial<ICurrencyLimitData>) =>
  // throttleUtil.getDataAfter(successResponseMock, 100);
  apiClientService.put('ui/ledger/customers/update_limit', { data });
