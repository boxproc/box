import { apiClientService } from 'services';

import { TLedgerId } from '../customers';
// import { transactionsMock } from './mock';
import { IConvertTrToLoanReq, ITransactionsFilterToSend } from './types';
// import { throttleUtil } from 'utils';

/**
 * Filter transactions API
 */
export const filterTransactions = (data: Partial<ITransactionsFilterToSend>) =>
  // throttleUtil.getDataAfter(transactionsMock, 500);
  apiClientService.post('ui/ledger/transactions/get', { data });

/**
 * Filter transactions by ID API
 */
export const filterTransactionsById = (data: TLedgerId) =>
  apiClientService.post('ui/ledger/transactions/get', { data });

/**
 * Convert transaction to loan API
 */
export const convertTransactionToLoan = (data: Partial<IConvertTrToLoanReq>) =>
  apiClientService.post('ui/ledger/transactions/convert_to_loan', { data });
