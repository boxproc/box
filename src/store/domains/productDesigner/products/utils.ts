import {
  DebitProductItem,
  DebitProductItemResp,
  LoanProductItem,
  LoanProductItemResp,
  NewProduct,
  PrepaidProductItem,
  PrepaidProductItemResp,
  ProductFilterParams,
  ProductFilterParamsPrepared,
  ProductItemGeneral,
  ProductItemResp,
  ProductRulesItem,
  ProductRulesItemResp,
  RevolvingCreditProductItem,
  RevolvingCreditProductItemResp,
  SavingsProductItem,
  SavingsProductItemResp,
} from './types';

import {
  actionTypesOptions,
  loanTypesOptions,
  productTypes,
  productTypesOptions,
  savingsTypesOptions,
  schemeTypesOptions,
  statementCyclesOptions,
  statusTypes,
  statusTypesOptions,
  yesNoTypes,
} from 'consts';
import { SelectValues } from 'types';

export const prepareProductFiltersParams =
  (params: ProductFilterParamsPrepared): ProductFilterParams => {
    return {
      activeStatusFlag: params.status === statusTypes.ACTIVE ? true : false,
      productType: params.product_type ?
        params.product_type.map(type => productTypesOptions
          .find(el => el.value === type)) : null,
    };
  };

export const prepareProductFiltersParamsToSend =
  (params: ProductFilterParams): ProductFilterParamsPrepared => {
    const { activeStatusFlag, institutionId, productType } = params;

    return {
      status: activeStatusFlag ? statusTypes.ACTIVE : null,
      institution_id: institutionId ? institutionId.value : null,
      product_type: productType && productType.length ? productType.map(type => type.value) : null,
    };
  };

export const prepareGeneralProductItem = (item: ProductItemResp) => {
  return {
    id: item.id,
    name: item.name,
    description: item.description,
    status: statusTypesOptions.find(el => el.value === item.status).label,
    productType: productTypesOptions.find(el => el.value === item.product_type).label,
    scheme: schemeTypesOptions.find(el => el.value === item.scheme).label,
    historyRetentionNumberOfDay: item.history_retention_number_of_day,
    defaultStatementCycleId:
      statementCyclesOptions.find(el => el.value === item.default_statement_cycle_id).label,
    currencyCode: item.currency_code,
    lockedFlag: item.locked_flag === yesNoTypes.YES ? true : false,
  };
};

export const prepareGeneralProductValues =
  (product: ProductItemResp): Partial<ProductItemGeneral> => {
    return {
      id: product.id,
      name: product.name,
      description: product.description,
      historyRetentionNumberOfDay: product.history_retention_number_of_day,
      productType: productTypesOptions.find(el => el.value === product.product_type),
      status: statusTypesOptions.find(el => el.value === product.status),
      scheme: schemeTypesOptions.find(el => el.value === product.scheme),
      lockedFlag: product.locked_flag === yesNoTypes.YES ? true : false,
      defaultStatementCycleId:
        statementCyclesOptions.find(el => el.value === product.default_statement_cycle_id),
    };
  };

export const prepareGeneralProductValuesToSend =
  (product: Partial<ProductItemGeneral>): ProductItemResp => {
    return {
      id: product.id,
      name: product.name,
      description: product.description,
      status: product.status.value,
      institution_id: product.institutionId.value,
      currency_code: product.currencyCode.value,
      product_type: product.productType.value,
      scheme: product.scheme.value,
      history_retention_number_of_day: Number(product.historyRetentionNumberOfDay),
      default_statement_cycle_id: product.defaultStatementCycleId.value,
      locked_flag: product.lockedFlag ? yesNoTypes.YES : yesNoTypes.NO,
    };
  };

export const prepareProductDetailsValues =
  (product: any, productType: SelectValues) => {
    const type = productType.value;

    if (type === productTypes.DEBIT) {
      return prepareDebit(product);
    } else if (type === productTypes.LOAN) {
      return prepareLoan(product);
    } else if (type === productTypes.PREPAID) {
      return preparePrepaid(product);
    } else if (type === productTypes.REVOLVING_CREDIT) {
      return prepareRevolvingCredit(product);
    } else if (type === productTypes.SAVINGS) {
      return prepareSavings(product);
    } else {
      return null;
    }
  };

export const prepareRevolvingCredit = (product: RevolvingCreditProductItemResp) => {
  return {
    productId: product.product_id,
    aprDefault: product.apr_default,
    aprCash: product.apr_cash,
    aprSales: product.apr_sales,
    aprBalanceTransfer: product.apr_balance_transfer,
    aprFee: product.apr_fee,
    feeLatePayment: product.fee_late_payment,
    feeExceedLimit: product.fee_exceed_limit,
    feeUnpaid: product.fee_unpaid,
    feeOverLimit: product.fee_over_limit,
    minimumPaymentPercent: product.minimum_payment_percent,
    minimumPaymentAmount: product.minimum_payment_amount,
    paymentGraceNumberOfDays: product.payment_grace_number_of_days,
    limitSharingAllowedFlag:
      product.limit_sharing_allowed_flag === yesNoTypes.YES ? true : false,
  };
};

