// import { successResponseMock } from 'consts';
import { apiClientService } from 'services';

import { ILedgerId } from './../customers';
// import {
//   accountStatementsMock,
//   statementAprsMock,
//   statementsMock,
//   statementTransMock,
// } from './mock';

import {
  IChangeMinimumAmountRequestData,
  IStatementsFilterToSend,
  IStatementTransReq,
} from './types';

// import { throttleUtil } from 'utils';

/**
 * Filter statements API
 */
export const filterStatements = (data: Partial<IStatementsFilterToSend>) =>
  // throttleUtil.getDataAfter(statementsMock, 500);
  apiClientService.post('ui/ledger/statements/get', { data });

/**
 * Get statement transactions API
 */
export const getStatementTransactions = (data: IStatementTransReq) =>
  // throttleUtil.getDataAfter(statementTransMock, 500);
  apiClientService.post('ui/ledger/statements/get_transactions', {
    data: {
      first_transaction_id: data.firstTransactionId,
      last_transaction_id: data.lastTransactionId,
      statement_id: data.id,
    },
  });

/**
 * Filter statements by ID API
 */
export const filterStatementsById = (data: ILedgerId) =>
  // throttleUtil.getDataAfter(statementsMock, 500);
  apiClientService.post('ui/ledger/statements/get', { data });

/**
 * Get account statements API
 */
export const getAccountStatements = (accountId: number) =>
  // throttleUtil.getDataAfter(accountStatementsMock, 500);
  apiClientService.post('ui/ledger/accounts/get_statements', {
    data: { id: accountId },
  });

/**
 * Get account statement APRs API
 */
export const getAccountStatementAprs = (statementId: number) =>
  // throttleUtil.getDataAfter(statementAprsMock, 500);
  apiClientService.post('ui/ledger/accounts/get_statement_aprs', {
    data: { statement_id: statementId },
  });

/**
 * Change minimum repayment API
 */
export const changeMinimumRepayment = (data: IChangeMinimumAmountRequestData) =>
  // throttleUtil.getDataAfter(successResponseMock, 500);
  apiClientService.put('/ui/ledger/statements/minimum_repayment', { data });
