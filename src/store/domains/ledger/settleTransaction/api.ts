import { lenderSettleTransactionURLs } from 'consts';

import { apiClient } from 'services';

// import { successResponseStatus, transactionData } from './mock';
import { RetrieveTransactionRequest, SettleTransactionItem } from './types';

// import { throttleUtil } from 'utils';

export const retrieveTransaction = (data: RetrieveTransactionRequest) =>
  // throttleUtil.getDataAfter(transactionData, 500);
  apiClient.post(lenderSettleTransactionURLs.RETRIEVE_TRANSACTION, { data });

export const settleTransaction = (data: SettleTransactionItem) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClient.post(lenderSettleTransactionURLs.SETTLE_TRANSACTION, { data });
