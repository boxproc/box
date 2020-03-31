import { apiClientService } from 'services';
import { ILoanIllustrationReqToSend, IRevCreditIllustrationReqToSend } from './types';

/**
 * Illustrate loan product API
 */
export const illustrateLoan = (data: ILoanIllustrationReqToSend) =>
  apiClientService.post('ui/product_designer/products/illustration/loan', { data });

/**
 * Illustrate revolving credit product API
 */
export const illustrateRevCredit = (data: IRevCreditIllustrationReqToSend) =>
  apiClientService.post('ui/product_designer/products/illustration/revolving_credit', { data });
