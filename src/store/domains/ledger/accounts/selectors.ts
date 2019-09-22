import { createSelector } from 'reselect';

import { selectInstitutionProductsOptions } from 'store/domains/productDesigner';
import { StoreState } from 'store/StoreState';

// tslint:disable-next-line: max-line-length
import { prepareValuesToRender as prepareLastStatementValuesToRender } from 'store/domains/ledger/statements/utils';

import { selectInstitutionsOptions } from 'store/domains/consts';
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
  (currentId, institutions, institutionProducts, accounts) => {
    const current = accounts.find(el => el.id === currentId);

    return {
      ...preparedValuesDetailsToRender(current),
      institutionId: institutions.find(el => el.value === current.institution_id),
      productName: institutionProducts.find(el => el.value === current.product_id),
    };
  }
);

export const selectLedgerCurrentAccountAlias = createSelector(
  selectLedgerCurrentAccount,
  currentAccount => {
    return currentAccount && currentAccount.accountAlias;
  }
);

export const selectDefaultLedgerLastStatement = (state: StoreState) =>
  state.ledger.accounts.lastStatement;

export const selectLedgerLastStatement = createSelector(
  selectDefaultLedgerLastStatement,
  lastStatement => lastStatement && prepareLastStatementValuesToRender(lastStatement)
);
