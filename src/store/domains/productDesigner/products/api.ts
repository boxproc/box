import { apiClient } from 'services';

import {
  debitItemData,
  // productItemsData,
  // revolvingCreditItemData,
  // loanItemData,
  // prepaidItemData,
  productItemsDataFiltered,
  // savingsItemData,
} from './mock';

import { throttleUtil } from 'utils';
import { ProductFilterParamsPrepared } from './types';

export const getProducts = () =>
  // throttleUtil.getDataAfter(productItemsData, 500);
  apiClient.post('/ui/product_designer/products/get');

export const deleteProduct = (id: number) =>
  throttleUtil.getDataAfter({id}, 500);

export const filterProducts = (data: ProductFilterParamsPrepared) =>
  throttleUtil.getDataAfter(productItemsDataFiltered, 500);

export const getProduct = (id: number) =>
  throttleUtil.getDataAfter(debitItemData, 500);
