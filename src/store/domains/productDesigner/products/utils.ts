import {
  DebitProductItem,
  DebitProductItemResp,
  LoanProductItem,
  LoanProductItemResp,
  PrepaidProductItem,
  PrepaidProductItemResp,
  ProductFilterParams,
  ProductFilterParamsPrepared,
  ProductItemDetails,
  ProductItemResp,
  RevolvingCreditProductItem,
  RevolvingCreditProductItemResp,
  SavingsProductItem,
  SavingsProductItemResp,
} from './types';

import {
  loanTypesOptions,
  productTypes,
  productTypesOptions,
  savingsTypesOptions,
  schemeTypesOptions,
  statusTypes,
  statusTypesOptions,
  yesNoTypes,
} from 'consts';

export const prepareProductFiltersParams =
  (params: ProductFilterParams): ProductFilterParamsPrepared => {
    const { activeStatusFlag, institutionId, productType } = params;

    return {
      status: activeStatusFlag ? statusTypes.ACTIVE : null,
      institution_id: institutionId && institutionId.map(id => id.value),
      product_type: productType && productType.map(type => type.value),
    };
  };

export const preparedGeneralProductItem = (item: ProductItemResp) => {
  return {
    id: item.id,
    name: item.name,
    description: item.description,
    status: statusTypesOptions.find(el => el.value === item.status).label,
    productType: productTypesOptions.find(el => el.value === item.product_type).label,
    scheme: schemeTypesOptions.find(el => el.value === item.scheme).label,
    historyRetentionNumberOfDay: item.history_retention_number_of_day,
    defaultStatementCycleId: item.default_statement_cycle_id,
    lockedFlag: item.locked_flag === yesNoTypes.YES ? true : false,
  };
};

export const preparedGeneralProductValues = (product: ProductItemResp) => {
  return {
    id: product.id,
    name: product.name,
    description: product.description,
    historyRetentionNumberOfDay: product.history_retention_number_of_day,
    defaultStatementCycleId: product.default_statement_cycle_id,
    productType: productTypesOptions.find(el => el.value === product.product_type),
    status: statusTypesOptions.find(el => el.value === product.status),
    scheme: schemeTypesOptions.find(el => el.value === product.scheme),
    lockedFlag: product.locked_flag === yesNoTypes.YES ? true : false,
  };
};

export const preparedRevolvingCredit = (product: RevolvingCreditProductItemResp) => {
  return {
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

export const preparedRevolvingCreditToSend = (product: RevolvingCreditProductItem) => {
  return {
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

export const preparedSavings = (product: SavingsProductItemResp) => {
  return {
    apr: product.apr,
    minimumDepositAllowed: product.minimum_deposit_allowed,
    maximumDepositAllowed: product.maximum_deposit_allowed,
    maximumMonthlyDeposit: product.maximum_monthly_deposit,
    savingsType: savingsTypesOptions.find(el => el.value === product.savings_type),
  };
};

export const preparedSavingsToSend = (product: SavingsProductItem) => {
  return {
    apr: Number(product.apr),
    minimum_deposit_allowed: Number(product.minimumDepositAllowed),
    maximum_deposit_allowed: Number(product.maximumDepositAllowed),
    maximum_monthly_deposit: Number(product.maximumMonthlyDeposit),
    savingsType: product.savingsType.value,
  };
};

export const preparedPrepaid = (product: PrepaidProductItemResp) => {
  return {
    dormantAfterNumberOfDays: Number(product.dormant_after_number_of_days),
    breakAgesAllowed:
      product.break_ages_allowed === yesNoTypes.YES ? true : false,
    reloadAllowed:
      product.reload_allowed === yesNoTypes.YES ? true : false,
  };
};

export const preparedPrepaidToSend = (product: PrepaidProductItem) => {
  return {
    dormant_after_number_of_days: Number(product.dormantAfterNumberOfDays),
    break_ages_allowed: product.breakAgesAllowed === true ? yesNoTypes.YES : yesNoTypes.NO,
    reload_allowed: product.reloadAllowed === true ? yesNoTypes.YES : yesNoTypes.NO,
  };
};

export const preparedLoan = (product: LoanProductItemResp) => {
  return {
    apr: product.apr,
    feeLatePayment: product.fee_late_payment,
    paymentGraceNumberOfDays: product.payment_grace_number_of_days,
    loanType: loanTypesOptions.find(el => el.value === product.loan_type),
  };
};

export const preparedLoanToSend = (product: LoanProductItem) => {
  return {
    apr: Number(product.apr),
    fee_late_payment: Number(product.feeLatePayment),
    payment_grace_number_of_days: product.paymentGraceNumberOfDays,
  };
};

export const preparedDebit = (product: DebitProductItemResp) => {
  return {
    aprOverdraft: product.apr_overdraft,
    overdraftAllowed:
      product.overdraft_allowed === yesNoTypes.YES ? true : false,
  };
};

export const preparedDebitToSend = (product: DebitProductItem) => {
  return {
    apr_overdraft: Number(product.aprOverdraft),
    overdraft_allowed: product.overdraftAllowed === true ? yesNoTypes.YES : yesNoTypes.NO,
  };
};

const getDetailsByType = (item: any) => {
  const type = item.productType.value;

  if (type === productTypes.DEBIT) {
    return preparedDebitToSend(item);
  } else if (type === productTypes.LOAN) {
    return preparedLoanToSend(item);
  } else if (type === productTypes.PREPAID) {
    return preparedPrepaidToSend(item);
  } else if (type === productTypes.REVOLVING_CREDIT) {
    return preparedRevolvingCreditToSend(item);
  } else if (type === productTypes.SAVINGS) {
    return preparedSavingsToSend(item);
  } else {
    return null;
  }
};

export const preparedProductItemToSend = (item: ProductItemDetails) => {
  return {
    id: item.id,
    product_id: item.id,
    name: item.name,
    description: item.description,
    status: item.status.value,
    institution_id: item.institutionId.value,
    currency_code: item.currencyCode.label,
    product_type: item.productType.value,
    scheme: item.scheme.value,
    history_retention_number_of_day: item.historyRetentionNumberOfDay,
    default_statement_cycle_id: item.defaultStatementCycleId.value,
    locked_flag: item.lockedFlag ? yesNoTypes.YES : yesNoTypes.NO,
    ...getDetailsByType(item),
  };
};
