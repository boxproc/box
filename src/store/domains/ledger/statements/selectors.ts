import { createSelector } from 'reselect';

import { selectInstitutionsOptions } from 'store/domains/consts';
import { selectActiveItemId } from 'store/domains/utils';
import { StoreState } from 'store/StoreState';

import {
  prepareAccountStatementsDataToRender,
  prepareDataToRender,
  prepareStatementAprToRender,
  prepareStatementFeeToRender,
  prepareStatementRewardToRender,
  prepareTransactionsDataToRender,
} from './utils';

export const selectDefaultLedgerStatements = (state: StoreState) =>
  state.ledger.statements.statements;

export const selectDefaultLedgerStatementTransactions = (state: StoreState) =>
  state.ledger.statements.transactions;

export const selectLedgerStatements = createSelector(
  selectDefaultLedgerStatements,
  selectInstitutionsOptions,
  (items, institutions) => items && items.asMutable().map(item => {
    const institution = institutions.find(el => el.value === item.institution_id);

    return prepareDataToRender(item, institution);
  })
);

export const selectLedgerStatementTransactions = createSelector(
  selectDefaultLedgerStatementTransactions,
  items => items && items.asMutable().map(item => {
    return {
      ...prepareTransactionsDataToRender(item),
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

export const selectDefaultLedgerAccountStatements = (state: StoreState) =>
  state.ledger.statements.accountStatements;

export const selectLedgerAccountStatements = createSelector(
  selectDefaultLedgerAccountStatements,
  statements => statements && statements.asMutable().map(statement =>
    prepareAccountStatementsDataToRender(statement)
  )
);

export const selectLedgerAccountStatementDate = createSelector(
  selectLedgerAccountStatements,
  statements => {
    if (!statements && !statements.length) {
      return null;
    }

    return statements[0].statementDate;
  }
);

export const selectDefaultLedgerStatementAprs = (state: StoreState) =>
  state.ledger.statements.statementAprs;

export const selectLedgerStatementAprs = createSelector(
  selectDefaultLedgerStatementAprs,
  aprs => aprs && aprs.asMutable().map(apr => prepareStatementAprToRender(apr))
);

export const selectDefaultLedgerStatementFees = (state: StoreState) =>
  state.ledger.statements.statementFees;

export const selectLedgerStatementFees = createSelector(
  selectDefaultLedgerStatementFees,
  fees => fees && fees.asMutable().map(fee => prepareStatementFeeToRender(fee))
);

export const selectDefaultLedgerStatementRewards = (state: StoreState) =>
  state.ledger.statements.statementRewards;

export const selectLedgerStatementRewards = createSelector(
  selectDefaultLedgerStatementRewards,
  rewards => rewards && rewards.asMutable().map(reward => prepareStatementRewardToRender(reward))
);
