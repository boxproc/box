import { productsPathNames } from 'consts';

import { apiClient } from 'services';

import { LoanProductIllustratePrepared, RevolvingCreditProductIllustratePrepared } from './types';

export const illustrateLoanProduct = (data: Partial<LoanProductIllustratePrepared>) =>
  apiClient.post(productsPathNames.ILLUSTRATE_LOAN_PRODUCT, { data });

export const illustrateRevolvingCreditProduct =
  (data: Partial<RevolvingCreditProductIllustratePrepared>) =>
    apiClient.post(productsPathNames.ILLUSTRATE_REVOLVING_CREDIT_PRODUCT, { data });
