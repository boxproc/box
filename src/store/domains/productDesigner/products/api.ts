// import { apiClient } from 'services';

import {
  ProductItemsData,
  ProductItemsDataFiltered,
} from './mock';

import { throttleUtil } from 'utils';
import { ProductFilterParamsPrepared } from './types';

export const getProducts = () =>
  throttleUtil.getDataAfter(ProductItemsData, 500);
  // apiClient.post('/ui/product_designer/products/get');

export const deleteProduct = (id: number) =>
  throttleUtil.getDataAfter({id}, 500);

export const filterProducts = (data: ProductFilterParamsPrepared) =>
  throttleUtil.getDataAfter(ProductItemsDataFiltered, 500);
  // apiClient.post('/ui/administration/system_properties/get', {data});
