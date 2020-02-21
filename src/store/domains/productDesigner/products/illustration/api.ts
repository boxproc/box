import { apiUrls } from 'consts';
import { apiClient } from 'services';

import { LoanProductIllustratePrepared, RevolvingCreditProductIllustratePrepared } from './types';

export const illustrateLoanProduct = (data: Partial<LoanProductIllustratePrepared>) =>
  apiClient.post(apiUrls.products.ILLUSTRATE_LOAN_PRODUCT, { data });

export const illustrateRevolvingCreditProduct =
  (data: Partial<RevolvingCreditProductIllustratePrepared>) =>
    apiClient.post(apiUrls.products.ILLUSTRATE_REV_CREDIT_PRODUCT, { data });
