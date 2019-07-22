import { ImmutableArray } from 'seamless-immutable';
import { ParsedSelectValues, SuccessResponseStatusType } from 'types';

export interface ProductItemResp {
  id: number;
  institution_id: number;
  name: string;
  description: string;
  status: string;
  product_type: string;
  scheme: string;
  currency_code: number;
  history_retention_number_of_day: number;
  default_statement_cycle_id: string;
  locked_flag: string;
}

export interface ProductItem {
  id: number;
  institutionId: string;
  name: string;
  description: string;
  status: string;
  productType: string;
  scheme: string;
  currencyCode: number;
  historyRetentionNumberOfDay: number;
  defaultStatementCycleId: string;
  lockedFlag: string;
}

// export interface ProductItemDetails {
//   id: number;
//   institutionId: ParsedSelectValues;
//   name: string;
//   description: string;
//   status: ParsedSelectValues;
//   productType: ParsedSelectValues;
//   scheme: ParsedSelectValues;
//   currencyCode: ParsedSelectValues;
//   historyRetentionNumberOfDay: number;
//   defaultStatementCycleId: string;
//   lockedFlag: boolean;
// }

export interface ProductFilterParamsPrepared {
  status?: string;
  institution_id?: Array<number>;
  product_type?: Array<string>;
}

export interface ProductFilterParams {
  activeStatusFlag?: boolean;
  institutionId?: Array<ParsedSelectValues>;
  productType?: Array<ParsedSelectValues>;
}

export interface ProductsDataResp extends SuccessResponseStatusType {
  products: Array<ProductItemResp>;
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
  aprBalance_transfer: number;
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
  loan_type: string;
  apr: number;
  fee_late_payment: number;
  payment_grace_number_of_days: number;
}

export interface LoanProductItem {
  loanType: ParsedSelectValues;
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
  savings_type: string;
  apr: number;
  minimum_deposit_allowed: number;
  maximum_deposit_allowed: number;
  maximum_monthly_deposit: number;
}

export interface SavingsProductItem {
  savingsType: ParsedSelectValues;
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

// export interface RevolvingCreditProductItemDetails extends ProductItemDetails {
//   details: RevolvingCreditProductItem;
// }

// export interface SavingsProductItemDetails extends ProductItemDetails {
//   details: SavingsProductItem;
// }

// export interface LoanProductItemDetails extends ProductItemDetails {
//   details: LoanProductItem;
// }

// export interface PrepaidProductItemDetails extends ProductItemDetails {
//   details: PrepaidProductItem;
// }

// export interface DebitProductItemDetails extends ProductItemDetails {
//   details: DebitProductItem;
// }

export interface ProductsState {
  products: ImmutableArray<ProductItemResp>;
  revolvingCreditProduct: RevolvingCreditProductItemDetailsResp;
  loanProduct: LoanProductItemDetailsResp;
  prepaidProduct: PrepaidProductItemDetailsResp;
  debitProduct: DebitProductItemDetailsResp;
  savingsProduct: SavingsProductItemDetailsResp;
  filterProductsParams: ProductFilterParamsPrepared;
}
