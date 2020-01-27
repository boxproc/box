import { lenderTransactionsURLs } from 'consts';

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
  apiClient.post(lenderTransactionsURLs.GET, { data });

export const filterLedgerTransactionsById = (data: LedgerId) =>
  // throttleUtil.getDataAfter(ledgerCustomersFilteredItems, 500);
  apiClient.post(lenderTransactionsURLs.GET, { data });

export const convertTransactionToLoan =
  (data: Partial<LedgerConvertTransactionToLoanItemPrepared>) =>
    apiClient.post(lenderTransactionsURLs.CONVERT_TO_LOAN, { data });
