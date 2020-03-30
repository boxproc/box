import { createSelector } from 'reselect';

import { StoreState } from 'store';
import { selectInstitutionProductsOptions } from 'store/domains/productDesigner';

import { dictionaryRepaymentTypesOptionsSelector } from 'store/domains/administration';
import { userInstitutionsOptionsSelector } from 'store/domains/login';
import { activeItemIdSelector } from 'store/domains/utils';

import { createLoadingSelector } from 'store/domains/loader';
import { ActionTypeKeys } from './actionTypes';
import {
  prepareCardsToRender,
  prepareDataToRender,
  prepareDetailsToRender,
} from './utils';

/** Accounts selectors */

export const defaultAccountsSelector = (state: StoreState) => state.ledger.accounts.accounts;

export const accountsSelector = createSelector(
  defaultAccountsSelector,
  userInstitutionsOptionsSelector,
  (accounts, institutions) => accounts && accounts.map(account => {
    const institution = institutions.find(el => el.value === account.institution_id);

    return prepareDataToRender(account, institution);
  })
);

/** Account cards selectors */

export const defaultAccountCardsSelector = (state: StoreState) => state.ledger.accounts.cards;

export const accountCardsSelector = createSelector(
  defaultAccountCardsSelector,
  data => data && data.map(el => prepareCardsToRender(el))
);

/** Current account selectors */

export const currentAccProductTypeSelector = createSelector(
  activeItemIdSelector,
  defaultAccountsSelector,
  (currentId, accounts) => {
    const currentAcc = accounts.find(el => el.id === currentId);

    return currentAcc && currentAcc.product_type;
  }
);

export const currentAccSelector = createSelector(
  activeItemIdSelector,
  userInstitutionsOptionsSelector,
  selectInstitutionProductsOptions,
  defaultAccountsSelector,
  dictionaryRepaymentTypesOptionsSelector,
  (currentId, institutions, institutionProducts, accounts, repaymentTypesOptions) => {
    const currentAcc = accounts.find(el => el.id === currentId);
    const repaymentType = currentAcc && currentAcc.repayment_type;

    return {
      ...prepareDetailsToRender(currentAcc),
      institutionId: currentAcc && institutions.find(el => el.value === currentAcc.institution_id),
      product: currentAcc && institutionProducts.find(el => el.value === currentAcc.product_id),
      repaymentType: repaymentTypesOptions.find(el => el.value === repaymentType),
    };
  }
);

export const currentAccAuxCountersSelector = createSelector(
  currentAccSelector,
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

export const currentAccAliasSelector = createSelector(
  currentAccSelector,
  data => data && data.accountAlias
);

export const currentAccCurrencyCodeSelector = createSelector(
  currentAccSelector,
  data => data && data.currencyNumericCode
);

export const currentAccBalanceLimitSelector = createSelector(
  currentAccSelector,
  data => data && data.balanceLimit
);

export const currentAccBalanceLimitSharedSelector = createSelector(
  currentAccSelector,
  data => data && data.balanceLimitShared
);

export const currentAccProductOverrideIdSelector = createSelector(
  currentAccSelector,
  data => data && data.productOverrideId
);

export const currentAccHasProductOverrideSelector = createSelector(
  currentAccSelector,
  data => data && data.productOverrideId ? true : false
);

/**
 * Account loading selectors
 */

export const isAccountLoadingSelector = createLoadingSelector([
  ActionTypeKeys.FILTER_ACCOUNTS,
]);

export const isUpdatingAccountSelector = createLoadingSelector([
  ActionTypeKeys.UPDATE_ACCOUNT,
]);

export const isAddingAccountSelector = createLoadingSelector([
  ActionTypeKeys.ADD_ACCOUNT,
]);

export const isAccountCardsLoadingSelector = createLoadingSelector([
  ActionTypeKeys.GET_ACCOUNT_CARDS,
]);

export const isOrderingAccountCardSelector = createLoadingSelector([
  ActionTypeKeys.ORDER_ACCOUNT_CARD,
]);
