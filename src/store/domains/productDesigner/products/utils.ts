import {
  ProductFilterParams,
  ProductFilterParamsPrepared,
  ProductItem,
  ProductItemResp,
} from './types';

import { yesNoTypes } from 'consts';

import { camelizeFieldsUtil } from 'utils';

export const prepareProductValues =
  (values: Partial<ProductItem>): Partial<ProductItemResp> =>
    camelizeFieldsUtil.camelizeFields(values, 'decamelize');

export const prepareProductFiltersParams =
  (params: Partial<ProductFilterParams>): Partial<ProductFilterParamsPrepared> => {
    const preparedParams = {};
    const { lockedFlag, institutionId } = params;

    preparedParams['locked_flag'] =
      (lockedFlag === yesNoTypes.NO || !lockedFlag) ? null : yesNoTypes.YES;

    preparedParams['institution_id'] = institutionId && institutionId.map(id => id.value);

    return preparedParams;
  };
