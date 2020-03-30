import { apiClientService } from 'services';

// import { customersMock, successResponseMock } from './mock';
import {
  ICustomerData,
  ICustomersFilterToSend,
  IRepaymentDebitCardData,
  IRepaymentDirectDebitData,
  TLedgerId,
} from './types';
// import { throttleUtil } from 'utils';

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
 * Filter customers API
 */
export const filterCustomers = (data: Partial<ICustomersFilterToSend>) =>
  // throttleUtil.getDataAfter(customersMock, 500);
  apiClientService.post('ui/ledger/customers/get', { data });

/**
 * Filter customers API
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
 * Add repayment direct debit API
 */
export const addRepaymentDirectDebit = (data: Partial<IRepaymentDirectDebitData>) =>
  apiClientService.post('ui/ledger/customers/create_repayment_direct_debits', { data });

/**
 * Get repayment direct debits API
 */
export const getRepaymentDirectDebits = (data: number) =>
  apiClientService.post('ui/ledger/customers/get_repayment_direct_debits', {
    data: { customer_id: data },
  });
