import { apiClientService } from 'services';

import { LedgerId } from '../customers';
// import {
//   accountStatementsMock,
//   statementAprsMock,
//   statementsMock,
//   statementTransMock,
// } from './mock';
import { IStatementsFilterToSend, IStatementTransReq } from './types';

// import { throttleUtil } from 'utils';

export const filterStatements = (data: Partial<IStatementsFilterToSend>) =>
  // throttleUtil.getDataAfter(statementsMock, 500);
  apiClientService.post('ui/ledger/statements/get', { data });

export const getStatementTransactions = (data: IStatementTransReq) =>
  // throttleUtil.getDataAfter(statementTransMock, 500);
  apiClientService.post('ui/ledger/statements/get_transactions', {
    data: {
      first_transaction_id: data.firstTransactionId,
      last_transaction_id: data.lastTransactionId,
      statement_id: data.id,
    },
  });

export const filterStatementsById = (data: LedgerId) =>
  // throttleUtil.getDataAfter(statementsMock, 500);
  apiClientService.post('ui/ledger/statements/get', { data });

export const getAccountStatements = (accountId: number) =>
  // throttleUtil.getDataAfter(accountStatementsMock, 500);
  apiClientService.post('ui/ledger/accounts/get_statements', {
    data: { account_id: accountId },
  });

export const getAccountStatementAprs = (statementId: number) =>
  // throttleUtil.getDataAfter(statementAprsMock, 500);
  apiClientService.post('ui/ledger/accounts/get_statement_aprs', {
    data: { statement_id: statementId },
  });
