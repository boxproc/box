// import { successResponseMock } from 'consts';
import { apiClientService } from 'services';

import { TLedgerId } from './../customers';
// import {
//   transactionsMock,
//   settleTransactionMock
//  } from './mock';
import {
  IConvertTrToLoanReq,
  IRetrieveTrReq,
  ISettleTransactionReq,
  ITransactionsFilterToSend,
} from './types';
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

/**
 * Retrieve transaction API
 */
export const retrieveTransaction = (data: IRetrieveTrReq) =>
  // throttleUtil.getDataAfter(settleTransactionMock, 500);
  apiClientService.post('ui/ledger/accounts/retrieve_transaction', { data });

/**
 * Settle transaction API
 */
export const settleTransaction = (data: ISettleTransactionReq) =>
  // throttleUtil.getDataAfter(successResponseMock, 500);
  apiClientService.post('ui/ledger/accounts/settle_transaction', { data });
