import { ImmutableArray } from 'seamless-immutable';

import { IdNamePair, SelectValues } from 'types';

interface ProductItemInfoPlain extends IdNamePair { }

export interface ProductItemPlainResp extends ProductItemInfoPlain {
  description: string;
  history_retention_number_of_day: number;
  locked_flag: string;
}

export interface ProductItemResp extends ProductItemPlainResp {
  institution_id: string | number;
  status: string | number;
  product_type: string | number;
  scheme: string | number;
  currency_code: string | number;
  default_statement_cycle_id: string | number;
  statement_cycle_description: string | number;
  overrides_product_id?: number;
  card_form_factor: string | number;
  number_of_days_card_expires: number;
  card_transactions_endpoint_id?: number;
  card_management_interface_id?: number;
  provider_3d_secure_interface_id?: number;
  direct_debit_interface_id?: string | number;
  card_repayment_interface_id?: string | number;
  gl_acc_assets?: string;
  gl_acc_liabilities?: string;
  gl_acc_profit?: string;
  gl_acc_loss?: string;
  aux_counter_1_description?: string;
  aux_counter_2_description?: string;
  aux_counter_3_description?: string;
  aux_counter_1_enabled?: string;
  aux_counter_2_enabled?: string;
  aux_counter_3_enabled?: string;
}

export interface IllustrationProductLoanResp {
  statement_id: number;
  statement_date: string;
  installment_balance: number;
  fee: number;
  apr: number;
  amount: number;
  minimum_amount_due_repayment: number;
}

export interface IllustrationProductLoan {
  statementId: number | string;
  statementDate: number | string;
  installmentBalance: number | string;
  fee: number | string;
  apr: number | string;
  amount: number | string;
  minimumAmountDueRepayment: number | string;
}

export interface IllustrationProductStatementsRevolvingCreditResp {
  statement_id: number;
  statement_date: string;
  first_transaction_id: number;
  last_transaction_id: number;
  balance_open: number;
  balance_close: number;
  minimum_amount_due_repayment: number;
}

export interface IllustrationProductStatementsRevolvingCredit {
  statementId: number | string;
  statementDate: number | string;
  firstTransactionId: number| string;
  lastTransactionId: number| string;
  balanceOpen: number | string;
  balanceClose: number | string;
  minimumAmountDueRepayment: number | string;
}

export interface IllustrationProductAprRevolvingCreditResp {
  description: number;
  accrued_interest: number;
  rate: number;
}
export interface IllustrationProductFeeRevolvingCredit {
  description: number | string;
  accruedFee: number | string;
}

export interface IllustrationProductAprRevolvingCredit {
  description: number | string;
  accruedInterest: number| string;
  rate: number| string;
}

export interface IllustrationProductTransactionsRevolvingCredit {
  transactionDatetime: number | string;
  debitCreditIndicator: number| string;
  amount: number| string;
  balanceSettledBefore: number| string;
  balanceSettledAfter: number| string;
  balanceAvailableBefore: number| string;
  balanceAvailableAfter: number| string;
  description: number| string;
  status: number| string;
  aprRate: number| string;
}

export interface IllustrationProductTransactionsRevolvingCreditResp {
  transaction_datetime: number | string;
  debit_credit_indicator: number| string;
  amount: number;
  balance_settled_before: number;
  balance_settled_after: number;
  balance_available_before: number;
  balance_available_after: number;
  description: number | string;
  status: number | string;
  apr_rate: number;
}

export interface IllustrationProductRewardsRevolvingCreditResp {
  description: number | string;
  accruedReward: number | string;
}

export interface IllustrationProductFeeRevolvingCreditResp {
  description: string;
  accrued_fee: number;
}

export interface IllustrationProductRewardRevolvingCreditResp {
  description: number;
  accrued_reward: number;
}

export interface ProductsDataResp {
  products: Array<ProductItemResp>;
}

export interface ProductLoanIllustrationDataResp {
  product_information: Array<IllustrationProductLoanResp>;
}

export interface ProductRevolvingCreditStatementsIllustrationDataResp {
  statements: Array<IllustrationProductStatementsRevolvingCreditResp>;
}

export interface ProductRevolvingCreditTransactionsIllustrationDataResp {
  transactions: Array<IllustrationProductTransactionsRevolvingCreditResp>;
}

export interface ProductRevolvingCreditAprIllustrationDataResp {
  aprs: Array<IllustrationProductAprRevolvingCreditResp>;
}

