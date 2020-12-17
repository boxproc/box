import { createSelector } from 'reselect';

import { IStoreState } from 'store';
import { createLoadingSelector } from 'store/domains/loader';
import { userInstitutionsOptionsSelector } from 'store/domains/login';
import { instProductsOptionsSelector } from 'store/domains/productDesigner';
import { activeItemIdSelector } from 'store/domains/utils';
import { directDebitsMandatesOptionsSelector } from './../customers';
import { ActionTypeKeys } from './actionTypes';
import { prepareCardsToRender, prepareDataToRender, prepareDetailsToRender } from './utils';
import { prepareResultLimitAdjDataToRender } from './utilsLimitAdj';
import { prepareManualTrResultDataToRender } from './utilsManualTr';

/** Accounts selectors */

export const defaultAccountsSelector = (state: IStoreState) => state.ledger.accounts.accounts;

export const accountsSelector = createSelector(
  defaultAccountsSelector,
  userInstitutionsOptionsSelector,
  (accounts, institutions) => accounts && accounts.map(account => {
    const institution = institutions.find(el => el.value === account.institution_id);

    return prepareDataToRender(account, institution);
  })
);

/** Account cards selectors */

export const defaultAccountCardsSelector = (state: IStoreState) => state.ledger.accounts.cards;

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
  instProductsOptionsSelector,
  defaultAccountsSelector,
  directDebitsMandatesOptionsSelector,
  (currentId, institutions, institutionProducts, accounts, mandates) => {
    const currentAcc = accounts.find(el => el.id === currentId);

    if (!currentAcc) {
      return null;
    }

    const mandateId = currentAcc.direct_debit_mandate_id;

    const currentMandate = mandates.find(el => el.value === mandateId);
    const currentProduct = institutionProducts.find(el => el.value === currentAcc.product_id);
    const currentInstitution = institutions.find(el => el.value === currentAcc.institution_id);

    return {
      ...prepareDetailsToRender(currentAcc),
      institutionId: currentInstitution,
      product: currentProduct,
      directDebitMandateId: currentMandate,
    };
  }
);

export const currentAccAuxCountersSelector = createSelector(
  currentAccSelector,
  data => {
    if (!data) {
      return null;
    }

    return {
      auxCounter1Description: data.auxCounter1Description,
      auxCounter2Description: data.auxCounter2Description,
      auxCounter3Description: data.auxCounter3Description,
      auxCounter1Enabled: data.auxCounter1Enabled,
      auxCounter2Enabled: data.auxCounter2Enabled,
      auxCounter3Enabled: data.auxCounter3Enabled,
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
  ActionTypeKeys.FILTER_ACCOUNTS_BY_ID,
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

/**
 * Manual transaction selectors
 */

export const defaultManualTrSelector = (state: IStoreState) =>
  state.ledger.accounts.manualTrResult;

export const manualTransactionSelector = createSelector(
  defaultManualTrSelector,
  data => data && prepareManualTrResultDataToRender(data)
);

export const manualTransactionIdSelector = createSelector(
  manualTransactionSelector,
  data => data && data.transactionId
);

export const isManualTransactionLoading = createLoadingSelector([
  ActionTypeKeys.MAKE_TRANSACTION,
]);

/**
 * Limit adjustment selectors
 */

export const defaultLimitAdjustmentSelector = (state: IStoreState) =>
  state.ledger.accounts.limitAdjResult;

export const limitAdjustmentSelector = createSelector(
  defaultLimitAdjustmentSelector,
  data => data && prepareResultLimitAdjDataToRender(data)
);

export const isLimitAdjustmentLoadingSelector = createLoadingSelector([
  ActionTypeKeys.LIMIT_ADJUSTMENT,
]);
