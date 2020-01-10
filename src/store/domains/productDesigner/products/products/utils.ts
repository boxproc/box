import {
  aprTypesOptions,
  cardFormFactorOptions,
  feeTypesOptions,
  loanTypesOptions,
  productTypesCodes,
  productTypesOptions,
  rewardsTypesOptions,
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
  IllustrationProductAprRevolvingCreditResp,
  IllustrationProductFeeRevolvingCreditResp,
  IllustrationProductLoanResp,
  IllustrationProductRewardRevolvingCreditResp,
  IllustrationProductStatementsRevolvingCreditResp,
  IllustrationProductTransactionsRevolvingCreditResp,
  LoanProductIllustrate,
  LoanProductIllustratePrepared,
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
  ProductReward,
  ProductRewardFormValues,
  ProductRewardItem,
  ProductRewardPlainInfo,
  RevolvingCreditnProductIllustrate,
  RevolvingCreditProductIllustratePrepared,
  RevolvingCreditProductItem,
  RevolvingCreditProductItemResp,
  SavingsProductItem,
  SavingsProductItemResp,
} from './types';

import { SelectValues } from 'types';
import { stringsUtil } from 'utils';

export const prepareProductFilterDataToSend = (data: ProductFilter): ProductFilterPrepared => {
  const { activeStatusFlag, institutionId, productType } = data;

  return {
    status: activeStatusFlag ? statusTypesCodes.ACTIVE : null,
    institution_id: institutionId ? institutionId.value : null,
    product_type: productType && productType.length ? productType.map(type => type.value) : null,
  };
};
export const prepareProductLoanIllustrateDataToSend =
  (data: Partial<LoanProductIllustrate>): Partial<LoanProductIllustratePrepared> => {
    const { productId, amount, defNumOfInstallments, defNumOfIntrstFreeInstlmts, startDate } = data;

    return {
      product_id: productId,
      amount,
      nr_loan_cycles: Number(defNumOfInstallments),
      nr_interest_free: Number(defNumOfIntrstFreeInstlmts),
      start_date: startDate,
    };
  };

