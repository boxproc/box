import { lenderStatementsPathNames } from 'consts';

import { apiClient } from 'services';

// import { ledgerStatementsItems } from './mock';

// import { throttleUtil } from 'utils';

export const filterLedgerStatements = (data: Partial<any>) =>
  // throttleUtil.getDataAfter(ledgerStatementsItems, 500);
  apiClient.post(lenderStatementsPathNames.GET, { data });
