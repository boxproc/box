import { createSelector } from 'reselect';

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
  (accounts, currentId, institutions) => {
    const current = accounts.filter(el => el.id === currentId)[0];
    return {
      ...preparedValuesDetailsToRender(current),
      institutionId: institutions.find(el => el.value === currentId),
    };
  }
);

export const selectLedgerCurrentAccountAlias = createSelector(
  selectLedgerCurrentAccount,
  currentAccount => {
    return currentAccount && currentAccount.accountAlias;
  }
);
