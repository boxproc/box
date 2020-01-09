import { createSelector } from 'reselect';

import { StoreState } from 'store/StoreState';

import { selectCurrencyCodesOptions } from 'store/domains/administration';
import { selectInstitutions, selectInstitutionsOptions } from 'store/domains/login';
import { selectActiveItemId } from 'store/domains/utils';
import {
  prepareGeneralProductData,
  prepareGeneralProductItem,
  prepareProductAprsToRender,
  prepareProductDetailsData,
  prepareProductFeesToRender,
  prepareProductIllustrationAprsItem,
  prepareProductIllustrationData,
  prepareProductIllustrationFeesItem,
  prepareProductIllustrationRewardsItem,
  prepareProductIllustrationStatementsItem,
  prepareProductIllustrationTransactionsItem,
  prepareProductRewardsToRender,
} from './utils';

export const selectDefaultProductItems = (state: StoreState) =>
  state.productDesigner.products.products;

export const selectDefaultRevolvingCreditIllustration = (state: StoreState) =>
  state.productDesigner.products.productRevolvingCreditIllustration;

export const selectStatementsIllustration = createSelector(
  selectDefaultRevolvingCreditIllustration,
  (revolvingCreditIllustration) =>
    revolvingCreditIllustration &&
    revolvingCreditIllustration.statements.asMutable().map(statement => {
      if (!statement) {
        return null;
      }
      return prepareProductIllustrationStatementsItem(statement);
    })
);

export const selectAprsIllustration = createSelector(
  selectDefaultRevolvingCreditIllustration,
  (revolvingCreditIllustration) =>
    revolvingCreditIllustration && revolvingCreditIllustration.aprs &&
    revolvingCreditIllustration.aprs.asMutable().map(apr => {
      if (!apr) {
        return null;
      }
      return prepareProductIllustrationAprsItem(apr);
    })
);

export const selectFeesIllustration = createSelector(
  selectDefaultRevolvingCreditIllustration,
  (revolvingCreditIllustration) =>
    revolvingCreditIllustration && revolvingCreditIllustration.fees &&
    revolvingCreditIllustration.fees.asMutable().map(fee => {
      if (!fee) {
        return null;
      }
      return prepareProductIllustrationFeesItem(fee);
    })
);

export const selectRewardsIllustration = createSelector(
  selectDefaultRevolvingCreditIllustration,
  (revolvingCreditIllustration) =>
    revolvingCreditIllustration && revolvingCreditIllustration.rewards &&
    revolvingCreditIllustration.rewards.asMutable().map(reward => {
      if (!reward) {
        return null;
      }
      return prepareProductIllustrationRewardsItem(reward);
    })
);

export const selectTransactionsIllustration = createSelector(
  selectDefaultRevolvingCreditIllustration,
  (revolvingCreditIllustration) =>
    revolvingCreditIllustration && revolvingCreditIllustration.transactions &&
    revolvingCreditIllustration.transactions.asMutable().map(transaction => {
      if (!transaction) {
        return null;
      }
      return prepareProductIllustrationTransactionsItem(transaction);
    })
);

export const selectProductItems = createSelector(
  selectDefaultProductItems,
  selectInstitutions,
  (products, institutions) => products && products.asMutable().map(product => {
    if (!products) {
      return null;
    }

    const institution = institutions.find(el => el.id === product.institution_id);
    const institutionName = institution && institution.institutionName;

    return prepareGeneralProductItem(product, institutionName);
  })
);

export const selectDefaultCurrentProduct = (state: StoreState) =>
  state.productDesigner.products.currentProduct;

export const selectCurrentProduct = createSelector(
  selectDefaultCurrentProduct,
  selectInstitutionsOptions,
  selectCurrencyCodesOptions,
  (product, institutions, currencyCodes) => {
    if (!product) {
      return null;
    }

    return {
      ...prepareGeneralProductData(product),
      institutionId: institutions && institutions.find(el => el.value === product.institution_id),
      currencyCode: currencyCodes && currencyCodes.find(el => el.value === product.currency_code),
    };
  }
);

export const selectCurrentProductInstitutionId = createSelector(
  selectCurrentProduct,
  product => {
    if (!product || !product.institutionId) {
      return null;
    }

    return product.institutionId.value;
  }
);

