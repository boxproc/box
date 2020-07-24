import { ImmutableArray } from 'seamless-immutable';
import { IIdNamePair, ISelectValue } from 'types';

interface IPlainInfo extends IIdNamePair { }

interface IProductPlainData extends IPlainInfo {
  description: string;
  history_retention_number_of_day: number;
  locked_flag: string;
  enabled_for_customer_limit: string;
}

interface IProductPlain extends IPlainInfo {
  description: string;
  historyRetentionNumberOfDays: number;
  lockedFlag: boolean;
  enabledForCustomerLimit: boolean;
  overridesProductId?: number;
  statementCycleParameter: number;
}

export interface IProductData extends IProductPlainData {
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
  repayment_clearing_nr_days?: number;
  direct_debit_submission_nr_days?: number;
}

export interface IProductsDataResp {
  products: Array<IProductData>;
}

export interface IProductDataResp {
  product: IProductData;
}

export interface IProduct extends IProductPlain {
  institutionId: string | number;
  status: string | number;
  productType: string | number;
  scheme: string | number;
  currencyCode: string | number;
  statementCycleType: string;
}

/**
 * General product details interfaces
 */

export interface IProductGeneralDetails extends IProductPlain {
  institutionId: ISelectValue;
  status: ISelectValue;
  productType: ISelectValue;
  scheme: ISelectValue;
  currencyCode: ISelectValue;
  cardFormFactor: ISelectValue;
  numberOfDaysCardExpires: number;
  statementCycleTypeId: ISelectValue;
}

/**
 * Products filter interfaces
 */

export interface IProductsFilter {
  activeStatusFlag?: boolean;
  institutionId?: ISelectValue;
  productType?: Array<ISelectValue>;
}

export interface IProductsFilterToSend {
  status: string;
  institution_id: number | string;
  product_type: Array<number | string>;
}

/**
 * Revolving credit product type interfaces
 */

export interface IRevCreditProductData {
  product_id: number;
  limit_sharing_allowed_flag: string;
  minimum_repayment_amount: number;
  minimum_repayment_rate: number;
  repayment_grace_number_of_days: number;
}

export interface IRevCreditProductDataResp {
  product: IRevCreditProductData;
}

export interface IRevCreditProduct {
  productId: number;
  limitSharingAllowedFlag: boolean;
  minimumRepaymentAmount: number;
  minimumRepaymentRate: number;
  repaymentGraceNumberOfDays: number;
}

/**
 * Loan product type interfaces
 */

export interface ILoanProductData {
  product_id: number;
  def_num_of_installments: number;
  def_num_of_intrst_free_instlmts: number;
  def_num_deferred_instlmts: number;
  interest_distribution_type: number | string;
  allow_overpayment: number | string;
}

export interface ILoanProductDataResp {
  product: ILoanProductData;
}

export interface ILoanProduct {
  productId: number;
  defNumOfInstallments: number;
  defNumInterestFreeInstlmts: number;
  defNumDeferredInstlmts: number;
  interestDistributionType: ISelectValue;
  allowOverpayment: number | string;
}

/**
 * Prepaid product type interfaces
 */

export interface IPrepaidProductData {
  product_id: number;
  dormant_after_number_of_days: number;
  breakages_allowed: string;
  reload_allowed: string;
}

export interface IPrepaidProductDataResp {
  product: IPrepaidProductData;
}

export interface IPrepaidProduct {
  productId: number;
  dormantAfterNumberOfDays: number;
  breakagesAllowed: boolean;
  reloadAllowed: boolean;
}

/**
 * Debit product type interfaces
 */

export interface IDebitProductData {
  product_id: number;
  apr_overdraft: number;
  overdraft_allowed: string;
}

export interface IDebitProductDataResp {
  product: IDebitProductData;
}

export interface IDebitProduct {
  productId: number;
  aprOverdraft: number;
  overdraftAllowed: boolean;
}

/**
 * Savings product type interfaces
 */

export interface ISavingsProductData {
  product_id: number;
  savings_type: number | string;
  apr: number;
  minimum_deposit_allowed: number;
  maximum_deposit_allowed: number;
  maximum_monthly_deposit: number;
}

export interface ISavingsProductDataResp {
  product: ISavingsProductData;
}

export interface ISavingsProduct {
  productId: number;
  savingsType: ISelectValue;
  apr: number;
  minimumDepositAllowed: number;
  maximumDepositAllowed: number;
  maximumMonthlyDeposit: number;
}

/**
 * Product details interfaces
 */

export type IProductDetailsDataResp =
  | IDebitProductDataResp
  | ILoanProductDataResp
  | IPrepaidProductDataResp
  | IRevCreditProductDataResp
  | ISavingsProductDataResp;

export type IProductDetailsResp =
  | IDebitProductData
  | ILoanProductData
  | IPrepaidProductData
  | IRevCreditProductData
  | ISavingsProductData;

export type IProductDetails =
  | IDebitProduct
  | ILoanProduct
  | IPrepaidProduct
  | IRevCreditProduct
  | ISavingsProduct;

/**
 * New product interfaces
 */

export type INewProduct = IProductDetails & IProductGeneralDetails;
export type INewProductToSend = IProductDetailsResp & IProductData;

/**
 * Institution products interfaces
 */

export interface IInstProductData extends IPlainInfo {
  product_type: string;
  def_num_of_intrst_free_instlmts: number;
  def_num_of_installments: number;
  def_num_deferred_instlmts: number;
}

export interface IInstProduct extends IPlainInfo {
  productType: string;
  defNumInterestFreeInstlmts: number;
  defNumOfInstallments: number;
  defNumDeferredInstlmts: number;
}

export interface IInstProductsData {
  institution_products: Array<IInstProductData>;
}

/**
 * Products state interface
 */
export interface IProductsState {
  currentProduct: IProductData;
  currentProductDetails: IProductDetailsResp;
  institutionProducts: ImmutableArray<IInstProductData>;
  products: ImmutableArray<IProductData>;
}
