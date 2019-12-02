import { lenderStatementsPathNames } from 'consts';

import { apiClient } from 'services';
import { LedgerId } from '../customers';
// import {
//   ledgerAccountStatementAprItems,
//   ledgerAccountStatementFeeItems,
//   ledgerAccountStatementRewardItems,
//   ledgerAccountStatementsItems,
// } from './mock';
import { LedgerStatementsFilterPrepared, LedgerStatementTransactionsItemsRequest } from './types';

// import { throttleUtil } from 'utils';

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

export const getLedgerAccountStatementAprs = (statementId: number) =>
  // throttleUtil.getDataAfter(ledgerAccountStatementAprItems, 500);
  apiClient.post(lenderStatementsPathNames.GET_ACCOUNT_STATEMENT_APRS, {
    data: { statement_id: statementId },
  });

export const getLedgerAccountStatementFees = (statementId: number) =>
  // throttleUtil.getDataAfter(ledgerAccountStatementFeeItems, 500);
  apiClient.post(lenderStatementsPathNames.GET_ACCOUNT_STATEMENT_FEES, {
    data: { statement_id: statementId },
  });

export const getLedgerAccountStatementRewards = (statementId: number) =>
  // throttleUtil.getDataAfter(ledgerAccountStatementRewardItems, 500);
  apiClient.post(lenderStatementsPathNames.GET_ACCOUNT_STATEMENTS_REWARDS, {
    data: { statement_id: statementId },
  });
