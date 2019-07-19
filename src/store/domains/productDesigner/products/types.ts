import { ImmutableArray } from 'seamless-immutable';
import { ParsedSelectValues } from 'types';

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

export interface ProductId {
  id: number | string;
}

export interface ProductsDataResp {
  products: Array<ProductItemResp>;
}

export interface ProductsData {
  products: Array<ProductItem>;
}

export interface ProductsState {
  products: ImmutableArray<ProductItemResp>;
  filterProductsParams: ProductFilterParamsPrepared;
}
