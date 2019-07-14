// import { apiClient } from 'services';

import {
  ProductItemsData, ProductOptionsData,
} from './mock';

import { throttleUtil } from 'utils';

export const getProducts = () =>
  throttleUtil.getDataAfter(ProductItemsData, 500);

export const getProductOptions = () =>
  throttleUtil.getDataAfter(ProductOptionsData, 500);
