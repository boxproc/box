import { createSelector } from 'reselect';

import { IStoreState } from 'store';
import { createLoadingSelector } from 'store/domains/loader';
import { userInstitutionsOptionsSelector } from 'store/domains/login';
import { activeItemIdSelector } from 'store/domains/utils';

import { ActionTypeKeys } from './actionTypes';
import {
  prepareAccountStatementsToRender,
  prepareStatementAprsToRender,
  prepareStatementsToRender,
  prepareStatementToRender,
  prepareTransactionsToRender,
} from './utils';

/**
 * Statements selectors
 */

export const defaultStatementsSelector = (state: IStoreState) => state.ledger.statements.statements;

export const statementsSelector = createSelector(
  defaultStatementsSelector,
  userInstitutionsOptionsSelector,
  (statements, institutions) => statements && statements.map(statement => {
    const institution = institutions.find(el => el.value === statement.institution_id);

    return prepareStatementsToRender(statement, institution);
  })
);

export const currentStatementSelector = createSelector(
  statementsSelector,
  activeItemIdSelector,
  (data, currentId) => data && data.find(el => el.id === currentId)
);

export const isStatementsLoadingSelector = createLoadingSelector([
  ActionTypeKeys.FILTER_STATEMENTS,
  ActionTypeKeys.FILTER_STATEMENTS_BY_ID,
]);

/**
 * Statement transactions selectors
 */

export const defaultStatementTransactionsSelector = (state: IStoreState) =>
  state.ledger.statements.transactions;

export const statementTransactionsSelector = createSelector(
  defaultStatementTransactionsSelector,
  data => data && data.map(el => prepareTransactionsToRender(el))
);

export const defaultStatementPendingTransactionsSelector = (state: IStoreState) =>
  state.ledger.statements.pendingTransactions;

export const statementPendingTransactionsSelector = createSelector(
  defaultStatementPendingTransactionsSelector,
  data => data && data.map(el => prepareTransactionsToRender(el))
);

export const currentStatementTransactionSelector = createSelector(
  statementsSelector,
  activeItemIdSelector,
  (statements, currentId) => {
    const currStatement = statements.find(el => el.id === currentId);

    if (!currStatement) {
      return null;
    }

    const { firstTransactionId, lastTransactionId } = currStatement;

    return {
      id: currentId,
      firstTransactionId,
      lastTransactionId,
    };
  }
);

/**
 * Account statements selectors
 */

export const defaultAccountStatementsSelector = (state: IStoreState) =>
  state.ledger.statements.accountStatements;

export const accountStatementsSelector = createSelector(
  defaultAccountStatementsSelector,
  data => data && data.map(el => prepareAccountStatementsToRender(el))
);

export const accountStatementDateSelector = createSelector(
  accountStatementsSelector,
  data => {
    if (!data || !data.length) {
      return null;
    }

    return data[0].statementDate;
  }
);

export const IsAccStatementsAprsLoadingSelector = createLoadingSelector([
  ActionTypeKeys.GET_ACCOUNT_STATEMENTS,
  ActionTypeKeys.GET_STATEMENT_APRS,
]);

/**
 * Statement APRs selectors
 */

export const defaultStatementAprsSelector = (state: IStoreState) =>
  state.ledger.statements.statementAprs;

export const statementAprsSelector = createSelector(
  defaultStatementAprsSelector,
  data => data && data.map(el => prepareStatementAprsToRender(el))
);

/**
 * Statement data selectors for report
 */

export const currentStatementForReportSelector = createSelector(
  defaultStatementsSelector,
  userInstitutionsOptionsSelector,
  activeItemIdSelector,
  (statements, institutions, currentId) => {
    const currStatement = statements && statements.find(el => el.id === currentId);
    const institution = currStatement
      && institutions.find(el => el.value === currStatement.institution_id);

    const data = prepareStatementToRender(currStatement, institution);

    if (!data) {
      return null;
    }

    const { account, statement } = data;
    let clonedStatement = { ...statement };
    const statementEntry = { statementId: clonedStatement.id };

    if (clonedStatement) {

      delete clonedStatement.id;
      clonedStatement = {
        ...statementEntry,
        ...clonedStatement,
      };
    }

    return [account, clonedStatement];
  }
);

export const statementReportFileNameSelector = createSelector(
  currentStatementSelector,
  statement => {
    if (!statement) {
      return null;
    }

    const date = statement.statementDate;
    const accountId = statement.accountId;
    const fileName = `statement_${accountId}_${date}`.replace(/\//g, '');

    return fileName;
  });

export const isTransArsLoadingSelector = createLoadingSelector([
  ActionTypeKeys.GET_STATEMENT_TRANSACTIONS,
  ActionTypeKeys.GET_STATEMENT_APRS,
]);

export const isChangingMinimumRepaymentSelector = createLoadingSelector([
  ActionTypeKeys.CHANGE_MINIMUM_REPAYMENT,
]);
