import { apiUrls } from 'consts';
import { apiClient } from 'services';

// import { ledgerCustomersFilteredItems, successResponseStatus } from './mock';

import {
  LedgerCustomerItem,
  LedgerCustomersFilterPrepared,
  LedgerId,
  RepaymentDebitCardsItem,
  RepaymentDirectDebitsItem,
} from './types';

// import { throttleUtil } from 'utils';

export const deleteLedgerCustomer = (id: number) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClient.post(apiUrls.customers.DELETE, {
    data: { id },
  });

export const addLedgerCustomer = (data: Partial<LedgerCustomerItem>) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClient.post(apiUrls.customers.CREATE, { data });

export const updateLedgerCustomer = (data: Partial<LedgerCustomerItem>) =>
  // throttleUtil.getDataAfter(successResponseStatus, 100);
  apiClient.post(apiUrls.customers.UPDATE, { data });

export const filterLedgerCustomers = (data: Partial<LedgerCustomersFilterPrepared>) =>
  // throttleUtil.getDataAfter(ledgerCustomersFilteredItems, 500);
  apiClient.post(apiUrls.customers.GET, { data });

export const filterLedgerCustomersById = (data: LedgerId) =>
  // throttleUtil.getDataAfter(ledgerCustomersFilteredItems, 500);
  apiClient.post(apiUrls.customers.GET, { data });

export const addRepaymentDebitCard = (data: Partial<RepaymentDebitCardsItem>) =>
  apiClient.post(apiUrls.customers.CREATE_REPAYMENT_DEBIT_CARD, { data });

export const getRepaymentDebitCards = (data: number) =>
  apiClient.post(apiUrls.customers.GET_REPAYMENT_DEBIT_CARDS, {
    data: { customer_id: data },
  });

export const addRepaymentDirectDebit = (data: Partial<RepaymentDirectDebitsItem>) =>
  apiClient.post(apiUrls.customers.CREATE_REPAYMENT_DIRECT_DEBIT, { data });

export const getRepaymentDirectDebits = (data: number) =>
  apiClient.post(apiUrls.customers.GET_REPAYMENT_DIRECT_DEBITS, {
    data: { customer_id: data },
  });
