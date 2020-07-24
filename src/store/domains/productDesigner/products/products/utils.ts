import {
  cardFormFactorOptions,
  loanTypesOptions,
  productTypesConst,
  productTypesOptions,
  savingsTypesOptions,
  schemeTypesOptions,
  statusConst,
  statusOptions,
  yesNoConst,
} from 'consts';

import {
  IDebitProduct,
  IDebitProductData,
  ILoanProduct,
  ILoanProductData,
  INewProduct,
  IPrepaidProduct,
  IPrepaidProductData,
  IProductData,
  IProductGeneralDetails,
  IProductsFilter,
  IProductsFilterToSend,
  IRevCreditProduct,
  IRevCreditProductData,
  ISavingsProduct,
  ISavingsProductData,
} from './types';

import { stringsUtil } from 'utils';

export const prepareFilterToSend = (data: IProductsFilter): IProductsFilterToSend => {
  const { activeStatusFlag, institutionId, productType } = data;

  return {
    status: activeStatusFlag ? statusConst.ACTIVE : null,
    institution_id: institutionId ? institutionId.value : null,
    product_type: productType && productType.length ? productType.map(type => type.value) : null,
  };
};

export const prepareGeneralProductToRender = (item: IProductData, institutionName?: string) => {
  const status = statusOptions.find(el => el.value === item.status);
  const productType = productTypesOptions.find(el => el.value === item.product_type);
  const scheme = schemeTypesOptions.find(el => el.value === item.scheme);

  return {
    id: item.id,
    institutionId: institutionName,
    name: item.name,
    description: item.description,
    status: status && status.label,
    productType: productType && productType.label,
    productTypeCode: item.product_type,
    scheme: scheme && scheme.label,
    historyRetentionNumberOfDays: item.history_retention_number_of_day,
    currencyCode: item.currency_code,
    lockedFlag: item.locked_flag === yesNoConst.YES,
    enabledForCustomerLimit: item.enabled_for_customer_limit === yesNoConst.YES,
    overridesProductId: item.overrides_product_id,
    statementCycleType: item.statement_cycle_type_name,
    statementCycleParameter: item.statement_cycle_parameter,
  };
};

export const prepareDetailsToRender = (product: any, productType: string | number) => {
  if (productType === productTypesConst.DEBIT) {
    return prepareDebitToRender(product);
  } else if (productType === productTypesConst.LOAN) {
    return prepareLoanToRender(product);
  } else if (productType === productTypesConst.PREPAID) {
    return preparePrepaidToRender(product);
  } else if (productType === productTypesConst.REVOLVING_CREDIT) {
    return prepareRevolvingCreditToRender(product);
  } else if (productType === productTypesConst.SAVINGS) {
    return prepareSavingsToRender(product);
  } else {
    return null;
  }
};

export const prepareCurrGeneralProductToRender = (data: IProductData):
  Partial<IProductGeneralDetails> => {

  if (!data) {
    return null;
  }

  const {
    id,
    name,
    description,
    history_retention_number_of_day,
    product_type,
    status,
    scheme,
    locked_flag,
    enabled_for_customer_limit,
    overrides_product_id,
    card_form_factor,
    number_of_days_card_expires,
    statement_cycle_type_id,
    statement_cycle_type_name,
    statement_cycle_parameter,
  } = data;

  return {
    id,
    name,
    description,
    historyRetentionNumberOfDays: history_retention_number_of_day,
    productType: productTypesOptions.find(el => el.value === product_type),
    status: statusOptions.find(el => el.value === status),
    scheme: schemeTypesOptions.find(el => el.value === scheme),
    lockedFlag: locked_flag === yesNoConst.YES,
    enabledForCustomerLimit: enabled_for_customer_limit === yesNoConst.YES,
    overridesProductId: overrides_product_id,
    cardFormFactor: cardFormFactorOptions.find(el => el.value === card_form_factor),
    numberOfDaysCardExpires: number_of_days_card_expires,
    statementCycleTypeId: { value: statement_cycle_type_id, label: statement_cycle_type_name },
    statementCycleParameter: statement_cycle_parameter,
  };
};

