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
  apiClient.post('ui/ledger/customers/delete', {
    data: { id },
  });

export const addLedgerCustomer = (data: Partial<LedgerCustomerItem>) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClient.post('ui/ledger/customers/create', { data });

export const updateLedgerCustomer = (data: Partial<LedgerCustomerItem>) =>
  // throttleUtil.getDataAfter(successResponseStatus, 100);
  apiClient.post('ui/ledger/customers/update', { data });

export const filterLedgerCustomers = (data: Partial<LedgerCustomersFilterPrepared>) =>
  // throttleUtil.getDataAfter(ledgerCustomersFilteredItems, 500);
  apiClient.post('ui/ledger/customers/get', { data });

export const filterLedgerCustomersById = (data: LedgerId) =>
  // throttleUtil.getDataAfter(ledgerCustomersFilteredItems, 500);
  apiClient.post('ui/ledger/customers/get', { data });

export const addRepaymentDebitCard = (data: Partial<RepaymentDebitCardsItem>) =>
  apiClient.post('ui/ledger/customers/create_repayment_debit_card', { data });

export const getRepaymentDebitCards = (data: number) =>
  apiClient.post('ui/ledger/customers/get_repayment_debit_card', {
    data: { customer_id: data },
  });

export const addRepaymentDirectDebit = (data: Partial<RepaymentDirectDebitsItem>) =>
  apiClient.post('ui/ledger/customers/create_repayment_direct_debits', { data });

export const getRepaymentDirectDebits = (data: number) =>
  apiClient.post('ui/ledger/customers/get_repayment_direct_debits', {
    data: { customer_id: data },
  });
