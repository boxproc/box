import { createSelector } from 'reselect';

import { IStoreState } from 'store';
import { createLoadingSelector } from 'store/domains/loader';
import { ActionTypeKeys } from './actionTypes';
import {
  prepareAprToRender,
  prepareLoanToRender,
  prepareStatementToRender,
  prepareTransToRender,
} from './utils';

export const defaultRevCreditIllustrationSelector = (state: IStoreState) =>
  state.productDesigner.productIllustration.revCreditIllustration;

export const revCreditStatementsIllustrationSelector = createSelector(
  defaultRevCreditIllustrationSelector,
  data => data && data.statements.map(el => prepareStatementToRender(el))
);

export const revCreditAprsIllustrationSelector = createSelector(
  defaultRevCreditIllustrationSelector,
  data => data && data.aprs && data.aprs.map(el => prepareAprToRender(el))
);

export const revCreditTransIllustrationSelector = createSelector(
  defaultRevCreditIllustrationSelector,
  data => data && data.transactions && data.transactions.map(el => prepareTransToRender(el))
);

export const defaultIllustrationLoanSelector = (state: IStoreState) =>
  state.productDesigner.productIllustration.loanIllustration;

export const loanIllustrationSelector = createSelector(
  defaultIllustrationLoanSelector,
  data => data && data.map(el => prepareLoanToRender(el))
);

export const isLoanIllustrationLoadingSelector = createLoadingSelector([
  ActionTypeKeys.ILLUSTRATE_LOAN,
]);

export const isRevCreditIllustrationLoadingSelector = createLoadingSelector([
  ActionTypeKeys.ILLUSTRATE_REVOLVING_CREDIT,
]);
