import { createSelector } from 'reselect';

import { StoreState } from 'store';
import { selectInstitutionProductsOptions } from 'store/domains/productDesigner';

import { selectDictionaryRepaymentTypesOptions } from 'store/domains/administration';
import { selectInstitutionsOptions } from 'store/domains/login';
import { activeItemIdSelector } from 'store/domains/utils';

import {
  preparedAccountCardsToRender,
  prepareDataDetailsToRender,
  prepareDataToRender,
} from './utils';

export const selectDefaultLedgerAccounts = (state: StoreState) =>
  state.ledger.accounts.accounts && state.ledger.accounts.accounts;

export const selectLedgerAccounts = createSelector(
  selectDefaultLedgerAccounts,
  selectInstitutionsOptions,
  (items, institutions) => items && items.map(item => {
    const institution = institutions.find(el => el.value === item.institution_id);

    return prepareDataToRender(item, institution);
  })
);

export const selectDefaultLedgerAccountCards = (state: StoreState) => state.ledger.accounts.cards;

export const selectLedgerAccountCards = createSelector(
  selectDefaultLedgerAccountCards,
  items => items && items.map(item => preparedAccountCardsToRender(item))
);

export const selectLedgerCurrentAccountProductType = createSelector(
  activeItemIdSelector,
  selectDefaultLedgerAccounts,
  (currentId, accounts) => {
    const current = accounts.find(el => el.id === currentId);

    return current && current.product_type;
  }
);

export const selectLedgerCurrentAccount = createSelector(
  activeItemIdSelector,
  selectInstitutionsOptions,
  selectInstitutionProductsOptions,
  selectDefaultLedgerAccounts,
  selectDictionaryRepaymentTypesOptions,
  (currentId, institutions, institutionProducts, accounts, repaymentTypesOptions) => {
    const current = accounts.find(el => el.id === currentId);
    const repaymentType = current && current.repayment_type;

    return {
      ...prepareDataDetailsToRender(current),
      institutionId: current && institutions.find(el => el.value === current.institution_id),
      product: current && institutionProducts.find(el => el.value === current.product_id),
      repaymentType: repaymentTypesOptions.find(el => el.value === repaymentType),
    };
  }
);

export const selectLedgerCurrentAccountAuxCounters = createSelector(
  selectLedgerCurrentAccount,
  account => {
    return {
      auxCounter1Description: account.auxCounter1Description,
      auxCounter2Description: account.auxCounter2Description,
      auxCounter3Description: account.auxCounter3Description,
      auxCounter1Enabled: account.auxCounter1Enabled,
      auxCounter2Enabled: account.auxCounter2Enabled,
      auxCounter3Enabled: account.auxCounter3Enabled,
    };
  }
);

export const selectLedgerCurrentAccountAlias = createSelector(
  selectLedgerCurrentAccount,
  currentAccount => currentAccount && currentAccount.accountAlias
);

export const selectLedgerCurrentAccountCurrencyCode = createSelector(
  selectLedgerCurrentAccount,
  currentAccount => currentAccount && currentAccount.currencyNumericCode
);

export const selectLedgerCurrentAccountBalanceLimit = createSelector(
  selectLedgerCurrentAccount,
  currentAccount => currentAccount && currentAccount.balanceLimit
);

export const selectLedgerCurrentAccountBalanceLimitShared = createSelector(
  selectLedgerCurrentAccount,
  currentAccount => currentAccount && currentAccount.balanceLimitShared
);

export const selectLedgerCurrentAccountProductOverrideId = createSelector(
  selectLedgerCurrentAccount,
  currentAccount => currentAccount && currentAccount.productOverrideId
);

export const selectLedgerCurrentAccountHasProductOverride = createSelector(
  selectLedgerCurrentAccount,
  currentAccount => currentAccount && currentAccount.productOverrideId ? true : false
);