export const prepareGeneralProductDataToSend = (data: Partial<IProductGeneralDetails>):
  IProductData => {
  if (!data) {
    return null;
  }

  const {
    id,
    name,
    description,
    status,
    institutionId,
    currencyCode,
    productType,
    scheme,
    historyRetentionNumberOfDays,
    lockedFlag,
    enabledForCustomerLimit,
    overridesProductId,
    cardFormFactor,
    numberOfDaysCardExpires,
    statementCycleTypeId,
    statementCycleParameter,
  } = data;

  return {
    id,
    name,
    description,
    status: status && status.value,
    institution_id: institutionId && institutionId.value,
    currency_code: currencyCode && currencyCode.value,
    product_type: productType && productType.value,
    scheme: scheme && scheme.value,
    history_retention_number_of_day: stringsUtil.toNumber(historyRetentionNumberOfDays),
    locked_flag: lockedFlag ? yesNoConst.YES : yesNoConst.NO,
    enabled_for_customer_limit: enabledForCustomerLimit ? yesNoConst.YES : yesNoConst.NO,
    overrides_product_id: overridesProductId,
    card_form_factor: cardFormFactor && cardFormFactor.value,
    number_of_days_card_expires: stringsUtil.toNumber(numberOfDaysCardExpires),
    statement_cycle_type_id: statementCycleTypeId && statementCycleTypeId.value,
    statement_cycle_parameter: stringsUtil.toNumber(statementCycleParameter),
  };
};

export const prepareRevolvingCreditToRender = (data: IRevCreditProductData) => {
  if (!data) {
    return null;
  }

  const {
    product_id,
    limit_sharing_allowed_flag,
    minimum_repayment_amount,
    minimum_repayment_rate,
    repayment_grace_number_of_days,
  } = data;

  return {
    productId: product_id,
    limitSharingAllowedFlag: limit_sharing_allowed_flag === yesNoConst.YES,
    minimumRepaymentAmount: minimum_repayment_amount,
    minimumRepaymentRate: minimum_repayment_rate,
    repaymentGraceNumberOfDays: repayment_grace_number_of_days,
  };
};

export const prepareRevolvingCreditToSend = (data: IRevCreditProduct) => {
  if (!data) {
    return null;
  }

  const {
    productId,
    limitSharingAllowedFlag,
    minimumRepaymentAmount,
    minimumRepaymentRate,
    repaymentGraceNumberOfDays,
  } = data;

  return {
    product_id: productId,
    limit_sharing_allowed_flag:
      limitSharingAllowedFlag === true ? yesNoConst.YES : yesNoConst.NO,
    minimum_repayment_amount: stringsUtil.toNumber(minimumRepaymentAmount),
    minimum_repayment_rate: stringsUtil.toNumber(minimumRepaymentRate),
    repayment_grace_number_of_days: stringsUtil.toNumber(repaymentGraceNumberOfDays),
  };
};

export const prepareSavingsToRender = (data: ISavingsProductData) => {
  if (!data) {
    return null;
  }

  const {
    product_id,
    apr,
    minimum_deposit_allowed,
    maximum_deposit_allowed,
    maximum_monthly_deposit,
    savings_type,
  } = data;

  return {
    productId: product_id,
    apr,
    minimumDepositAllowed: minimum_deposit_allowed,
    maximumDepositAllowed: maximum_deposit_allowed,
    maximumMonthlyDeposit: maximum_monthly_deposit,
    savingsType: savingsTypesOptions.find(el => el.value === savings_type),
  };
};

export const prepareSavingsToSend = (data: ISavingsProduct) => {
  if (!data) {
    return null;
  }

  const {
    productId,
    apr,
    minimumDepositAllowed,
    maximumDepositAllowed,
    maximumMonthlyDeposit,
    savingsType,
  } = data;

  return {
    product_id: productId,
    apr: stringsUtil.toNumber(apr),
    minimum_deposit_allowed: stringsUtil.toNumber(minimumDepositAllowed),
    maximum_deposit_allowed: stringsUtil.toNumber(maximumDepositAllowed),
    maximum_monthly_deposit: stringsUtil.toNumber(maximumMonthlyDeposit),
    savings_type: savingsType && savingsType.value,
  };
};

