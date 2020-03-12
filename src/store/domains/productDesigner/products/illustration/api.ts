import { apiClient } from 'services';

import { LoanProductIllustratePrepared, RevolvingCreditProductIllustratePrepared } from './types';

export const illustrateLoanProduct = (data: Partial<LoanProductIllustratePrepared>) =>
  apiClient.post('ui/product_designer/products/illustration/loan', { data });

export const illustrateRevolvingCreditProduct =
  (data: Partial<RevolvingCreditProductIllustratePrepared>) =>
    apiClient.post('ui/product_designer/products/illustration/revolving_credit', { data });
