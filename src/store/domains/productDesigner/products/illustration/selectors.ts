import { createSelector } from 'reselect';

import { StoreState } from 'store/StoreState';
import {
  prepareProductIllustrationAprsItem,
  prepareProductIllustrationData,
  prepareProductIllustrationFeesItem,
  prepareProductIllustrationRewardsItem,
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

export const selectFeesIllustration = createSelector(
  selectDefaultRevolvingCreditIllustration,
  (revolvingCreditIllustration) =>
    revolvingCreditIllustration && revolvingCreditIllustration.fees &&
    revolvingCreditIllustration.fees.asMutable().map(fee => {
      if (!fee) {
        return null;
      }

      return prepareProductIllustrationFeesItem(fee);
    })
);

export const selectRewardsIllustration = createSelector(
  selectDefaultRevolvingCreditIllustration,
  (revolvingCreditIllustration) =>
    revolvingCreditIllustration && revolvingCreditIllustration.rewards &&
    revolvingCreditIllustration.rewards.asMutable().map(reward => {
      if (!reward) {
        return null;
      }

      return prepareProductIllustrationRewardsItem(reward);
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
  state.productDesigner.productIllustration.productIllustration;

export const selectProductLoanIllustration = createSelector(
  selectDefaultIllustrationLoan,
  items => items && items.asMutable().map(item => prepareProductIllustrationData(item))
);
