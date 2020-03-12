import { apiClient } from 'services';

// import { productData } from './mock';

// import { throttleUtil } from 'utils';

import { ProductAuxCountersItem } from './types';

export const updateProductAuxCounters = (data: Partial<ProductAuxCountersItem>) =>
  // throttleUtil.getDataAfter(productData, 500);
  apiClient.post('ui/product_designer/products/update_aux_counters', { data });
