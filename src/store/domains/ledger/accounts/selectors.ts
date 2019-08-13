import { createSelector } from 'reselect';

import { selectInstitutionProductsOptions } from 'store/domains/productDesigner';
import { StoreState } from 'store/StoreState';

import { selectInstitutionsOptions } from 'store/domains/consts';

import { preparedValuesDetailsToRender, preparedValuesToRender } from './utils';

export const selectDefaultLedgerAccounts = (state: StoreState) =>
  state.ledger.ledgerAccounts.accounts;

export const selectLedgerAccounts = createSelector(
  selectDefaultLedgerAccounts,
  selectInstitutionsOptions,
  (items, institutions) => items && items.asMutable().map(item => {
    return {
      ...preparedValuesToRender(item),
      institutionId: institutions.find(el => el.value === item.institution_id).label,
    };
  })
);

export const selectLedgerAccountCurrentId = (state: StoreState) =>
  state.ledger.ledgerAccounts.currentAccountId;

export const selectLedgerCurrentAccount = createSelector(
  selectLedgerAccounts,
  selectLedgerAccountCurrentId,
  selectInstitutionsOptions,
  selectInstitutionProductsOptions,
  (accounts, currentId, institutions, institutionProducts) => {
    const current = accounts.filter(el => el.id === currentId)[0];

    return {
      ...preparedValuesDetailsToRender(current),
      institutionId: institutions.find(el => el.value === currentId),
      productName: institutionProducts.find(el => el.label === current.productName),
    };
  }
);

export const selectLedgerCurrentAccountAlias = createSelector(
  selectLedgerCurrentAccount,
  currentAccount => {
    return currentAccount && currentAccount.accountAlias;
  }
);
