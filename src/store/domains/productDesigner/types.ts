import { ProductAuxCountersState } from './products/auxCounters';
import { ProductsState } from './products/products';
import { ProductRulesState } from './products/rules';
import { ProductServicesState } from './products/services';

export interface ProductDesignerState {
  products: ProductsState;
  productRules: ProductRulesState;
  productAuxCounters: ProductAuxCountersState;
  productServices: ProductServicesState;
}
