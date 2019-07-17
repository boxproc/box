import { apiClient } from 'services';

// import {
//   ProductItemsData,
// } from './mock';

// import { throttleUtil } from 'utils';

export const getProducts = () =>
  // throttleUtil.getDataAfter(ProductItemsData, 500);
  apiClient.post('/ui/product_designer/products/get');
