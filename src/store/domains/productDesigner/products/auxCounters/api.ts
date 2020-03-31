import { apiClientService } from 'services';
// import { productData } from './mock';
// import { throttleUtil } from 'utils';
import { IProductAuxCountersData } from './types';

/**
 * Update product aux counters API
 */
export const updateProductAuxCounters = (data: Partial<IProductAuxCountersData>) =>
  // throttleUtil.getDataAfter(productData, 500);
  apiClientService.post('ui/product_designer/products/update_aux_counters', { data });
