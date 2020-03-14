import { apiClientService } from 'services';

import { LedgerId } from '../customers';
// import { ledgerTransactionsFilteredItems } from './mock';
import {
  LedgerConvertTransactionToLoanItemPrepared,
  LedgerTransactionsFilterPrepared
} from './types';

// import { throttleUtil } from 'utils';

export const filterLedgerTransactions = (data: Partial<LedgerTransactionsFilterPrepared>) =>
  // throttleUtil.getDataAfter(ledgerTransactionsFilteredItems, 500);
  apiClientService.post('ui/ledger/transactions/get', { data });

export const filterLedgerTransactionsById = (data: LedgerId) =>
  // throttleUtil.getDataAfter(ledgerCustomersFilteredItems, 500);
  apiClientService.post('ui/ledger/transactions/get', { data });

export const convertTransactionToLoan =
  (data: Partial<LedgerConvertTransactionToLoanItemPrepared>) =>
    apiClientService.post('ui/ledger/transactions/convert_to_loan', { data });
