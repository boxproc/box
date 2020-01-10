import { ProductAprsFeesRewardsState } from './products/aprsFeesRewards';
import { ProductAuxCountersState } from './products/auxCounters';
import { ProductGeneralLedgerState } from './products/generalLedger';
import { ProductIllustrationState } from './products/illustration';
import { ProductsState } from './products/products';
import { ProductRulesState } from './products/rules';
import { ProductServicesState } from './products/services';

export interface ProductDesignerState {
  products: ProductsState;
  productRules: ProductRulesState;
  productAuxCounters: ProductAuxCountersState;
  productServices: ProductServicesState;
  productGeneralLedger: ProductGeneralLedgerState;
  productIllustration: ProductIllustrationState;
  productAprsFeesRewards: ProductAprsFeesRewardsState;
}