export interface ProductRevolvingCreditFeeIllustrationDataResp {
  fees: Array<IllustrationProductFeeRevolvingCreditResp>;
}

export interface ProductRevolvingCreditRewardIllustrationDataResp {
  rewards: Array<IllustrationProductRewardRevolvingCreditResp>;
}

export interface ProductRevolvingCreditIllustrationAllDataResp {
  revolving_credit_information: ProductRevolvingCreditIllustrationDataResp;
}

export interface ProductRevolvingCreditIllustrationDataResp {
  statements: Array<IllustrationProductStatementsRevolvingCreditResp>;
  aprs: Array<IllustrationProductAprRevolvingCreditResp>;
  fees: Array<IllustrationProductFeeRevolvingCreditResp>;
  rewards: Array<IllustrationProductRewardRevolvingCreditResp>;
  transactions: Array<IllustrationProductTransactionsRevolvingCreditResp>;
}

export interface ProductDataResp {
  product: ProductItemResp;
}

export interface ProductItemPlain extends ProductItemInfoPlain {
  description: string;
  historyRetentionNumberOfDays: number;
  lockedFlag: boolean;
  overridesProductId?: number;
}

export interface ProductItem extends ProductItemPlain {
  institutionId: string | number;
  status: string | number;
  productType: string | number;
  scheme: string | number;
  currencyCode: string | number;
  defaultStatementCycle: string | number;
}

export interface ProductItemGeneral extends ProductItemPlain {
  institutionId: SelectValues;
  status: SelectValues;
  productType: SelectValues;
  scheme: SelectValues;
  currencyCode: SelectValues;
  defaultStatementCycle: SelectValues;
  cardFormFactor: SelectValues;
  numberOfDaysCardExpires: number;
}

export interface ProductFilter {
  activeStatusFlag?: boolean;
  institutionId?: SelectValues;
  productType?: Array<SelectValues>;
}

export interface ProductFilterPrepared {
  status: string;
  institution_id: number | string;
  product_type: Array<number | string>;
}

export interface LoanProductIllustratePrepared {
  product_id: number;
  amount: number;
  start_date: string;
  nr_loan_cycles: number;
  nr_interest_free: number;
}

export interface RevolvingCreditProductIllustratePrepared {
  product_id: number;
  limit: number;
  start_date: string;
  transaction_date_1: string;
  transaction_date_2: string;
  transaction_date_3: string;
  transaction_type_1: number | string;
  transaction_type_2: number | string;
  transaction_type_3: number | string;
  transaction_amount_1: number;
  transaction_amount_2: number;
  transaction_amount_3: number;
}

export interface LoanProductIllustrate {
  productId: number;
  amount: number;
  startDate: string;
  defNumOfInstallments: number;
  defNumOfIntrstFreeInstlmts: number;
}

export interface RevolvingCreditnProductIllustrate {
  productId: number;
  limit: number;
  startDate: string;
  transactionDate1: string;
  transactionDate2: string;
  transactionDate3: string;
  transactionType1: SelectValues;
  transactionType2: SelectValues;
  transactionType3: SelectValues;
  transactionAmount1: number;
  transactionAmount2: number;
  transactionAmount3: number;
}

export interface RevolvingCreditProductItemResp {
  product_id: number;
  apr_default: number;
  apr_default_calculation_method: string | number;
  fee_exceed_limit: number;
  fee_late_payment: number;
  fee_overpayment: number;
  limit_sharing_allowed_flag: string;
  minimum_payment_amount: number;
  minimum_payment_rate: number;
  payment_grace_number_of_days: number;
  rate_exceed_limit: number;
  rate_late_payment: number;
  rate_overpayment: number;
}

export interface RevolvingCreditProductResp {
  product: RevolvingCreditProductItemResp;
}

export interface RevolvingCreditProductItem {
  productId: number;
  aprDefault: number;
  aprDefaultCalculationMethod: SelectValues;
  feeExceedLimit: number;
  feeLatePayment: number;
  feeOverpayment: number;
  limitSharingAllowedFlag: boolean;
  minimumPaymentAmount: number;
  minimumPaymentRate: number;
  paymentGraceNumberOfDays: number;
  rateExceedLimit: number;
  rateLatePayment: number;
  rateOverpayment: number;
}

export interface LoanProductItemResp {
  product_id: number;
  def_num_of_installments: number;
  def_num_of_intrst_free_instlmts: number;
  interest_distribution_type: number|string;
  allow_overpayment: number|string;
}

