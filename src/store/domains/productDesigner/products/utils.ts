import {
  ProductFilterParams,
  ProductFilterParamsPrepared,
  ProductItem,
  ProductItemResp,
} from './types';

import { statusTypes } from 'consts';

import { camelizeFieldsUtil } from 'utils';

export const prepareProductValues =
  (values: Partial<ProductItem>): Partial<ProductItemResp> =>
    camelizeFieldsUtil.camelizeFields(values, 'decamelize');

export const prepareProductFiltersParams =
  (params: Partial<ProductFilterParams>): Partial<ProductFilterParamsPrepared> => {
    const preparedParams = {};
    const { activeStatusFlag, institutionId, productType } = params;

    preparedParams['status'] = activeStatusFlag ? statusTypes.ACTIVE : null;
    preparedParams['institution_id'] = institutionId && institutionId.map(id => id.value);
    preparedParams['product_type'] = productType && productType.map(type => type.value);

    return preparedParams;
  };
