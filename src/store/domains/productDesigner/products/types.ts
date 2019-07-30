import { ImmutableArray } from 'seamless-immutable';
import { SelectValues, SuccessResponseStatusType } from 'types';

export interface ProductItemPlainResp {
  id: number;
  name: string;
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
}

export interface ProductsDataResp extends SuccessResponseStatusType {
  products: Array<ProductItemResp>;
}

export interface ProductDataResp extends SuccessResponseStatusType {
  product: ProductItemResp;
}

export interface ProductItemPlain {
  id: number;
  name: string;
  description: string;
  historyRetentionNumberOfDay: number;
  lockedFlag: boolean;
}

export interface ProductItem extends ProductItemPlain {
  institutionId: string | number;
  status: string | number;
  productType: string | number;
  scheme: string | number;
  currencyCode: string | number;
  defaultStatementCycleId: string | number;
}

export interface ProductItemGeneral extends ProductItemPlain {
  institutionId: SelectValues;
  status: SelectValues;
  productType: SelectValues;
  scheme: SelectValues;
  currencyCode: SelectValues;
  defaultStatementCycleId: SelectValues;
}

export interface ProductFilterParams {
  activeStatusFlag?: boolean;
  institutionId?: SelectValues;
  productType?: Array<SelectValues>;
}

export interface ProductFilterParamsPrepared {
  status: string;
  institution_id: number | string;
  product_type: Array<number | string>;
}

export interface RevolvingCreditProductItemResp {
  product_id: number;
  apr_default: number;
  apr_cash: number;
  apr_sales: number;
  apr_balance_transfer: number;
  apr_fee: number;
  fee_late_payment: number;
  fee_exceed_limit: number;
  fee_unpaid: number;
  fee_over_limit: number;
  minimum_payment_percent: number;
  minimum_payment_amount: number;
  payment_grace_number_of_days: number;
  limit_sharing_allowed_flag: string;
}

export interface RevolvingCreditProductResp extends SuccessResponseStatusType {
  product: RevolvingCreditProductItemResp;
}

export interface RevolvingCreditProductItem {
  productId: number;
  aprDefault: number;
  aprCash: number;
  aprSales: number;
  aprBalanceTransfer: number;
  aprFee: number;
  feeLatePayment: number;
  feeExceedLimit: number;
  feeUnpaid: number;
  feeOverLimit: number;
  minimumPaymentPercent: number;
  minimumPaymentAmount: number;
  paymentGraceNumberOfDays: number;
  limitSharingAllowedFlag: boolean;
}

export interface LoanProductItemResp {
  product_id: number;
  loan_type: number | string;
  apr: number;
  fee_late_payment: number;
  payment_grace_number_of_days: number;
}

export interface LoanProductResp extends SuccessResponseStatusType {
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

export interface PrepaidProductResp extends SuccessResponseStatusType {
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

export interface DebitProductResp extends SuccessResponseStatusType {
  product: DebitProductItemResp;
}

export interface DebitProductItem {
  productId: number;
  aprOverdraft: number;
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

export interface SavingsProductResp extends SuccessResponseStatusType {
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
  event_id: number;
  action_type: string | number;
  script: string;
  product_id: number;
}

export type NewProduct = ProductItemDetails & ProductItemGeneral;

export type NewProductPrepared = ProductItemDetailsResp & ProductItemResp;

export interface ProductRulesResp extends SuccessResponseStatusType {
  product_rules: ProductRulesItemResp;
}

export interface ProductRulesItem {
  description: string;
  eventId: number;
  actionType: SelectValues;
  script: string;
  productId: number;
}

export interface ProductsState {
  products: ImmutableArray<ProductItemResp>;
  currentProductId: number;
  currentProduct: ProductItemResp;
  currentProductDetails: ProductItemDetailsResp;
  currentProductRules: ProductRulesItemResp;

  filterProductsParams: ProductFilterParamsPrepared;
}
