import { ImmutableArray } from 'seamless-immutable';
import { SelectValues, SuccessResponseStatusType } from 'types';

export interface ProductItemResp {
  id: number;
  institution_id: string | number;
  name: string;
  description: string;
  status: string | number;
  product_type: string | number;
  scheme: string | number;
  currency_code: string | number;
  history_retention_number_of_day: number;
  default_statement_cycle_id: string | number;
  locked_flag: string;
}

export interface ProductItem {
  id: number;
  institutionId: string | number;
  name: string;
  description: string;
  status: string | number;
  productType: string | number;
  scheme: string | number;
  currencyCode: string | number;
  historyRetentionNumberOfDay: number;
  defaultStatementCycleId: string | number;
  lockedFlag: boolean;
}

export interface ProductItemGeneral {
  id: number;
  institutionId: SelectValues;
  name: string;
  description: string;
  status: SelectValues;
  productType: SelectValues;
  scheme: SelectValues;
  currencyCode: SelectValues;
  historyRetentionNumberOfDay: number;
  defaultStatementCycleId: SelectValues;
  lockedFlag: boolean;
}

export interface ProductsDataResp extends SuccessResponseStatusType {
  products: Array<ProductItemResp>;
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

export interface RevolvingCreditProductItemResp extends ProductItemResp {
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

export interface RevolvingCreditProductItem extends ProductItemGeneral {
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

export interface LoanProductItemResp extends ProductItemResp {
  loan_type: number | string;
  apr: number;
  fee_late_payment: number;
  payment_grace_number_of_days: number;
}

export interface LoanProductItem extends ProductItemGeneral {
  loanType: SelectValues;
  apr: number;
  feeLatePayment: number;
  paymentGraceNumberOfDays: number;
}

export interface PrepaidProductItemResp extends ProductItemResp {
  dormant_after_number_of_days: number;
  breakages_allowed: string;
  reload_allowed: string;
}

export interface PrepaidProductItem extends ProductItemGeneral {
  dormantAfterNumberOfDays: number;
  breakagesAllowed: boolean;
  reloadAllowed: boolean;
}

export interface DebitProductItemResp extends ProductItemResp {
  apr_overdraft: number;
  overdraft_allowed: string;
}

export interface DebitProductItem extends ProductItemGeneral {
  aprOverdraft: number;
  overdraftAllowed: boolean;
}

export interface SavingsProductItemResp extends ProductItemResp {
  savings_type: number | string;
  apr: number;
  minimum_deposit_allowed: number;
  maximum_deposit_allowed: number;
  maximum_monthly_deposit: number;
}

export interface SavingsProductItem extends ProductItemGeneral {
  savingsType: SelectValues;
  apr: number;
  minimumDepositAllowed: number;
  maximumDepositAllowed: number;
  maximumMonthlyDeposit: number;
}

export type ProductItemDetailsResp =
  | Partial<RevolvingCreditProductItemResp>
  | Partial<SavingsProductItemResp>
  | Partial<LoanProductItemResp>
  | Partial<PrepaidProductItemResp>
  | Partial<DebitProductItemResp>;

export interface ProductDataResp extends SuccessResponseStatusType {
  product: ProductItemDetailsResp;
}

export type ProductItemDetails =
  | Partial<RevolvingCreditProductItem>
  | Partial<SavingsProductItem>
  | Partial<LoanProductItem>
  | Partial<PrepaidProductItem>
  | Partial<DebitProductItem>;

export interface ProductsState {
  products: ImmutableArray<ProductItemResp>;
  currentProductId: number;
  revolvingCreditProduct: RevolvingCreditProductItemResp;
  loanProduct: LoanProductItemResp;
  prepaidProduct: PrepaidProductItemResp;
  debitProduct: DebitProductItemResp;
  savingsProduct: SavingsProductItemResp;
  filterProductsParams: ProductFilterParamsPrepared;
}