export const prepareRevolvingCreditToSend = (product: RevolvingCreditProductItem) => {
  return {
    product_id: product.productId,
    apr_default: Number(product.aprDefault),
    apr_cash: Number(product.aprCash),
    apr_sales: Number(product.aprSales),
    apr_balance_transfer: Number(product.aprBalanceTransfer),
    apr_fee: Number(product.aprFee),
    fee_late_payment: Number(product.feeLatePayment),
    fee_exceed_limit: Number(product.feeExceedLimit),
    fee_unpaid: Number(product.feeUnpaid),
    fee_over_limit: Number(product.feeOverLimit),
    minimum_payment_percent: Number(product.minimumPaymentPercent),
    minimum_payment_amount: Number(product.minimumPaymentAmount),
    payment_grace_number_of_days: Number(product.paymentGraceNumberOfDays),
    limit_sharing_allowed_flag:
      product.limitSharingAllowedFlag === true ? yesNoTypes.YES : yesNoTypes.NO,
  };
};

export const prepareSavings = (product: SavingsProductItemResp) => {
  return {
    productId: product.product_id,
    apr: product.apr,
    minimumDepositAllowed: product.minimum_deposit_allowed,
    maximumDepositAllowed: product.maximum_deposit_allowed,
    maximumMonthlyDeposit: product.maximum_monthly_deposit,
    savingsType: savingsTypesOptions.find(el => el.value === product.savings_type),
  };
};

export const prepareSavingsToSend = (product: SavingsProductItem) => {
  return {
    product_id: product.productId,
    apr: Number(product.apr),
    minimum_deposit_allowed: Number(product.minimumDepositAllowed),
    maximum_deposit_allowed: Number(product.maximumDepositAllowed),
    maximum_monthly_deposit: Number(product.maximumMonthlyDeposit),
    savings_type: product.savingsType.value,
  };
};

export const preparePrepaid = (product: PrepaidProductItemResp) => {
  return {
    productId: product.product_id,
    dormantAfterNumberOfDays: Number(product.dormant_after_number_of_days),
    breakagesAllowed:
      product.breakages_allowed === yesNoTypes.YES ? true : false,
    reloadAllowed:
      product.reload_allowed === yesNoTypes.YES ? true : false,
  };
};

export const preparePrepaidToSend = (product: PrepaidProductItem) => {
  return {
    product_id: product.productId,
    dormant_after_number_of_days: Number(product.dormantAfterNumberOfDays),
    breakages_allowed: product.breakagesAllowed === true ? yesNoTypes.YES : yesNoTypes.NO,
    reload_allowed: product.reloadAllowed === true ? yesNoTypes.YES : yesNoTypes.NO,
  };
};

export const prepareLoan = (product: LoanProductItemResp) => {
  return {
    productId: product.product_id,
    apr: product.apr,
    feeLatePayment: product.fee_late_payment,
    paymentGraceNumberOfDays: product.payment_grace_number_of_days,
    loanType: loanTypesOptions.find(el => el.value === product.loan_type),
  };
};

export const prepareLoanToSend = (product: LoanProductItem) => {
  return {
    product_id: product.productId,
    apr: Number(product.apr),
    fee_late_payment: Number(product.feeLatePayment),
    payment_grace_number_of_days: Number(product.paymentGraceNumberOfDays),
    loan_type: product.loanType.value,
  };
};

export const prepareDebit = (product: DebitProductItemResp) => {
  return {
    productId: product.product_id,
    aprOverdraft: product.apr_overdraft,
    overdraftAllowed:
      product.overdraft_allowed === yesNoTypes.YES ? true : false,
  };
};

export const prepareDebitToSend = (product: DebitProductItem) => {
  return {
    product_id: product.productId,
    apr_overdraft: Number(product.aprOverdraft),
    overdraft_allowed: product.overdraftAllowed === true ? yesNoTypes.YES : yesNoTypes.NO,
  };
};

export const prepareProductDetailsValuesToSend =
  (product: any, productType: SelectValues) => {
    const type = productType.value;

    if (type === productTypes.DEBIT) {
      return prepareDebitToSend(product);
    } else if (type === productTypes.LOAN) {
      return prepareLoanToSend(product);
    } else if (type === productTypes.PREPAID) {
      return preparePrepaidToSend(product);
    } else if (type === productTypes.REVOLVING_CREDIT) {
      return prepareRevolvingCreditToSend(product);
    } else if (type === productTypes.SAVINGS) {
      return prepareSavingsToSend(product);
    } else {
      return null;
    }
  };

export const prepareNewProductValuesToSend = (product: Partial<NewProduct>) => {
  return {
    ...prepareGeneralProductValuesToSend(product),
    ...prepareProductDetailsValuesToSend(product, product.productType),
  };
};

export const prepareProductRuleValues = (rule: ProductRulesItemResp) => {
  if (!rule) {
    return null;
  }
  return {
    description: rule.description,
    actionType: actionTypesOptions.find(el => el.value === rule.action_type),
    script: rule.script,
    productId: rule.product_id,
  };
};

export const prepareProductRuleValuesToSend =
  (rule: Partial<ProductRulesItem>) => {
    if (!rule) {
      return null;
    }

    return {
      description: rule.description,
      event_id: rule.eventId && rule.eventId.value,
      action_type: rule.actionType && rule.actionType.value,
      script: rule.script,
    };
  };
