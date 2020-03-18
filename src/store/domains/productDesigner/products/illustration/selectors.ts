import { createSelector } from 'reselect';

import { StoreState } from 'store';
import {
  prepareProductIllustrationAprsItem,
  prepareProductIllustrationData,
  prepareProductIllustrationStatementsItem,
  prepareProductIllustrationTransactionsItem,
} from './utils';

export const selectDefaultRevolvingCreditIllustration = (state: StoreState) =>
  state.productDesigner.productIllustration.productRevolvingCreditIllustration;

export const selectStatementsIllustration = createSelector(
  selectDefaultRevolvingCreditIllustration,
  (revolvingCreditIllustration) =>
    revolvingCreditIllustration &&
    revolvingCreditIllustration.statements.asMutable().map(statement => {
      if (!statement) {
        return null;
      }

      return prepareProductIllustrationStatementsItem(statement);
    })
);

export const selectAprsIllustration = createSelector(
  selectDefaultRevolvingCreditIllustration,
  (revolvingCreditIllustration) =>
    revolvingCreditIllustration && revolvingCreditIllustration.aprs &&
    revolvingCreditIllustration.aprs.asMutable().map(apr => {
      if (!apr) {
        return null;
      }

      return prepareProductIllustrationAprsItem(apr);
    })
);

export const selectTransactionsIllustration = createSelector(
  selectDefaultRevolvingCreditIllustration,
  (revolvingCreditIllustration) =>
    revolvingCreditIllustration && revolvingCreditIllustration.transactions &&
    revolvingCreditIllustration.transactions.asMutable().map(transaction => {
      if (!transaction) {
        return null;
      }

      return prepareProductIllustrationTransactionsItem(transaction);
    })
);

export const selectDefaultIllustrationLoan = (state: StoreState) =>
  state.productDesigner.productIllustration.productLoanIllustration;

export const selectProductLoanIllustration = createSelector(
  selectDefaultIllustrationLoan,
  items => items && items.asMutable().map(item => prepareProductIllustrationData(item))
);
