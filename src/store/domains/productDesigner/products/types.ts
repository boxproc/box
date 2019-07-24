import { ImmutableArray } from 'seamless-immutable';
import { SelectValues, SuccessResponseStatusType } from 'types';

export interface ProductItemResp {
  id: number;
  institution_id: string | number;
  name: string;
  description: string;
  status: string;
  product_type: string;
  scheme: string;
  currency_code: string | number;
  history_retention_number_of_day: number;
  default_statement_cycle_id: string;
  locked_flag: string;
}

export interface ProductItem {
  id: number;
  institutionId: string | number;
  name: string;
  description: string;
  status: string;
  productType: string;
  scheme: string;
  currencyCode: string | number;
  historyRetentionNumberOfDay: number;
  defaultStatementCycleId: string;
  lockedFlag: boolean;
}

export interface ProductsDataResp extends SuccessResponseStatusType {
  products: Array<ProductItemResp>;
}

export interface ProductFilterParams {
  activeStatusFlag?: boolean;
  institutionId?: Array<SelectValues>;
  productType?: Array<SelectValues>;
}

export interface ProductFilterParamsPrepared {
  status: string;
  institution_id: Array<number | string>;
  product_type: Array<number | string>;
}

export interface RevolvingCreditProductItemResp {
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

export interface RevolvingCreditProductItem {
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
  limitSharingAllowed: boolean;
}

export interface LoanProductItemResp {
  loan_type: number | string;
  apr: number;
  fee_late_payment: number;
  payment_grace_number_of_days: number;
}

export interface LoanProductItem {
  loanType: SelectValues;
  apr: number;
  feeLatePayment: number;
  paymentGraceNumberOfDays: number;
}

export interface PrepaidProductItemResp {
  dormant_after_number_of_days: number;
  break_ages_allowed: string;
  reload_allowed: string;
}

export interface PrepaidProductItem {
  dormantAfterNumberOfDays: number;
  breakAgesAllowed: boolean;
  reloadAllowed: boolean;
}

export interface DebitProductItemResp {
  apr_overdraft: number;
  overdraft_allowed: string;
}

export interface DebitProductItem {
  aprOverdraft: number;
  overdraftAllowed: boolean;
}

export interface SavingsProductItemResp {
  savings_type: number | string;
  apr: number;
  minimum_deposit_allowed: number;
  maximum_deposit_allowed: number;
  maximum_monthly_deposit: number;
}

export interface SavingsProductItem {
  savingsType: SelectValues;
  apr: number;
  minimumDepositAllowed: number;
  maximumDepositAllowed: number;
  maximumMonthlyDeposit: number;
}

export interface RevolvingCreditProductItemDetailsResp extends ProductItemResp {
  details: RevolvingCreditProductItemResp;
}

export interface SavingsProductItemDetailsResp extends ProductItemResp {
  details: SavingsProductItemResp;
}

export interface LoanProductItemDetailsResp extends ProductItemResp {
  details: LoanProductItemResp;
}

export interface PrepaidProductItemDetailsResp extends ProductItemResp {
  details: PrepaidProductItemResp;
}

export interface DebitProductItemDetailsResp extends ProductItemResp {
  details: DebitProductItemResp;
}

export type ProductItemDetailsResp =
  | RevolvingCreditProductItemDetailsResp
  | SavingsProductItemDetailsResp
  | LoanProductItemDetailsResp
  | PrepaidProductItemDetailsResp
  | DebitProductItemDetailsResp;

export interface ProductDataResp extends SuccessResponseStatusType {
  product: ProductItemDetailsResp;
}

export interface ProductItemDetails {
  id: number;
  institutionId: SelectValues;
  name: string;
  description: string;
  status: SelectValues;
  productType: SelectValues;
  scheme: SelectValues;
  currencyCode: SelectValues;
  historyRetentionNumberOfDay: number;
  defaultStatementCycleId: string;
  lockedFlag: boolean;
}

export interface RevolvingCreditProductItemDetails extends ProductItemDetails {
  details: RevolvingCreditProductItem;
}

export interface SavingsProductItemDetails extends ProductItemDetails {
  details: SavingsProductItem;
}

export interface LoanProductItemDetails extends ProductItemDetails {
  details: LoanProductItem;
}

export interface PrepaidProductItemDetails extends ProductItemDetails {
  details: PrepaidProductItem;
}

export interface DebitProductItemDetails extends ProductItemDetails {
  details: DebitProductItem;
}

export interface ProductsState {
  products: ImmutableArray<ProductItemResp>;
  revolvingCreditProduct: RevolvingCreditProductItemDetailsResp;
  loanProduct: LoanProductItemDetailsResp;
  prepaidProduct: PrepaidProductItemDetailsResp;
  debitProduct: DebitProductItemDetailsResp;
  savingsProduct: SavingsProductItemDetailsResp;
  filterProductsParams: ProductFilterParamsPrepared;
}
