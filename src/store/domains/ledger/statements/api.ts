import { lenderStatementsPathNames } from 'consts';

import { apiClient } from 'services';
import { LedgerId } from '../customers';
import { LedgerStatementTransactionsItemsRequest } from './types';

// import { ledgerStatementsItems } from './mock';

// import { throttleUtil } from 'utils';

export const filterLedgerStatements = (data: Partial<any>) =>
  // throttleUtil.getDataAfter(ledgerStatementsItems, 500);
  apiClient.post(lenderStatementsPathNames.GET, { data });

export const getLedgerStatementTransactions = (data: LedgerStatementTransactionsItemsRequest) =>
  // throttleUtil.getDataAfter(ledgerStatementsItems, 500);
  apiClient.post(lenderStatementsPathNames.GET_TRANSACTIONS, {
    data: {
      first_transaction_id: data.firstTransactionId,
      last_transaction_id: data.lastTransactionId,
      statement_id: data.id,
    },
  });

export const filterLedgerStatementsById = (data: LedgerId) =>
  // throttleUtil.getDataAfter(ledgerCustomersFilteredItems, 500);
  apiClient.post(lenderStatementsPathNames.GET, { data });
