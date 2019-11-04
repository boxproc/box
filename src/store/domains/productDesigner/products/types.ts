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
  card_transactions_endpoint_id?: number;
  card_management_interface_id?: number;
  provider_3d_secure_interface_id?: number;
}

export interface ProductsDataResp {
  products: Array<ProductItemResp>;
}

export interface ProductDataResp {
  product: ProductItemResp;
}

export interface ProductItemPlain extends ProductItemInfoPlain {
  description: string;
  historyRetentionNumberOfDay: number;
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
  loan_type: number | string;
  apr: number;
  fee_late_payment: number;
  payment_grace_number_of_days: number;
}

export interface LoanProductResp {
  product: LoanProductItemResp;
}

export interface LoanProductItem {
  productId: number;
  loanType: SelectValues;
  apr: number;
  feeLatePayment: number;
  paymentGraceNumberOfDays: number;
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

export interface InstitutionProducts {
  institution_products: Array<ProductItemInfoPlain>;
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
}

export interface ServicesItemsPrepared {
  id: number;
  endpoints: SelectValues;
  interfaces: SelectValues;
  secureProviderInterfaces: SelectValues;
}

export interface ProductAprItem {
  id: number;
  product_id: number;
  repayment_sequence: number;
  description: string;
  calculation_method: string | number;
  rate: number;
  grace_number_of_days: number;
}

export interface ProductAprItems {
  product_aprs: Array<ProductAprItem>;
}

export interface ProductAprPlainInfo {
  id: number;
  productId: number;
  repaymentSequence: number;
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

export interface ProductsState {
  products: ImmutableArray<ProductItemResp>;
  currentProduct: ProductItemResp;
  currentProductDetails: ProductItemDetailsResp;
  currentProductRule: ProductRulesItemResp;
  institutionProducts: ImmutableArray<ProductItemInfoPlain>;
  interfaces: ImmutableArray<IdNamePair>;
  endpoints: ImmutableArray<IdNamePair>;
  productAprs: ImmutableArray<ProductAprItem>;
}
