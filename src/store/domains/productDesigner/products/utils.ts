import {
  actionTypesOptions,
  aprTypesOptions,
  cardFormFactorOptions,
  feeTypesOptions,
  loanTypesOptions,
  productTypesCodes,
  productTypesOptions,
  savingsTypesOptions,
  schemeTypesOptions,
  statusTypesCodes,
  statusTypesOptions,
  yesNoTypesCodes,
} from 'consts';

import {
  DebitProductItem,
  DebitProductItemResp,
  GeneralLedgerItemPrepared,
  LoanProductItem,
  LoanProductItemResp,
  NewProduct,
  PrepaidProductItem,
  PrepaidProductItemResp,
  ProductApr,
  ProductAprFormValues,
  ProductAprItem,
  ProductAprPlainInfo,
  ProductFee,
  ProductFeeFormValues,
  ProductFeeItem,
  ProductFeePlainInfo,
  ProductFilter,
  ProductFilterPrepared,
  ProductItemGeneral,
  ProductItemResp,
  ProductRulesItem,
  ProductRulesItemResp,
  RevolvingCreditProductItem,
  RevolvingCreditProductItemResp,
  SavingsProductItem,
  SavingsProductItemResp,
  ServicesItemsPrepared,
} from './types';

import { SelectValues } from 'types';

export const prepareProductFiltersParamsToSend = (params: ProductFilter): ProductFilterPrepared => {
  const { activeStatusFlag, institutionId, productType } = params;

  return {
    status: activeStatusFlag ? statusTypesCodes.ACTIVE : null,
    institution_id: institutionId ? institutionId.value : null,
    product_type: productType && productType.length ? productType.map(type => type.value) : null,
  };
};

export const prepareCardServiceDataToSend = (data: Partial<ServicesItemsPrepared>) => {
  if (!data) {
    return null;
  }

  const { endpoints, interfaces, secureProviderInterfaces, id } = data;

  const endpointId = endpoints.value;
  const interfaceId = interfaces.value;
  const secureProviderInterfaceId = secureProviderInterfaces.value;

  return {
    id,
    card_transactions_endpoint_id: endpointId ? endpointId : null,
    card_management_interface_id: interfaceId ? interfaceId : null,
    provider_3d_secure_interface_id: secureProviderInterfaceId
      ? secureProviderInterfaceId
      : null,
  };
};

export const prepareGeneralLedgerToSend = (data: Partial<GeneralLedgerItemPrepared>) => {
  if (!data) {
    return null;
  }

  const { glAccAssets, glAccLiabilities, glAccProfit, glAccLoss, id } = data;

  return {
    product_id: id,
    gl_acc_assets: glAccAssets,
    gl_acc_liabilities: glAccLiabilities,
    gl_acc_profit: glAccProfit,
    gl_acc_loss: glAccLoss,
  };
};

export const prepareGeneralProductItem = (item: ProductItemResp) => {
  const status = statusTypesOptions.find(el => el.value === item.status);
  const productType = productTypesOptions.find(el => el.value === item.product_type);
  const scheme = schemeTypesOptions.find(el => el.value === item.scheme);

  return {
    id: item.id,
    name: item.name,
    description: item.description,
    status: status && status.label,
    productType: productType && productType.label,
    scheme: scheme && scheme.label,
    historyRetentionNumberOfDay: item.history_retention_number_of_day,
    currencyCode: item.currency_code,
    defaultStatementCycle: item.statement_cycle_description,
    lockedFlag: item.locked_flag === yesNoTypesCodes.YES ? true : false,
    overridesProductId: item.overrides_product_id,
  };
};

export const prepareGeneralProductData = (product: ProductItemResp):
  Partial<ProductItemGeneral> => {
  if (!product) {
    return null;
  }

  return {
    id: product.id,
    name: product.name,
    description: product.description,
    historyRetentionNumberOfDay: product.history_retention_number_of_day,
    productType: productTypesOptions.find(el => el.value === product.product_type),
    status: statusTypesOptions.find(el => el.value === product.status),
    scheme: schemeTypesOptions.find(el => el.value === product.scheme),
    lockedFlag: product.locked_flag === yesNoTypesCodes.YES ? true : false,
    overridesProductId: product.overrides_product_id,
    cardFormFactor: cardFormFactorOptions.find(el => el.value === product.card_form_factor),
    numberOfDaysCardExpires: product.number_of_days_card_expires,
  };
};

export const prepareGeneralProductDataToSend = (product: Partial<ProductItemGeneral>):
  ProductItemResp => {
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
    default_statement_cycle_id: product.defaultStatementCycle.value,
    locked_flag: product.lockedFlag ? yesNoTypesCodes.YES : yesNoTypesCodes.NO,
    statement_cycle_description: product.defaultStatementCycle.value,
    overrides_product_id: product.overridesProductId,
    card_form_factor: product.cardFormFactor.value,
    number_of_days_card_expires: product.numberOfDaysCardExpires
      && Number(product.numberOfDaysCardExpires),
  };
};