export const selectProductGeneralLedger = createSelector(
  selectDefaultProductItems,
  selectActiveItemId,
  (products, activeId) => {
    const current = products.find(product => product.id === activeId);

    if (!current) {
      return null;
    }

    const {
      gl_acc_assets,
      gl_acc_liabilities,
      gl_acc_profit,
      gl_acc_loss,
    } = current;

    return {
      glAccAssets: gl_acc_assets,
      glAccLiabilities: gl_acc_liabilities,
      glAccProfit: gl_acc_profit,
      glAccLoss: gl_acc_loss,
    };
  }
);

export const selectCurrentProductName = createSelector(
  selectDefaultCurrentProduct,
  product => product && product.name
);

export const selectProductName = createSelector(
  selectDefaultProductItems,
  selectActiveItemId,
  (products, activeId) => {
    const current = products.find(product => product.id === activeId);

    return current && current.name;
  }
);

export const selectIsProductOverride = createSelector(
  selectCurrentProduct,
  product => product && product.overridesProductId ? true : false
);

export const selectCurrentProductType = createSelector(
  selectCurrentProduct,
  product => product && product.productType
);

export const selectDetailsCurrentProductDetails = (state: StoreState) =>
  state.productDesigner.products.currentProductDetails;

export const selectCurrentProductDetails = createSelector(
  selectDetailsCurrentProductDetails,
  selectCurrentProductType,
  (product, productType) => product && prepareProductDetailsData(product, productType)
);

export const selectDefaultInstitutionProducts = (state: StoreState) =>
  state.productDesigner.products.institutionProducts;

export const selectInstitutionProductsOptions = createSelector(
  selectDefaultInstitutionProducts,
  products => {
    return products && products.asMutable().map(product => {
      return {
        value: product.id,
        label: product.name,
      };
    });
  }
);

export const selectInstitutionProducts = createSelector(
  selectDefaultInstitutionProducts,
  products => {
    return products && products.asMutable().map(product => {
      return {
        id: product.id,
        name: product.name,
        productType: product.product_type,
        defNumOfIntrstFreeInstlmts: product.def_num_of_intrst_free_instlmts,
        defNumOfInstallments: product.def_num_of_installments,
      };
    });
  }
);

export const selectDefaultProductAprs = (state: StoreState) =>
  state.productDesigner.products.productAprs;

export const selectProductAprs = createSelector(
  selectDefaultProductAprs,
  aprs => aprs && aprs.asMutable().map(apr => prepareProductAprsToRender(apr))
);

export const selectProductAprsForRules = createSelector(
  selectDefaultProductAprs,
  aprs => aprs && aprs.asMutable().map(apr => {
    return {
      name: apr.product_apr_id,
      description: apr.description,
    };
  })
);

export const selectDefaultProductFees = (state: StoreState) =>
  state.productDesigner.products.productFees;

export const selectProductFees = createSelector(
  selectDefaultProductFees,
  fees => fees && fees.asMutable().map(fee => prepareProductFeesToRender(fee))
);

export const selectProductFeesForRules = createSelector(
  selectDefaultProductFees,
  fees => fees && fees.asMutable().map(fee => {
    return {
      name: fee.product_fee_id,
      description: fee.description,
    };
  })
);

export const selectDefaultProductRewards = (state: StoreState) =>
  state.productDesigner.products.productRewards;

export const selectProductRewards = createSelector(
  selectDefaultProductRewards,
  rewards => rewards && rewards.asMutable().map(reward => prepareProductRewardsToRender(reward))
);

export const selectProductRewardsForRules = createSelector(
  selectDefaultProductRewards,
  rewards => rewards && rewards.asMutable().map(reward => {
    return {
      name: reward.product_reward_id,
      description: reward.description,
    };
  })
);
export const selectDefaultAprs = (state: StoreState) =>
  state.productDesigner.products.productFeeAprs;

export const selectDefaultIllustrationLoan = (state: StoreState) =>
  state.productDesigner.products.productIllustration;

export const selectAprsOptions = createSelector(
  selectDefaultAprs,
  items => items && items.asMutable().map(item => {
    return {
      value: item.product_apr_id,
      label: item.apr_description,
    };
  })
);

export const selectProductLoanIllustration = createSelector(
  selectDefaultIllustrationLoan,
  items => items && items.asMutable().map(item => prepareProductIllustrationData(item))
);
