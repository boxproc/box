import { ImmutableArray } from 'seamless-immutable';

export interface ProductItemResp {
  id: number;
  institution_id: number;
  name: string;
  description: string;
  status: string;
  product_type: string;
  scheme: string;
  currency_code: string;
  history_retention_number_of_days: string;
  default_statement_cycle_id: string;
  locked_flag: string;
}

export interface ProductItem {
  id: number;
  institutionId: number;
  name: string;
  description: string;
  status: string;
  productType: string;
  scheme: string;
  currencyCode: string;
  historyRetentionNumberOfDays: string;
  defaultStatementCycleId: string;
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
