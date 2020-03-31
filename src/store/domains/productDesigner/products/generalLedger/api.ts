import { apiClientService } from 'services';
import { IProductGLData } from './types';

/**
 * Update general ledger API
 */
export const updateProductGL = (data: Partial<IProductGLData>) =>
  apiClientService.post('ui/product_designer/products/update_general_ledger', { data });