export const prepareProductRevolvingCreditIllustrateDataToSend =
  (data: Partial<RevolvingCreditnProductIllustrate>):
    Partial<RevolvingCreditProductIllustratePrepared> => {
    const { productId, limit, openBalance, startDate, transactionAmount1, transactionAmount2,
      transactionAmount3, transactionDate1, transactionDate2, transactionDate3, transactionType1,
      transactionType2, transactionType3 } = data;

    return {
      product_id: productId,
      limit,
      open_balance: openBalance,
      transaction_amount_1: transactionAmount1,
      transaction_amount_2: transactionAmount2,
      transaction_amount_3: transactionAmount3,
      transaction_date_1: transactionDate1,
      transaction_date_2: transactionDate2,
      transaction_date_3: transactionDate3,
      transaction_type_1: transactionType1 && transactionType1.value,
      transaction_type_2: transactionType2 && transactionType2.value,
      transaction_type_3: transactionType3 && transactionType3.value,
      start_date: startDate,
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

export const prepareGeneralProductItem = (
  item: ProductItemResp,
  institutionName?: string
) => {
  const status = statusTypesOptions.find(el => el.value === item.status);
  const productType = productTypesOptions.find(el => el.value === item.product_type);
  const scheme = schemeTypesOptions.find(el => el.value === item.scheme);

  return {
    id: item.id,
    institutionId: institutionName,
    name: item.name,
    description: item.description,
    status: status && status.label,
    productType: productType && productType.label,
    scheme: scheme && scheme.label,
    historyRetentionNumberOfDays: item.history_retention_number_of_day,
    currencyCode: item.currency_code,
    lockedFlag: item.locked_flag === yesNoTypesCodes.YES ? true : false,
    overridesProductId: item.overrides_product_id,
    statementCycleType: item.statement_cycle_type_name,
    statementCycleParameter: item.statement_cycle_parameter,
  };
};

export const prepareProductIllustrationStatementsItem = (
  item: IllustrationProductStatementsRevolvingCreditResp
) => {
  return {
    statementId: item.statement_id,
    statementDate: item.statement_date,
    firstTransactionId: item.first_transaction_id,
    lastTransactionId: item.last_transaction_id,
    balanceOpen: stringsUtil.numberToFixed(item.balance_open, 2),
    balanceClose: stringsUtil.numberToFixed(item.balance_close, 2),
    minimumAmountDueRepayment: stringsUtil.numberToFixed(item.minimum_amount_due_repayment, 2),
    startDate: item.start_date,
    endDate: item.end_date,
  };
};

export const prepareProductIllustrationAprsItem = (
  item: IllustrationProductAprRevolvingCreditResp
) => {
  return {
    description: item.description,
    accruedInterest: stringsUtil.numberToFixed(item.accrued_interest, 4),
    rate: stringsUtil.numberToFixed(item.rate, 2),
  };
};

export const prepareProductIllustrationFeesItem = (
  item: IllustrationProductFeeRevolvingCreditResp
) => {
  return {
    description: item.description,
    accruedFee: stringsUtil.numberToFixed(item.accrued_fee, 2),
  };
};

export const prepareProductIllustrationRewardsItem = (
  item: IllustrationProductRewardRevolvingCreditResp
) => {
  return {
    description: item.description,
    accruedReward: stringsUtil.numberToFixed(item.accrued_reward, 2),
  };
};

export const prepareProductIllustrationTransactionsItem = (
  item: IllustrationProductTransactionsRevolvingCreditResp
) => {
  return {
    transactionDatetime: item.transaction_datetime,
    debitCreditIndicator: item.debit_credit_indicator,
    amount: stringsUtil.numberToFixed(item.amount, 2),
    balanceSettledBefore: stringsUtil.numberToFixed(item.balance_available_before, 2),
    balanceSettledAfter: stringsUtil.numberToFixed(item.balance_available_after, 2),
    balanceAvailableBefore: stringsUtil.numberToFixed(item.balance_available_before, 2),
    balanceAvailableAfter: stringsUtil.numberToFixed(item.balance_available_after, 2),
    description: item.description,
    status: item.status,
    aprRate: stringsUtil.numberToFixed(item.apr_rate, 2),
    transactionType: item.transaction_type,
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
    status: statusTypesOptions.find(el => el.value === status),
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
    history_retention_number_of_day: historyRetentionNumberOfDays
      && Number(historyRetentionNumberOfDays),
    locked_flag: lockedFlag ? yesNoTypesCodes.YES : yesNoTypesCodes.NO,
    overrides_product_id: overridesProductId,
    card_form_factor: cardFormFactor.value,
    number_of_days_card_expires: numberOfDaysCardExpires
      && Number(numberOfDaysCardExpires),
    statement_cycle_type_id: statementCycleTypeId && statementCycleTypeId.value,
    statement_cycle_parameter: statementCycleParameter && Number(statementCycleParameter),
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

export const prepareProductIllustrationData = (data: IllustrationProductLoanResp) => {
  if (!data) {
    return null;
  }

  const {
    statement_id,
    statement_date,
    installment_balance,
    fee,
    apr,
    minimum_amount_due_repayment,
    amount,
    start_date,
    end_date,
  } = data;

  return {
    statementId: statement_id,
    statementDate: statement_date,
    startDate: start_date,
    endDate: end_date,
    amount: stringsUtil.numberToFixed(amount, 2),
    installmentBalance: stringsUtil.numberToFixed(installment_balance, 2),
    fee: stringsUtil.numberToFixed(fee, 2),
    apr: stringsUtil.numberToFixed(apr, 2),
    minimumAmountDueRepayment: stringsUtil.numberToFixed(minimum_amount_due_repayment, 2),
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
    minimum_repayment_amount: Number(minimumRepaymentAmount),
    minimum_repayment_rate: Number(minimumRepaymentRate),
    repayment_grace_number_of_days: Number(repaymentGraceNumberOfDays),
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
    apr: Number(apr),
    minimum_deposit_allowed: Number(minimumDepositAllowed),
    maximum_deposit_allowed: Number(maximumDepositAllowed),
    maximum_monthly_deposit: Number(maximumMonthlyDeposit),
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
    dormantAfterNumberOfDays: Number(dormant_after_number_of_days),
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
    dormant_after_number_of_days: Number(dormantAfterNumberOfDays),
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
    def_num_of_installments: Number(defNumOfInstallments),
    def_num_of_intrst_free_instlmts: Number(defNumOfIntrstFreeInstlmts),
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
    apr_overdraft: Number(aprOverdraft),
    overdraft_allowed: overdraftAllowed === true ? yesNoTypesCodes.YES : yesNoTypesCodes.NO,
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

export const prepareProductAprsToRender = (data: ProductAprItem): ProductApr => {
  if (!data) {
    return null;
  }

  const {
    product_apr_id,
    product_id,
    description,
    calculation_method,
    rate,
    grace_number_of_days,
  } = data;

  const calculationMethod = aprTypesOptions.find(el => el.value === calculation_method);

  return {
    productAprId: product_apr_id,
    productId: product_id,
    description,
    calculationMethod: calculationMethod && calculationMethod.label,
    rate,
    graceNumberOfDays: grace_number_of_days,
  };
};

export const prepareProductAprs = (data: Partial<ProductAprPlainInfo>): Partial<ProductAprItem> => {
  if (!data) {
    return null;
  }

  const {
    productAprId,
    productId,
    description,
    rate,
    graceNumberOfDays,
  } = data;

  return {
    product_apr_id: productAprId,
    product_id: productId,
    description,
    rate: Number(rate),
    grace_number_of_days: Number(graceNumberOfDays),
  };
};

export const prepareFormDataProductAprsToSend = (data: Partial<ProductAprFormValues>):
  Partial<ProductAprItem> => {
  if (!data) {
    return null;
  }

  const { calculationMethod } = data;

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

  const {
    product_id,
    product_fee_id,
    description,
    rate,
    amount,
    fee_application_condition,
    apr_description,
    apr_id,
  } = data;

  const feeApplicationCondition = feeTypesOptions
    .find(el => el.value === fee_application_condition);

  return {
    productId: product_id,
    productFeeId: product_fee_id,
    description,
    rate,
    amount,
    feeApplicationCondition: feeApplicationCondition && feeApplicationCondition.label,
    feeApplicationConditionValue: fee_application_condition,
    apr: { value: apr_id, label: apr_description },
  };
};

export const prepareProductFees = (data: Partial<ProductFeePlainInfo>): Partial<ProductFeeItem> => {
  if (!data) {
    return null;
  }

  const {
    productId,
    productFeeId,
    description,
    rate,
    amount,
  } = data;

  return {
    product_id: productId,
    product_fee_id: productFeeId,
    description,
    rate: Number(rate),
    amount: Number(amount),
  };
};

export const prepareFormDataProductFeesToSend = (data: Partial<ProductFeeFormValues>):
  Partial<ProductFeeItem> => {
  if (!data) {
    return null;
  }

  const { feeApplicationCondition, apr } = data;

  return {
    ...prepareProductFees(data),
    fee_application_condition: feeApplicationCondition && feeApplicationCondition.value,
    apr_id: apr && apr.value,
  };
};

export const prepareProductFeesToSend = (data: Partial<ProductFee>): Partial<ProductFeeItem> => {
  if (!data) {
    return null;
  }

  const { apr } = data;

  const feeApplicationCondition = feeTypesOptions
    .find(el => el.label === data.feeApplicationCondition);

  return {
    ...prepareProductFees(data),
    fee_application_condition: feeApplicationCondition && feeApplicationCondition.value,
    apr_id: apr && apr.value,
  };
};

export const prepareProductRewardsToRender = (data: ProductRewardItem): ProductReward => {
  if (!data) {
    return null;
  }

  const {
    product_id,
    product_reward_id,
    description,
    rate,
    amount,
    reward_application_condition,
  } = data;

  const rewardApplicationCondition = rewardsTypesOptions
    .find(el => el.value === reward_application_condition);

  return {
    productId: product_id,
    productRewardId: product_reward_id,
    description,
    rate,
    amount,
    rewardApplicationCondition: rewardApplicationCondition && rewardApplicationCondition.label,
    rewardApplicationConditionValue: reward_application_condition,
  };
};

export const prepareProductRewards = (data: Partial<ProductRewardPlainInfo>):
  Partial<ProductRewardItem> => {
  if (!data) {
    return null;
  }

  const {
    productId,
    productRewardId,
    description,
    rate,
    amount,
  } = data;

  return {
    product_id: productId,
    product_reward_id: productRewardId,
    description,
    rate: Number(rate),
    amount: Number(amount),
  };
};

export const prepareFormDataProductRewardsToSend = (data: Partial<ProductRewardFormValues>):
  Partial<ProductRewardItem> => {
  if (!data) {
    return null;
  }

  const { rewardApplicationCondition } = data;

  return {
    ...prepareProductRewards(data),
    reward_application_condition: rewardApplicationCondition && rewardApplicationCondition.value,
  };
};

export const prepareProductRewardsToSend = (data: Partial<ProductReward>):
  Partial<ProductRewardItem> => {
  if (!data) {
    return null;
  }

  const rewardApplicationCondition = rewardsTypesOptions
    .find(el => el.label === data.rewardApplicationCondition);

  return {
    ...prepareProductRewards(data),
    reward_application_condition: rewardApplicationCondition && rewardApplicationCondition.value,
  };
};
