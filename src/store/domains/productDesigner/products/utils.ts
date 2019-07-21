import {
  ProductFilterParams,
  ProductFilterParamsPrepared,
  ProductItem,
  ProductItemDetailsResp,
  ProductItemResp,
} from './types';

import {
  productTypesOptions,
  schemeTypesOptions,
  statusTypes,
  statusTypesOptions,
  yesNoTypes,
} from 'consts';

import { camelizeUtil } from 'utils';

export const prepareProductValues =
  (values: Partial<ProductItem>): Partial<ProductItemResp> =>
    camelizeUtil.camelize(values, 'decamelize');

export const prepareProductFiltersParams =
  (params: Partial<ProductFilterParams>): Partial<ProductFilterParamsPrepared> => {
    const preparedParams = {};
    const { activeStatusFlag, institutionId, productType } = params;

    preparedParams['status'] = activeStatusFlag ? statusTypes.ACTIVE : null;
    preparedParams['institution_id'] = institutionId && institutionId.map(id => id.value);
    preparedParams['product_type'] = productType && productType.map(type => type.value);

    return preparedParams;
  };

export const preparedGeneralProductValues = (product: ProductItemDetailsResp) => {
  return {
    ...camelizeUtil.camelize(product, 'camelcase'),
      productType: productTypesOptions.find(el => el.value === product.product_type),
      status: statusTypesOptions.find(el => el.value === product.status),
      scheme: schemeTypesOptions.find(el => el.value === product.scheme),
      lockedFlag: product.locked_flag === yesNoTypes.YES ? true : false,
  };
};
