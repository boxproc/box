// import { successResponseMock } from 'consts';
import { apiClientService } from 'services';
// import {
//   currencyLimitMock,
//   customersMock,
//   directDebitMandatesMock,
// } from './mock';

import {
  ICurrencyLimitData,
  ICustomerData,
  ICustomersFilterToSend,
  IDirectDebitAccountFormData,
  IRepaymentDebitCardData,
  TLedgerId,
} from './types';

// import { throttleUtil } from 'utils';

/**
 * Filter customers API
 */
export const filterCustomers = (data: Partial<ICustomersFilterToSend>) =>
  // throttleUtil.getDataAfter(customersMock, 500);
  apiClientService.post('ui/ledger/customers/get', { data });

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
export const addDirectDebitAccount = (data: Partial<IDirectDebitAccountFormData>) =>
  apiClientService.post('ui/ledger/direct_debits', { data });

/**
 * Get direct debit mandates API
 */
export const getDirectDebitMandates = (data: {
  accountId?: number;
  customerId?: number;
}) => {
  const path = data.accountId ? '' : 'ui/ledger/direct_debits/mandates/get';
  const preparedData = data.accountId
    ? { account_id: data.accountId }
    : { customer_id: data.customerId };

  // return throttleUtil.getDataAfter(directDebitMandatesMock, 500);
  return apiClientService.post(path, { data: preparedData });
};

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
