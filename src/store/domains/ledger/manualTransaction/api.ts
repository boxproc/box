import { apiUrls } from 'consts';
import { apiClient } from 'services';

import { LedgerManualTransactionRequest } from './types';

// import { ledgerManualTransactionData } from './mock';

// import { throttleUtil } from 'utils';

export const makeLedgerTransaction = (data: Partial<LedgerManualTransactionRequest>) =>
  // throttleUtil.getDataAfter(ledgerManualTransactionData, 500);
  apiClient.post(apiUrls.manualTransaction.MAKE_TRANSACTION, { data });
