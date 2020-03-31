import { IProductAprsFeesRewardsState } from './products/aprsFeesRewards';
import { IProductAuxCountersState } from './products/auxCounters';
import { IProductIllustrationState } from './products/illustration';
import { ProductsState } from './products/products';
import { RepaymentHierarchyState } from './products/repaymentHierarchy';
import { ProductRulesState } from './products/rules';
import { ProductServicesState } from './products/services';

export interface IProductDesignerState {
  products: ProductsState;
  productRules: ProductRulesState;
  productAuxCounters: IProductAuxCountersState;
  productServices: ProductServicesState;
  productIllustration: IProductIllustrationState;
  productAprsFeesRewards: IProductAprsFeesRewardsState;
  repaymentHierarchy: RepaymentHierarchyState;
}
