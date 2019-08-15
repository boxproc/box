import { createSelector } from 'reselect';

import { statementCyclesOptions } from 'consts';

import { selectInstitutionProductsOptions } from 'store/domains/productDesigner';
import { StoreState } from 'store/StoreState';

import { selectInstitutionsOptions } from 'store/domains/consts';

import { preparedValuesDetailsToRender, preparedValuesToRender } from './utils';

export const selectDefaultLedgerAccounts = (state: StoreState) =>
  state.ledger.ledgerAccounts.accounts.asMutable();

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

export const selectLedgerAccountCurrentId = (state: StoreState) =>
  state.ledger.ledgerAccounts.currentAccountId;

export const selectLedgerCurrentAccount = createSelector(
  selectLedgerAccounts,
  selectLedgerAccountCurrentId,
  selectInstitutionsOptions,
  selectInstitutionProductsOptions,
  selectDefaultLedgerAccounts,
  (accounts, currentId, institutions, institutionProducts, defaultAccounts) => {
    const current = accounts.find(el => el.id === currentId);
    const currentDefault = defaultAccounts.find(el => el.id === currentId);

    return {
      ...preparedValuesDetailsToRender(current),
      institutionId: institutions.find(el => el.value === currentDefault.institution_id),
      productName: institutionProducts.find(el => el.value === currentDefault.product_id),
      statementCycleId: statementCyclesOptions
        .find(el => el.value === currentDefault.statement_cycle_id),
    };
  }
);

export const selectLedgerCurrentAccountAlias = createSelector(
  selectLedgerCurrentAccount,
  currentAccount => {
    return currentAccount && currentAccount.accountAlias;
  }
);
