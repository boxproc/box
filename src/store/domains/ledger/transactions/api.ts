import { apiClient } from 'services';

import { LedgerId } from '../customers';
// import { ledgerTransactionsFilteredItems } from './mock';
import {
  LedgerConvertTransactionToLoanItemPrepared,
  LedgerTransactionsFilterPrepared
} from './types';

// import { throttleUtil } from 'utils';

export const filterLedgerTransactions = (data: Partial<LedgerTransactionsFilterPrepared>) =>
  // throttleUtil.getDataAfter(ledgerTransactionsFilteredItems, 500);
  apiClient.post('ui/ledger/transactions/get', { data });

export const filterLedgerTransactionsById = (data: LedgerId) =>
  // throttleUtil.getDataAfter(ledgerCustomersFilteredItems, 500);
  apiClient.post('ui/ledger/transactions/get', { data });

export const convertTransactionToLoan =
  (data: Partial<LedgerConvertTransactionToLoanItemPrepared>) =>
    apiClient.post('ui/ledger/transactions/convert_to_loan', { data });
