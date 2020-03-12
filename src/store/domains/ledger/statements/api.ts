import { apiClient } from 'services';
import { LedgerId } from '../customers';
// import {
//   ledgerAccountStatementAprItems,
//   ledgerAccountStatementsItems,
//   ledgerStatementsItems,
// } from './mock';
import { LedgerStatementsFilterPrepared, LedgerStatementTransactionsItemsRequest } from './types';

// import { throttleUtil } from 'utils';

export const filterLedgerStatements = (data: Partial<LedgerStatementsFilterPrepared>) =>
  // throttleUtil.getDataAfter(ledgerStatementsItems, 500);
  apiClient.post('ui/ledger/statements/get', { data });

export const getLedgerStatementTransactions = (data: LedgerStatementTransactionsItemsRequest) =>
  apiClient.post('ui/ledger/statements/get_transactions', {
    data: {
      first_transaction_id: data.firstTransactionId,
      last_transaction_id: data.lastTransactionId,
      statement_id: data.id,
    },
  });

export const filterLedgerStatementsById = (data: LedgerId) =>
  // throttleUtil.getDataAfter(ledgerStatementsItems, 500);
  apiClient.post('ui/ledger/statements/get', { data });

export const getLedgerAccountStatements = (accountId: number) =>
  // throttleUtil.getDataAfter(ledgerAccountStatementsItems, 500);
  apiClient.post('ui/ledger/accounts/get_statements', {
    data: { account_id: accountId },
  });

export const getLedgerAccountStatementAprs = (statementId: number) =>
  // throttleUtil.getDataAfter(ledgerAccountStatementAprItems, 500);
  apiClient.post('ui/ledger/accounts/get_statement_aprs', {
    data: { statement_id: statementId },
  });
