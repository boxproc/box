import { ImmutableArray } from 'seamless-immutable';

import { IIdNamePair, ISelectValue } from 'types';

interface ProductItemInfoPlain extends IIdNamePair { }

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
  statement_cycle_type_id: number | string;
  statement_cycle_type_name?: string;
  statement_cycle_parameter: number;
}

export interface ProductsDataResp {
  products: Array<ProductItemResp>;
}

export interface ProductDataResp {
  product: ProductItemResp;
}

export interface ProductItemPlain extends ProductItemInfoPlain {
  description: string;
  historyRetentionNumberOfDays: number;
  lockedFlag: boolean;
  overridesProductId?: number;
  statementCycleParameter: number;
}

export interface ProductItem extends ProductItemPlain {
  institutionId: string | number;
  status: string | number;
  productType: string | number;
  scheme: string | number;
  currencyCode: string | number;
  statementCycleType: string;
}

export interface ProductItemGeneral extends ProductItemPlain {
  institutionId: ISelectValue;
  status: ISelectValue;
  productType: ISelectValue;
  scheme: ISelectValue;
  currencyCode: ISelectValue;
  cardFormFactor: ISelectValue;
  numberOfDaysCardExpires: number;
  statementCycleTypeId: ISelectValue;
}

export interface ProductFilter {
  activeStatusFlag?: boolean;
  institutionId?: ISelectValue;
  productType?: Array<ISelectValue>;
}

export interface ProductFilterPrepared {
  status: string;
  institution_id: number | string;
  product_type: Array<number | string>;
}

export interface RevolvingCreditProductItemResp {
  product_id: number;
  limit_sharing_allowed_flag: string;
  minimum_repayment_amount: number;
  minimum_repayment_rate: number;
  repayment_grace_number_of_days: number;
}

export interface RevolvingCreditProductResp {
  product: RevolvingCreditProductItemResp;
}

export interface RevolvingCreditProductItem {
  productId: number;
  limitSharingAllowedFlag: boolean;
  minimumRepaymentAmount: number;
  minimumRepaymentRate: number;
  repaymentGraceNumberOfDays: number;
}

export interface LoanProductItemResp {
  product_id: number;
  def_num_of_installments: number;
  def_num_of_intrst_free_instlmts: number;
  interest_distribution_type: number | string;
  allow_overpayment: number | string;
}

export interface LoanProductResp {
  product: LoanProductItemResp;
}

export interface LoanProductItem {
  productId: number;
  defNumOfInstallments: number;
  defNumOfIntrstFreeInstlmts: number;
  interestDistributionType: ISelectValue;
  allowOverpayment: number | string;
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

export interface SavingsProductResp {
  product: SavingsProductItemResp;
}

export interface SavingsProductItem {
  productId: number;
  savingsType: ISelectValue;
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

export type NewProduct = ProductItemDetails & ProductItemGeneral;

export type NewProductPrepared = ProductItemDetailsResp & ProductItemResp;

export interface InstitutionProductsItem extends ProductItemInfoPlain {
  product_type: string;
  def_num_of_intrst_free_instlmts: number;
  def_num_of_installments: number;
}

export interface InstitutionProductsItemPrepared extends ProductItemInfoPlain {
  productType: string;
  defNumOfIntrstFreeInstlmts: number;
  defNumOfInstallments: number;
}

export interface InstitutionProducts {
  institution_products: Array<InstitutionProductsItem>;
}

export interface ProductsState {
  products: ImmutableArray<ProductItemResp>;
  currentProduct: ProductItemResp;
  currentProductDetails: ProductItemDetailsResp;
  institutionProducts: ImmutableArray<InstitutionProductsItem>;
}