export const prepareProductDetailsData = (product: any, productType: SelectValues) => {
  const type = productType.value;

  if (type === productTypesCodes.DEBIT) {
    return prepareDebit(product);
  } else if (type === productTypesCodes.LOAN) {
    return prepareLoan(product);
  } else if (type === productTypesCodes.PREPAID) {
    return preparePrepaid(product);
  } else if (type === productTypesCodes.REVOLVING_CREDIT) {
    return prepareRevolvingCredit(product);
  } else if (type === productTypesCodes.SAVINGS) {
    return prepareSavings(product);
  } else {
    return null;
  }
};

export const prepareRevolvingCredit = (product: RevolvingCreditProductItemResp) => {
  const aprDefaultCalculationMethod = aprTypesOptions
    .find(el => el.value === product.apr_default_calculation_method);

  return {
    productId: product.product_id,
    aprDefault: product.apr_default && product.apr_default.toFixed(2),
    aprDefaultCalculationMethod,
    feeExceedLimit: product.fee_exceed_limit && product.fee_exceed_limit.toFixed(2),
    feeLatePayment: product.fee_late_payment && product.fee_late_payment.toFixed(2),
    feeOverpayment: product.fee_overpayment && product.fee_overpayment.toFixed(2),
    limitSharingAllowedFlag: product.limit_sharing_allowed_flag === yesNoTypesCodes.YES,
    minimumPaymentAmount: product.minimum_payment_amount
      && product.minimum_payment_amount.toFixed(2),
    minimumPaymentRate: product.minimum_payment_rate && product.minimum_payment_rate.toFixed(2),
    paymentGraceNumberOfDays: product.payment_grace_number_of_days,
    rateExceedLimit: product.rate_exceed_limit && product.rate_exceed_limit.toFixed(2),
    rateLatePayment: product.rate_late_payment && product.rate_late_payment.toFixed(2),
    rateOverpayment: product.rate_overpayment && product.rate_overpayment.toFixed(2),
  };
};

export const prepareRevolvingCreditToSend = (product: RevolvingCreditProductItem) => {
  return {
    product_id: product.productId,
    apr_default: Number(product.aprDefault),
    apr_default_calculation_method: product.aprDefaultCalculationMethod.value,
    fee_exceed_limit: Number(product.feeExceedLimit),
    fee_late_payment: Number(product.feeLatePayment),
    fee_overpayment: Number(product.feeOverpayment),
    limit_sharing_allowed_flag:
      product.limitSharingAllowedFlag === true ? yesNoTypesCodes.YES : yesNoTypesCodes.NO,
    minimum_payment_amount: Number(product.minimumPaymentAmount),
    minimum_payment_rate: Number(product.minimumPaymentRate),
    payment_grace_number_of_days: Number(product.paymentGraceNumberOfDays),
    rate_exceed_limit: Number(product.rateExceedLimit),
    rate_late_payment: Number(product.rateLatePayment),
    rate_overpayment: Number(product.rateOverpayment),
  };
};

export const prepareSavings = (product: SavingsProductItemResp) => {
  return {
    productId: product.product_id,
    apr: product.apr,
    minimumDepositAllowed: product.minimum_deposit_allowed &&
      product.minimum_deposit_allowed.toFixed(2),
    maximumDepositAllowed: product.maximum_deposit_allowed &&
      product.maximum_deposit_allowed.toFixed(2),
    maximumMonthlyDeposit: product.maximum_monthly_deposit &&
      product.maximum_monthly_deposit.toFixed(2),
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
      product.breakages_allowed === yesNoTypesCodes.YES ? true : false,
    reloadAllowed:
      product.reload_allowed === yesNoTypesCodes.YES ? true : false,
  };
};

export const preparePrepaidToSend = (product: PrepaidProductItem) => {
  return {
    product_id: product.productId,
    dormant_after_number_of_days: Number(product.dormantAfterNumberOfDays),
    breakages_allowed: product.breakagesAllowed === true ? yesNoTypesCodes.YES : yesNoTypesCodes.NO,
    reload_allowed: product.reloadAllowed === true ? yesNoTypesCodes.YES : yesNoTypesCodes.NO,
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
    aprOverdraft: product.apr_overdraft && product.apr_overdraft.toFixed(2),
    overdraftAllowed:
      product.overdraft_allowed === yesNoTypesCodes.YES ? true : false,
  };
};

export const prepareDebitToSend = (product: DebitProductItem) => {
  return {
    product_id: product.productId,
    apr_overdraft: Number(product.aprOverdraft),
    overdraft_allowed: product.overdraftAllowed === true ? yesNoTypesCodes.YES : yesNoTypesCodes.NO,
  };
};