export interface LoanProductResp {
  product: LoanProductItemResp;
}

export interface LoanProductItem {
  productId: number;
  defNumOfInstallments: number;
  defNumOfIntrstFreeInstlmts: number;
  interestDistributionType: SelectValues;
  allowOverpayment: number|string;
}

export interface PrepaidProductItemResp {
  product_id: number;
  dormant_after_number_of_days: number;
  breakages_allowed: string;
  reload_allowed: string;
}

export interface PrepaidProductResp {
  product: PrepaidProductItemResp;
}

export interface PrepaidProductItem {
  productId: number;
  dormantAfterNumberOfDays: number;
  breakagesAllowed: boolean;
  reloadAllowed: boolean;
}

export interface DebitProductItemResp {
  product_id: number;
  apr_overdraft: number;
  overdraft_allowed: string;
}

export interface DebitProductResp {
  product: DebitProductItemResp;
}

export interface DebitProductItem {
  productId: number;
  aprOverdraft: number | string;
  overdraftAllowed: boolean;
}

export interface SavingsProductItemResp {
  product_id: number;
  savings_type: number | string;
  apr: number;
  minimum_deposit_allowed: number;
  maximum_deposit_allowed: number;
  maximum_monthly_deposit: number;
}

export interface SavingsProductResp {
  product: SavingsProductItemResp;
}

export interface SavingsProductItem {
  productId: number;
  savingsType: SelectValues;
  apr: number;
  minimumDepositAllowed: number;
  maximumDepositAllowed: number;
  maximumMonthlyDeposit: number;
}

export type ProductDetailsResp =
  | DebitProductResp
  | LoanProductResp
  | PrepaidProductResp
  | RevolvingCreditProductResp
  | SavingsProductResp;

export type ProductItemDetailsResp =
  | DebitProductItemResp
  | LoanProductItemResp
  | PrepaidProductItemResp
  | RevolvingCreditProductItemResp
  | SavingsProductItemResp;

export type ProductItemDetails =
  | DebitProductItem
  | LoanProductItem
  | PrepaidProductItem
  | RevolvingCreditProductItem
  | SavingsProductItem;

export interface ProductRulesItemResp {
  description: string;
  event_id: string | number;
  action_type: string | number;
  script: string;
  product_id: number;
}

export type NewProduct = ProductItemDetails & ProductItemGeneral;

export type NewProductPrepared = ProductItemDetailsResp & ProductItemResp;

export interface ProductRuleResp {
  product_rule: ProductRulesItemResp;
}

export interface ProductRulesItem {
  description: string;
  eventId: SelectValues;
  actionType: SelectValues;
  script: string;
  productId: number;
}

export interface ProductRuleRequest {
  productId: number;
  eventId?: number | string;
  actionType?: number | string;
}

export interface ProductRuleRequestPrepared {
  product_id: number;
  event_id?: number | string;
  action_type?: number | string;
}

export interface InstitutionProductsItem extends ProductItemInfoPlain {
  default_statement_cycle_id: number;
  product_type: string;
}

export interface InstitutionProductsItemPrepared extends ProductItemInfoPlain {
  defaultStatementCycleId: number;
  productType: string;
}

export interface InstitutionProducts {
  institution_products: Array<InstitutionProductsItem>;
}

export interface InstitutionProductServiceInterfaces {
  interfaces: Array<IdNamePair>;
}

export interface InstitutionProductServiceEndpoints {
  endpoints: Array<IdNamePair>;
}

export interface ServicesItems {
  id: number;
  card_transactions_endpoint_id: string | number;
  card_management_interface_id: string | number;
  provider_3d_secure_interface_id: string | number;
  direct_debit_interface_id: string | number;
  card_repayment_interface_id: string | number;
}

export interface ServicesItemsPrepared {
  id: number;
  endpoints: SelectValues;
  interfaces: SelectValues;
  secureProviderInterfaces: SelectValues;
  directDebitRepaymentInterface: SelectValues;
  cardRepaymentInterface: SelectValues;
}

export interface GeneralLedgerItem {
  product_id: number;
  gl_acc_assets: string;
  gl_acc_liabilities: string;
  gl_acc_profit: string;
  gl_acc_loss: string;
}

export interface GeneralLedgerItemPrepared {
  id: number;
  glAccAssets: string;
  glAccLiabilities: string;
  glAccProfit: string;
  glAccLoss: string;
}

