import {
  cardFormFactorOptions,
  loanTypesOptions,
  productTypesCodes,
  productTypesOptions,
  savingsTypesOptions,
  schemeTypesOptions,
  statusCodes,
  statusOptions,
  yesNoTypesCodes,
} from 'consts';

import {
  DebitProductItem,
  DebitProductItemResp,
  LoanProductItem,
  LoanProductItemResp,
  NewProduct,
  PrepaidProductItem,
  PrepaidProductItemResp,
  ProductFilter,
  ProductFilterPrepared,
  ProductItemGeneral,
  ProductItemResp,
  RevolvingCreditProductItem,
  RevolvingCreditProductItemResp,
  SavingsProductItem,
  SavingsProductItemResp,
} from './types';

import { SelectValue } from 'types';
import { stringsUtil } from 'utils';

export const prepareProductFilterDataToSend = (data: ProductFilter): ProductFilterPrepared => {
  const { activeStatusFlag, institutionId, productType } = data;

  return {
    status: activeStatusFlag ? statusCodes.ACTIVE : null,
    institution_id: institutionId ? institutionId.value : null,
    product_type: productType && productType.length ? productType.map(type => type.value) : null,
  };
};

export const prepareGeneralProductItem = (
  item: ProductItemResp,
  institutionName?: string
) => {
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
    lockedFlag: item.locked_flag === yesNoTypesCodes.YES ? true : false,
    overridesProductId: item.overrides_product_id,
    statementCycleType: item.statement_cycle_type_name,
    statementCycleParameter: item.statement_cycle_parameter,
  };
};

export const prepareProductDetailsData = (product: any, productType: SelectValue) => {
  if (!productType) {
    return null;
  }

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

export const prepareGeneralProductData = (data: ProductItemResp):
  Partial<ProductItemGeneral> => {
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
    lockedFlag: locked_flag === yesNoTypesCodes.YES ? true : false,
    overridesProductId: overrides_product_id,
    cardFormFactor: cardFormFactorOptions.find(el => el.value === card_form_factor),
    numberOfDaysCardExpires: number_of_days_card_expires,
    statementCycleTypeId: { value: statement_cycle_type_id, label: statement_cycle_type_name },
    statementCycleParameter: statement_cycle_parameter,
  };
};

export const prepareGeneralProductDataToSend = (data: Partial<ProductItemGeneral>):
  ProductItemResp => {
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
    status: status.value,
    institution_id: institutionId.value,
    currency_code: currencyCode.value,
    product_type: productType.value,
    scheme: scheme.value,
    history_retention_number_of_day: stringsUtil.toNumber(historyRetentionNumberOfDays),
    locked_flag: lockedFlag ? yesNoTypesCodes.YES : yesNoTypesCodes.NO,
    overrides_product_id: overridesProductId,
    card_form_factor: cardFormFactor.value,
    number_of_days_card_expires: stringsUtil.toNumber(numberOfDaysCardExpires),
    statement_cycle_type_id: statementCycleTypeId && statementCycleTypeId.value,
    statement_cycle_parameter: stringsUtil.toNumber(statementCycleParameter),
  };
};

export const prepareRevolvingCredit = (data: RevolvingCreditProductItemResp) => {
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
    limitSharingAllowedFlag: limit_sharing_allowed_flag === yesNoTypesCodes.YES,
    minimumRepaymentAmount: minimum_repayment_amount,
    minimumRepaymentRate: minimum_repayment_rate,
    repaymentGraceNumberOfDays: repayment_grace_number_of_days,
  };
};

export const prepareRevolvingCreditToSend = (data: RevolvingCreditProductItem) => {
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
      limitSharingAllowedFlag === true ? yesNoTypesCodes.YES : yesNoTypesCodes.NO,
    minimum_repayment_amount: stringsUtil.toNumber(minimumRepaymentAmount),
    minimum_repayment_rate: stringsUtil.toNumber(minimumRepaymentRate),
    repayment_grace_number_of_days: stringsUtil.toNumber(repaymentGraceNumberOfDays),
  };
};

export const prepareSavings = (data: SavingsProductItemResp) => {
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

export const prepareSavingsToSend = (data: SavingsProductItem) => {
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
    savings_type: savingsType.value,
  };
};

export const preparePrepaid = (data: PrepaidProductItemResp) => {
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
    breakagesAllowed: breakages_allowed === yesNoTypesCodes.YES ? true : false,
    reloadAllowed: reload_allowed === yesNoTypesCodes.YES ? true : false,
  };
};

export const preparePrepaidToSend = (data: PrepaidProductItem) => {
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
    breakages_allowed: breakagesAllowed === true ? yesNoTypesCodes.YES : yesNoTypesCodes.NO,
    reload_allowed: reloadAllowed === true ? yesNoTypesCodes.YES : yesNoTypesCodes.NO,
  };
};

export const prepareLoan = (data: LoanProductItemResp) => {
  if (!data) {
    return null;
  }

  const {
    product_id,
    def_num_of_installments,
    def_num_of_intrst_free_instlmts,
    interest_distribution_type,
    allow_overpayment,
  } = data;

  return {
    productId: product_id,
    defNumOfInstallments: def_num_of_installments,
    defNumOfIntrstFreeInstlmts: def_num_of_intrst_free_instlmts,
    interestDistributionType: loanTypesOptions.find(el => el.value === interest_distribution_type),
    allowOverpayment: allow_overpayment ? yesNoTypesCodes.YES : yesNoTypesCodes.NO,
  };
};

export const prepareLoanToSend = (data: LoanProductItem) => {
  if (!data) {
    return null;
  }

  const {
    productId,
    defNumOfInstallments,
    defNumOfIntrstFreeInstlmts,
    interestDistributionType,
    allowOverpayment,
  } = data;

  return {
    product_id: productId,
    def_num_of_installments: stringsUtil.toNumber(defNumOfInstallments),
    def_num_of_intrst_free_instlmts: stringsUtil.toNumber(defNumOfIntrstFreeInstlmts),
    interest_distribution_type: interestDistributionType && interestDistributionType.value,
    allow_overpayment: allowOverpayment ? yesNoTypesCodes.YES : yesNoTypesCodes.NO,
  };
};

export const prepareDebit = (data: DebitProductItemResp) => {
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
    overdraftAllowed: overdraft_allowed === yesNoTypesCodes.YES ? true : false,
  };
};

export const prepareDebitToSend = (data: DebitProductItem) => {
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
    overdraft_allowed: overdraftAllowed === true ? yesNoTypesCodes.YES : yesNoTypesCodes.NO,
  };
};

export const prepareProductDetailsDataToSend =
  (product: any, productType: SelectValue) => {
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
