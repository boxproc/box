import { ImmutableArray } from 'seamless-immutable';

export interface ProductItemResp {
  id: string | number;
  institution_id: string | number;
  name: string;
  description: string;
  status: string;
  product_type: string;
  scheme: string;
  currency_code: string;
  history_retention_number_of_days: number;
  default_statement_cycle_id: number;
  locked_flag: string;
}

export interface ProductItem {
  id: string | number;
  institutionId: string | number;
  name: string;
  description: string;
  status: string;
  productType: string;
  scheme: string;
  currencyCode: string;
  historyRetentionNumberOfDays: number;
  defaultStatementCycleId: number;
  lockedFlag: string;
}

export interface ProductsDataResp {
  products: Array<ProductItemResp>;
}

export interface ProductsData {
  products: Array<ProductItem>;
}

export interface ProductDataResp {
  products: ProductItemResp;
}

export interface ProductsState {
  products: ImmutableArray<ProductItemResp>;
  filterProducts: ProductItem;
}