export interface ProductAuxCountersItem {
  product_id: number;
  aux_counter_1_description?: string;
  aux_counter_2_description?: string;
  aux_counter_3_description?: string;
  aux_counter_1_enabled?: string;
  aux_counter_2_enabled?: string;
  aux_counter_3_enabled?: string;
}

export interface ProductAuxCountersItemPrepared {
  id: number;
  auxCounter1Description: string;
  auxCounter2Description: string;
  auxCounter3Description: string;
  auxCounter1Enabled: boolean;
  auxCounter2Enabled: boolean;
  auxCounter3Enabled: boolean;
}

export interface ProductAprItem {
  product_id: number;
  product_apr_id: number;
  description: string;
  calculation_method: string | number;
  rate: number;
  grace_number_of_days: number;
}

export interface ProductAprItems {
  product_aprs: Array<ProductAprItem>;
}

export interface ProductFeeAprItemResp {
  product_apr_id: number | string;
  apr_description: string;
}

export interface ProductFeeAprItems {
  product_fee_aprs: Array<ProductFeeAprItemResp>;
}

export interface ProductAprIds {
  productId: number;
  productAprId: number;
}

export interface ProductAprPlainInfo extends ProductAprIds {
  description: string;
  rate: string;
  graceNumberOfDays: number;
}

export interface ProductApr extends ProductAprPlainInfo {
  calculationMethod: string;
}

export interface ProductAprFormValues extends ProductAprPlainInfo {
  calculationMethod: SelectValues;
}

export interface ProductAprs {
  product_aprs: Array<ProductApr>;
}

export interface ProductFeeItem {
  product_id: number;
  product_fee_id: number;
  description: string;
  rate: number;
  amount: number;
  apr_description: string;
  fee_application_condition: string | number;
  apr_id: string | number;
}

export interface ProductFeeItems {
  product_fees: Array<ProductFeeItem>;
}

export interface ProductFeesIds {
  productId: number;
  productFeeId: number;
}

export interface ProductFeePlainInfo extends ProductFeesIds {
  description: string;
  rate: string;
  amount: string;
}

export interface ProductFee extends ProductFeePlainInfo {
  feeApplicationCondition: string;
  feeApplicationConditionValue: string | number;
  apr: SelectValues;
}

export interface ProductFeeFormValues extends ProductFeePlainInfo {
  feeApplicationCondition: SelectValues;
  apr: SelectValues;
}

export interface ProductFees {
  product_fees: Array<ProductFee>;
}

export interface ProductRewardItem {
  product_id: number;
  product_reward_id: number;
  description: string;
  rate: number;
  amount: number;
  reward_application_condition: string | number;
}

export interface ProductRewardItems {
  product_rewards: Array<ProductRewardItem>;
}

export interface ProductRewardsIds {
  productId: number;
  productRewardId: number;
}

export interface ProductRewardPlainInfo extends ProductRewardsIds {
  description: string;
  rate: string;
  amount: string;
}

export interface ProductReward extends ProductRewardPlainInfo {
  rewardApplicationCondition: string;
  rewardApplicationConditionValue: string | number;
}

export interface ProductRewardFormValues extends ProductRewardPlainInfo {
  rewardApplicationCondition: SelectValues;
}

export interface ProductRewards {
  product_rewards: Array<ProductReward>;
}

export interface ProductsState {
  products: ImmutableArray<ProductItemResp>;
  currentProduct: ProductItemResp;
  currentProductDetails: ProductItemDetailsResp;
  currentProductRule: ProductRulesItemResp;
  institutionProducts: ImmutableArray<InstitutionProductsItem>;
  interfaces: ImmutableArray<IdNamePair>;
  endpoints: ImmutableArray<IdNamePair>;
  productAprs: ImmutableArray<ProductAprItem>;
  productFees: ImmutableArray<ProductFeeItem>;
  productRewards: ImmutableArray<ProductRewardItem>;
  productFeeAprs: ImmutableArray<ProductFeeAprItemResp>;
  productIllustration: ImmutableArray<IllustrationProductLoanResp>;
  productRevolvingCreditIllustration: {
  statements: ImmutableArray<IllustrationProductStatementsRevolvingCreditResp>;
  aprs: ImmutableArray<IllustrationProductAprRevolvingCreditResp>;
  fees: ImmutableArray<IllustrationProductFeeRevolvingCreditResp>;
  rewards: ImmutableArray<IllustrationProductRewardRevolvingCreditResp>;
  transactions: ImmutableArray<IllustrationProductTransactionsRevolvingCreditResp>;
};
}
