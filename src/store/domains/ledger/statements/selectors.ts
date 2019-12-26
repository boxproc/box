import { createSelector } from 'reselect';

import { selectInstitutionsOptions } from 'store/domains/consts';
import { selectActiveItemId } from 'store/domains/utils';
import { StoreState } from 'store/StoreState';

import {
  prepareAccountStatementsDataToRender,
  prepareDataToRender,
  prepareStatementAprToRender,
  prepareStatementDataToRender,
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
  items => items && items.asMutable().map(item => prepareTransactionsDataToRender(item))
);

export const selectLedgerStatementTransactionsForReport = createSelector(
  selectLedgerStatementTransactions,
  transactions => {
    if (transactions.length) {
      return transactions.map(transaction => {
        const clonedTransactions = { ...transaction };

        delete clonedTransactions.id;
        delete clonedTransactions.aprId;

        return clonedTransactions;
      });
    } else {
      return [{
        transactionDatetime: null,
        originalCurrency: null,
        amount: null,
        amountInOriginalCurrency: null,
        balanceAvailableBefore: null,
        balanceAvailableAfter: null,
        balanceSettledBefore: null,
        balanceSettledAfter: null,
        description: null,
        aprRate: null,
        gracePeriod: null,
      }];
    }
  }
);

export const selectLedgerCurrentStatement = createSelector(
  selectLedgerStatements,
  selectActiveItemId,
  (statements, currentId) => statements && statements.find(el => el.id === currentId)
);

export const selectLedgerCurrentStatementForReport = createSelector(
  selectDefaultLedgerStatements,
  selectInstitutionsOptions,
  selectActiveItemId,
  (statements, institutions, currentId) => {
    const current = statements && statements.find(el => el.id === currentId);
    const institution = current && institutions.find(el => el.value === current.institution_id);

    const data = prepareStatementDataToRender(current, institution);

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
    if (!statements || !statements.length) {
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

export const selectLedgerStatementAprsForReport = createSelector(
  selectLedgerStatementAprs,
  aprs => {
    if (aprs.length) {
      return aprs.map(apr => {
        const { description, rate, accruedInterest } = apr;

        return { description, rate, accruedInterest };
      });
    } else {
      return [{
        description: null,
        rate: null,
        accruedInterest: null,
      }];
    }
  }
);

export const selectDefaultLedgerStatementFees = (state: StoreState) =>
  state.ledger.statements.statementFees;

export const selectLedgerStatementFees = createSelector(
  selectDefaultLedgerStatementFees,
  fees => fees && fees.asMutable().map(fee => prepareStatementFeeToRender(fee))
);

export const selectLedgerStatementFeesForReport = createSelector(
  selectLedgerStatementFees,
  fees => {
    if (fees.length) {
      return fees.map(fee => {
        const { description, accruedFee } = fee;

        return { description, accruedFee };
      });
    } else {
      return [{
        description: null,
        accruedFee: null,
      }];
    }
  }
);

export const selectDefaultLedgerStatementRewards = (state: StoreState) =>
  state.ledger.statements.statementRewards;

export const selectLedgerStatementRewards = createSelector(
  selectDefaultLedgerStatementRewards,
  rewards => rewards && rewards.asMutable().map(reward => prepareStatementRewardToRender(reward))
);

export const selectLedgerStatementRewardsForReport = createSelector(
  selectLedgerStatementRewards,
  rewards => {
    if (rewards.length) {
      return rewards.map(reward => {
        const { description, accruedReward } = reward;

        return { description, accruedReward };
      });
    } else {
      return [{
        description: null,
        accruedReward: null,
      }];
    }
  }
);
