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
  currency_code: string;
  history_retention_number_of_day: string;
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
  currencyCode: string;
  historyRetentionNumberOfDay: string;
  defaultStatementCycleId: string;
  lockedFlag: string;
}

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

export interface ProductsState {
  products: ImmutableArray<ProductItemResp>;
  filterProductsParams: ProductFilterParamsPrepared;
}
