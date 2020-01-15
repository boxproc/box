import { productsURLs } from 'consts';

import { apiClient } from 'services';

import { LoanProductIllustratePrepared, RevolvingCreditProductIllustratePrepared } from './types';

export const illustrateLoanProduct = (data: Partial<LoanProductIllustratePrepared>) =>
  apiClient.post(productsURLs.ILLUSTRATE_LOAN_PRODUCT, { data });

export const illustrateRevolvingCreditProduct =
  (data: Partial<RevolvingCreditProductIllustratePrepared>) =>
    apiClient.post(productsURLs.ILLUSTRATE_REV_CREDIT_PRODUCT, { data });
