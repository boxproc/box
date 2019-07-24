import {
  DebitProductItemDetailsResp,
  LoanProductItemDetailsResp,
  PrepaidProductItemDetailsResp,
  ProductFilterParams,
  ProductFilterParamsPrepared,
  ProductItemDetailsResp,
  ProductItemResp,
  RevolvingCreditProductItemDetailsResp,
  SavingsProductItemDetailsResp,
} from './types';

import {
  loanTypesOptions,
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

export const preparedGeneralProductValues = (product: ProductItemDetailsResp) => {
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

export const preparedRevolvingCreditDetails = (product: RevolvingCreditProductItemDetailsResp) => {
  return {
    details: {
      aprDefault: product.details.apr_default,
      aprCash: product.details.apr_cash,
      aprSales: product.details.apr_sales,
      aprBalanceTransfer: product.details.apr_balance_transfer,
      aprFee: product.details.apr_fee,
      feeLatePayment: product.details.fee_late_payment,
      feeExceedLimit: product.details.fee_exceed_limit,
      feeUnpaid: product.details.fee_unpaid,
      feeOverLimit: product.details.fee_over_limit,
      minimumPaymentPercent: product.details.minimum_payment_percent,
      minimumPaymentAmount: product.details.minimum_payment_amount,
      paymentGraceNumberOfDays: product.details.payment_grace_number_of_days,
      limitSharingAllowed:
        product.details.limit_sharing_allowed_flag === yesNoTypes.YES ? true : false,
    },
  };
};

export const preparedSavingsDetails = (product: SavingsProductItemDetailsResp) => {
  return {
    details: {
      apr: product.details.apr,
      minimumDepositAllowed: product.details.minimum_deposit_allowed,
      maximumDepositAllowed: product.details.maximum_deposit_allowed,
      maximumMonthlyDeposit: product.details.maximum_monthly_deposit,
      savingsType: savingsTypesOptions.find(el => el.value === product.details.savings_type),
    },
  };
};

export const preparedPrepaidDetails = (product: PrepaidProductItemDetailsResp) => {
  return {
    details: {
      dormantAfterNumberOfDays: product.details.dormant_after_number_of_days,
      breakAgesAllowed:
        product.details.break_ages_allowed === yesNoTypes.YES ? true : false,
      reloadAllowed:
        product.details.reload_allowed === yesNoTypes.YES ? true : false,
    },
  };
};

export const preparedLoanDetails = (product: LoanProductItemDetailsResp) => {
  return {
    details: {
      apr: product.details.apr,
      feeLatePayment: product.details.fee_late_payment,
      paymentGraceNumberOfDays: product.details.payment_grace_number_of_days,
      loanType: loanTypesOptions.find(el => el.value === product.details.loan_type),
    },
  };
};

export const preparedDebitDetails = (product: DebitProductItemDetailsResp) => {
  return {
    details: {
      aprOverdraft: product.details.apr_overdraft,
      overdraftAllowed:
        product.details.overdraft_allowed === yesNoTypes.YES ? true : false,
    },
  };
};