export const prepareProductDetailsDataToSend =
  (product: any, productType: SelectValues) => {
    const type = productType.value;

    if (type === productTypesCodes.DEBIT) {
      return {
        ...prepareDebitToSend(product),
        product_type: type,
      };
    } else if (type === productTypesCodes.LOAN) {
      return {
        ...prepareLoanToSend(product),
        product_type: type,
      };
    } else if (type === productTypesCodes.PREPAID) {
      return {
        ...preparePrepaidToSend(product),
        product_type: type,
      };
    } else if (type === productTypesCodes.REVOLVING_CREDIT) {
      return {
        ...prepareRevolvingCreditToSend(product),
        product_type: type,
      };
    } else if (type === productTypesCodes.SAVINGS) {
      return {
        ...prepareSavingsToSend(product),
        product_type: type,
      };
    } else {
      return null;
    }
  };

export const prepareNewProductDataToSend = (product: Partial<NewProduct>) => {
  return {
    ...prepareGeneralProductDataToSend(product),
    ...prepareProductDetailsDataToSend(product, product.productType),
  };
};

export const prepareProductRuleData = (rule: ProductRulesItemResp) => {
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

export const prepareProductRuleDataToSend = (rule: Partial<ProductRulesItem>) => {
  if (!rule) {
    return null;
  }

  const { description, eventId, actionType, script } = rule;

  return {
    description,
    event_id: eventId && eventId.value,
    action_type: actionType && actionType.value,
    script: script ? script : null,
  };
};

export const prepareProductRuleIdsToSend = (data: Partial<ProductRulesItem>) => {
  if (!data) {
    return null;
  }

  return {
    event_id: data.eventId && data.eventId.value,
    action_type: data.actionType && data.actionType.value,
  };
};

export const prepareProductAprsToRender = (data: ProductAprItem): ProductApr => {
  if (!data) {
    return null;
  }

  const calculationMethod = aprTypesOptions.find(el => el.value === data.calculation_method);

  return {
    productAprId: data.product_apr_id,
    productId: data.product_id,
    description: data.description,
    calculationMethod: calculationMethod && calculationMethod.label,
    rate: data.rate && data.rate.toFixed(2),
    graceNumberOfDays: data.grace_number_of_days,
  };
};

export const prepareProductAprs = (data: Partial<ProductAprPlainInfo>): Partial<ProductAprItem> => {
  if (!data) {
    return null;
  }

  return {
    product_apr_id: data.productAprId,
    product_id: data.productId,
    description: data.description,
    rate: Number(data.rate),
    grace_number_of_days: Number(data.graceNumberOfDays),
  };
};

export const prepareFormDataProductAprsToSend = (data: Partial<ProductAprFormValues>):
  Partial<ProductAprItem> => {
  if (!data) {
    return null;
  }

  const calculationMethod = data.calculationMethod;

  return {
    ...prepareProductAprs(data),
    calculation_method: calculationMethod && calculationMethod.value,
  };
};

export const prepareProductAprsToSend = (data: Partial<ProductApr>): Partial<ProductAprItem> => {
  if (!data) {
    return null;
  }

  const calculationMethod = aprTypesOptions.find(el => el.label === data.calculationMethod);

  return {
    ...prepareProductAprs(data),
    calculation_method: calculationMethod && calculationMethod.value,
  };
};

export const prepareProductFeesToRender = (data: ProductFeeItem): ProductFee => {
  if (!data) {
    return null;
  }

  const feeApplicationCondition = feeTypesOptions
    .find(el => el.value === data.fee_application_condition);

  return {
    productId: data.product_id,
    productFeeId: data.product_fee_id,
    description: data.description,
    rate: data.rate && data.rate.toFixed(2),
    amount: data.amount && data.amount.toFixed(2),
    feeApplicationCondition: feeApplicationCondition.label,
    feeApplicationConditionValue: data.fee_application_condition,
  };
};

export const prepareProductFees = (data: Partial<ProductFeePlainInfo>): Partial<ProductFeeItem> => {
  if (!data) {
    return null;
  }

  return {
    product_id: data.productId,
    product_fee_id: data.productFeeId,
    description: data.description,
    rate: Number(data.rate),
    amount: Number(data.amount),
  };
};

export const prepareFormDataProductFeesToSend = (data: Partial<ProductFeeFormValues>):
  Partial<ProductFeeItem> => {
  if (!data) {
    return null;
  }

  const feeApplicationCondition = data.feeApplicationCondition;

  return {
    ...prepareProductFees(data),
    fee_application_condition: feeApplicationCondition && feeApplicationCondition.value,
  };
};

export const prepareProductFeesToSend = (data: Partial<ProductFee>): Partial<ProductFeeItem> => {
  if (!data) {
    return null;
  }

  const feeApplicationCondition = feeTypesOptions
    .find(el => el.label === data.feeApplicationCondition);

  return {
    ...prepareProductFees(data),
    fee_application_condition: feeApplicationCondition && feeApplicationCondition.value,
  };
};
