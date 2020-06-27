import { apiClientService } from 'services';
import { IProductRepaymentData } from './types';

/**
 * Update product repayment API
 */
export const updateProductRepayment = (data: Partial<IProductRepaymentData>) =>
  apiClientService.post('', { data });
