import { apiClientService } from 'services';

import { LedgerManualTransactionRequest } from './types';

// import { ledgerManualTransactionData } from './mock';

// import { throttleUtil } from 'utils';

export const makeLedgerTransaction = (data: Partial<LedgerManualTransactionRequest>) =>
  // throttleUtil.getDataAfter(ledgerManualTransactionData, 500);
  apiClientService.post('ui/ledger/accounts/make_transaction', { data });
