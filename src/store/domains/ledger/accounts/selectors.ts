import { createSelector } from 'reselect';

import {
  selectCyclesDescriptionsOptions,
  selectInstitutionProductsOptions,
} from 'store/domains/productDesigner';
import { StoreState } from 'store/StoreState';

import { selectInstitutionsOptions } from 'store/domains/consts';
import { selectActiveItemId } from 'store/domains/utils';

import {
  preparedAccountCardsToRender,
  prepareDataDetailsToRender,
  prepareDataToRender
} from './utils';

export const selectDefaultLedgerAccounts = (state: StoreState) =>
  state.ledger.accounts.accounts && state.ledger.accounts.accounts.asMutable();

export const selectLedgerAccounts = createSelector(
  selectDefaultLedgerAccounts,
  selectInstitutionsOptions,
  (items, institutions) => items && items.map(item => {
    const institution = institutions.find(el => el.value === item.institution_id);

    return {
      ...prepareDataToRender(item),
      institutionId: institution && institution.label,
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
      ...prepareDataDetailsToRender(current),
      institutionId: current && institutions.find(el => el.value === current.institution_id),
      product: current && institutionProducts.find(el => el.value === current.product_id),
      statementCycle: current && cyclesOptions.find(el => el.value === current.statement_cycle_id),
    };
  }
);

export const selectLedgerCurrentAccountAlias = createSelector(
  selectLedgerCurrentAccount,
  currentAccount => currentAccount && currentAccount.accountAlias
);

export const selectLedgerCurrentAccountCurrencyCode = createSelector(
  selectLedgerCurrentAccount,
  currentAccount => currentAccount && currentAccount.currencyCode
);

export const selectLedgerCurrentAccountProductOverrideId = createSelector(
  selectLedgerCurrentAccount,
  currentAccount => currentAccount && currentAccount.productOverrideId
);

export const selectLedgerCurrentAccountHasProductOverride = createSelector(
  selectLedgerCurrentAccount,
  currentAccount => currentAccount && currentAccount.productOverrideId ? true : false
);
