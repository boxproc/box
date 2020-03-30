import { apiClientService } from 'services';

// import { manualTransactionMock } from './mock';
import { IManualTransactionReq } from './types';
// import { throttleUtil } from 'utils';

/**
 * Manual transaction API
 */
export const makeTransaction = (data: Partial<IManualTransactionReq>) =>
  // throttleUtil.getDataAfter(manualTransactionMock, 500);
  apiClientService.post('ui/ledger/accounts/make_transaction', { data });
