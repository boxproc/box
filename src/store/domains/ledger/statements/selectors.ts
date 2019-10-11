import { createSelector } from 'reselect';

import { selectInstitutionsOptions } from 'store/domains/consts';
import { selectActiveItemId } from 'store/domains/utils';
import { StoreState } from 'store/StoreState';

import { prepareTransactionsValuesToRender, prepareValuesToRender } from './utils';

export const selectDefaultLedgerStatements = (state: StoreState) =>
  state.ledger.statements.statements;

export const selectDefaultLedgerStatementTransactions = (state: StoreState) =>
  state.ledger.statements.transactions;

export const selectLedgerStatements = createSelector(
  selectDefaultLedgerStatements,
  selectInstitutionsOptions,
  (items, institutions) => items && items.asMutable().map(item => {
    return {
      ...prepareValuesToRender(item),
      institutionId: institutions.find(el => el.value === item.institution_id).label,
    };
  })
);

export const selectLedgerStatementTransactions = createSelector(
  selectDefaultLedgerStatementTransactions,
  items => items && items.asMutable().map(item => {
    return {
      ...prepareTransactionsValuesToRender(item),
    };
  })
);

export const selectLedgerCurrentStatement = createSelector(
  selectLedgerStatements,
  selectActiveItemId,
  (statement, currentId) => {
    const current = statement.find(el => el.id === currentId);

    return current;
  }
);

export const selectLedgerCurrentStatementTransaction = createSelector(
  selectLedgerStatements,
  selectActiveItemId,
  (statement, currentId) => {
    const current = statement.find(el => el.id === currentId);
    const data = {
      id: currentId,
      firstTransactionId: current.firstTransactionId,
      lastTransactionId: current.lastTransactionId,
    };
    return data;
  }
);
