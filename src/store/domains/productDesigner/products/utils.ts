import { ProductItem, ProductItemResp } from './types';

import { yesNoTypes } from 'consts';

import { camelizeFieldsUtil } from 'utils';

export const prepareProductValues =
  (propValues: Partial<ProductItem>): Partial<ProductItemResp> => {
    const { lockedFlag } = propValues;
    const preparedProps = {};

    preparedProps['locked_flag'] =
      (lockedFlag === yesNoTypes.NO || !lockedFlag) ? yesNoTypes.NO : yesNoTypes.YES;

    return {
      ...camelizeFieldsUtil.camelizeFields(propValues, 'decamelize'),
      ...preparedProps,
    };
  };
