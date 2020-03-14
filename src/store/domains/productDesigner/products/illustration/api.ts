import { apiClientService } from 'services';

import { LoanProductIllustratePrepared, RevolvingCreditProductIllustratePrepared } from './types';

export const illustrateLoanProduct = (data: Partial<LoanProductIllustratePrepared>) =>
  apiClientService.post('ui/product_designer/products/illustration/loan', { data });

export const illustrateRevolvingCreditProduct =
  (data: Partial<RevolvingCreditProductIllustratePrepared>) =>
    apiClientService.post('ui/product_designer/products/illustration/revolving_credit', { data });
