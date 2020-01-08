import { productsPathNames } from 'consts';

import { apiClient } from 'services';

// import { productData } from './mock';

// import { throttleUtil } from 'utils';

import { ProductAuxCountersItem } from './types';

export const updateProductAuxCounters = (data: Partial<ProductAuxCountersItem>) =>
  // throttleUtil.getDataAfter(productData, 500);
  apiClient.post(productsPathNames.UPDATE_AUX_COUNTERS, { data });