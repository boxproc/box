import { apiUrls } from 'consts';
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
  apiClient.post(apiUrls.transactions.GET, { data });

export const filterLedgerTransactionsById = (data: LedgerId) =>
  // throttleUtil.getDataAfter(ledgerCustomersFilteredItems, 500);
  apiClient.post(apiUrls.transactions.GET, { data });

export const convertTransactionToLoan =
  (data: Partial<LedgerConvertTransactionToLoanItemPrepared>) =>
    apiClient.post(apiUrls.transactions.CONVERT_TO_LOAN, { data });
