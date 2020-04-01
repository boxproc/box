import { IProductAprsFeesRewardsState } from './products/aprsFeesRewards';
import { IProductIllustrationState } from './products/illustration';
import { IProductsState } from './products/products';
import { IRepaymentHierarchyState } from './products/repaymentHierarchy';
import { IProductRulesState } from './products/rules';
import { IProductServicesState } from './products/services';

export interface IProductDesignerState {
  products: IProductsState;
  productRules: IProductRulesState;
  productServices: IProductServicesState;
  productIllustration: IProductIllustrationState;
  productAprsFeesRewards: IProductAprsFeesRewardsState;
  repaymentHierarchy: IRepaymentHierarchyState;
}
