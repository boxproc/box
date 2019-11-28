import { lenderStatementsPathNames } from 'consts';

import { apiClient } from 'services';
import { LedgerId } from '../customers';
import { LedgerStatementsFilterPrepared, LedgerStatementTransactionsItemsRequest } from './types';

// import { ledgerAccountStatementsItems, ledgerStatementsItems } from './mock';

// import { throttleUtil } from 'utils';

export const filterLedgerStatements = (data: Partial<LedgerStatementsFilterPrepared>) =>
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

export const getLedgerAccountStatements = (accountId: number) =>
  // throttleUtil.getDataAfter(ledgerAccountStatementsItems, 500);
  apiClient.post(lenderStatementsPathNames.GET_ACCOUNT_STATEMENTS, {
    data: { account_id: accountId },
  });
