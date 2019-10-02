import { createSelector } from 'reselect';

import { selectInstitutionProductsOptions } from 'store/domains/productDesigner';
import { StoreState } from 'store/StoreState';

import { selectCyclesDescriptionsOptions } from 'store/domains/administration';
import { selectInstitutionsOptions } from 'store/domains/consts';
// tslint:disable-next-line: max-line-length
import { prepareValuesToRender as prepareLastStatementValuesToRender } from 'store/domains/ledger/statements/utils';
import { selectActiveItemId } from 'store/domains/utils';

import {
  preparedAccountCardsToRender,
  preparedValuesDetailsToRender,
  preparedValuesToRender
} from './utils';

export const selectDefaultLedgerAccounts = (state: StoreState) =>
  state.ledger.accounts.accounts && state.ledger.accounts.accounts.asMutable();

export const selectLedgerAccounts = createSelector(
  selectDefaultLedgerAccounts,
  selectInstitutionsOptions,
  (items, institutions) => items && items.map(item => {
    return {
      ...preparedValuesToRender(item),
      institutionId: institutions.find(el => el.value === item.institution_id).label,
    };
  })
);

export const selectDefaultLedgerAccountCards = (state: StoreState) =>
  state.ledger.accounts.cards.asMutable();

export const selectLedgerAccountCards = createSelector(
  selectDefaultLedgerAccountCards,
  items => items && items.map(item => preparedAccountCardsToRender(item))
);
export const selectLedgerCurrentAccount = createSelector(
  selectActiveItemId,
  selectInstitutionsOptions,
  selectInstitutionProductsOptions,
  selectDefaultLedgerAccounts,
  selectCyclesDescriptionsOptions,
  (currentId, institutions, institutionProducts, accounts, cyclesOptions) => {
    const current = accounts.find(el => el.id === currentId);

    return {
      ...preparedValuesDetailsToRender(current),
      institutionId: current && institutions.find(el => el.value === current.institution_id),
      productName: current && institutionProducts.find(el => el.value === current.product_id),
      cycleStatement: current && cyclesOptions.find(el => el.value === current.statement_cycle_id),
    };
  }
);

export const selectLedgerCurrentAccountAlias = createSelector(
  selectLedgerCurrentAccount,
  currentAccount => currentAccount && currentAccount.accountAlias
);

export const selectLedgerCurrentAccountHasProductOverride = createSelector(
  selectLedgerCurrentAccount,
  currentAccount => currentAccount && currentAccount.productOverrideId ? true : false
);

export const selectDefaultLedgerLastStatement = (state: StoreState) =>
  state.ledger.accounts.lastStatement;

export const selectLedgerLastStatement = createSelector(
  selectDefaultLedgerLastStatement,
  lastStatement => lastStatement && prepareLastStatementValuesToRender(lastStatement)
);
