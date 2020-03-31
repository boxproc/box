// import { successResponseMock } from 'consts';
import { apiClientService } from 'services';
// import { settleTransactionMock } from './mock';
import { IRetrieveTrReq, ISettleTransaction } from './types';
// import { throttleUtil } from 'utils';

/**
 * Retrieve transaction API
 */
export const retrieveTransaction = (data: IRetrieveTrReq) =>
  // throttleUtil.getDataAfter(settleTransactionMock, 500);
  apiClientService.post('ui/ledger/accounts/retrieve_transaction', { data });

/**
 * Settle transaction API
 */
export const settleTransaction = (data: ISettleTransaction) =>
  // throttleUtil.getDataAfter(successResponseMock, 500);
  apiClientService.post('ui/ledger/accounts/settle_transaction', { data });
