import { apiClientService } from 'services';

// import { successResponseStatus, transactionData } from './mock';
import { RetrieveTransactionRequest, SettleTransactionItem } from './types';

// import { throttleUtil } from 'utils';

export const retrieveTransaction = (data: RetrieveTransactionRequest) =>
  // throttleUtil.getDataAfter(transactionData, 500);
  apiClientService.post('ui/ledger/accounts/retrieve_transaction', { data });

export const settleTransaction = (data: SettleTransactionItem) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClientService.post('ui/ledger/accounts/settle_transaction', { data });