export const preparePrepaidToRender = (data: IPrepaidProductData) => {
  if (!data) {
    return null;
  }

  const {
    product_id,
    dormant_after_number_of_days,
    breakages_allowed,
    reload_allowed,
  } = data;

  return {
    productId: product_id,
    dormantAfterNumberOfDays: stringsUtil.toNumber(dormant_after_number_of_days),
    breakagesAllowed: breakages_allowed === yesNoConst.YES ? true : false,
    reloadAllowed: reload_allowed === yesNoConst.YES ? true : false,
  };
};

export const preparePrepaidToSend = (data: IPrepaidProduct) => {
  if (!data) {
    return null;
  }

  const {
    productId,
    dormantAfterNumberOfDays,
    breakagesAllowed,
    reloadAllowed,
  } = data;

  return {
    product_id: productId,
    dormant_after_number_of_days: stringsUtil.toNumber(dormantAfterNumberOfDays),
    breakages_allowed: breakagesAllowed === true ? yesNoConst.YES : yesNoConst.NO,
    reload_allowed: reloadAllowed === true ? yesNoConst.YES : yesNoConst.NO,
  };
};

export const prepareLoanToRender = (data: ILoanProductData) => {
  if (!data) {
    return null;
  }

  const {
    product_id,
    def_num_of_installments,
    def_num_of_intrst_free_instlmts,
    interest_distribution_type,
    allow_overpayment,
    def_num_deferred_instlmts,
  } = data;

  return {
    productId: product_id,
    defNumOfInstallments: def_num_of_installments,
    defNumInterestFreeInstlmts: def_num_of_intrst_free_instlmts,
    defNumDeferredInstlmts: def_num_deferred_instlmts,
    interestDistributionType: loanTypesOptions.find(el => el.value === interest_distribution_type),
    allowOverpayment: allow_overpayment === yesNoConst.YES,
  };
};

export const prepareLoanToSend = (data: ILoanProduct) => {
  if (!data) {
    return null;
  }

  const {
    productId,
    defNumOfInstallments,
    defNumInterestFreeInstlmts,
    defNumDeferredInstlmts,
    interestDistributionType,
    allowOverpayment,
  } = data;

  return {
    product_id: productId,
    def_num_of_installments: stringsUtil.toNumber(defNumOfInstallments),
    def_num_of_intrst_free_instlmts: stringsUtil.toNumber(defNumInterestFreeInstlmts),
    def_num_deferred_instlmts: stringsUtil.toNumber(defNumDeferredInstlmts),
    interest_distribution_type: interestDistributionType && interestDistributionType.value,
    allow_overpayment: allowOverpayment ? yesNoConst.YES : yesNoConst.NO,
  };
};

export const prepareDebitToRender = (data: IDebitProductData) => {
  if (!data) {
    return null;
  }

  const {
    product_id,
    apr_overdraft,
    overdraft_allowed,
  } = data;

  return {
    productId: product_id,
    aprOverdraft: apr_overdraft,
    overdraftAllowed: overdraft_allowed === yesNoConst.YES ? true : false,
  };
};

export const prepareDebitToSend = (data: IDebitProduct) => {
  if (!data) {
    return null;
  }

  const {
    productId,
    aprOverdraft,
    overdraftAllowed,
  } = data;

  return {
    product_id: productId,
    apr_overdraft: stringsUtil.toNumber(aprOverdraft),
    overdraft_allowed: overdraftAllowed === true ? yesNoConst.YES : yesNoConst.NO,
  };
};

export const prepareDetailsToSend = (product: any, type: string | number) => {
  if (type === productTypesConst.DEBIT) {
    return {
      ...prepareDebitToSend(product),
      product_type: type,
    };
  } else if (type === productTypesConst.LOAN) {
    return {
      ...prepareLoanToSend(product),
      product_type: type,
    };
  } else if (type === productTypesConst.PREPAID) {
    return {
      ...preparePrepaidToSend(product),
      product_type: type,
    };
  } else if (type === productTypesConst.REVOLVING_CREDIT) {
    return {
      ...prepareRevolvingCreditToSend(product),
      product_type: type,
    };
  } else if (type === productTypesConst.SAVINGS) {
    return {
      ...prepareSavingsToSend(product),
      product_type: type,
    };
  } else {
    return null;
  }
};

export const prepareNewProductToSend = (product: Partial<INewProduct>) => {
  const type = product.productType && product.productType.value;

  return {
    ...prepareGeneralProductDataToSend(product),
    ...prepareDetailsToSend(product, type),
  };
};
