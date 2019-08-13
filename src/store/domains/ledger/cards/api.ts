import { apiClient } from 'services';

// import { LedgerTransactionsFilteredItems, ledgerTransactionsItems } from './mock';

// import { throttleUtil } from 'utils';
import { LedgerCardsFilterParamsPrepared } from './types';

export const getLedgerCards = () =>
  // throttleUtil.getDataAfter(ledgerTransactionsItems, 500);
  apiClient.post('/ui/ledger/cards/get');

export const filterLedgerCards = (data: Partial<LedgerCardsFilterParamsPrepared>) =>
  // throttleUtil.getDataAfter(LedgerTransactionsFilteredItems, 500);
  apiClient.post('/ui/ledger/cards/get', { data });
