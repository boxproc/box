import { apiClient } from 'services';

export const getLedgerTransactions = () =>
//  throttleUtil.getDataAfter(LedgerCustomersItems, 500);
 apiClient.post('/ui/ledger/transactions/get');
