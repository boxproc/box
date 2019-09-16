// import { lenderStatementsPathNames } from 'consts';

// import { apiClient } from 'services';

import { ledgerStatementsItems } from './mock';

import { throttleUtil } from 'utils';

export const filterLedgerTransactions = (data: Partial<any>) =>
  throttleUtil.getDataAfter(ledgerStatementsItems, 500);
  // apiClient.post(lenderStatementsPathNames.GET, { data });
