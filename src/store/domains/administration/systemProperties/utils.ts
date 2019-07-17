import { AdminSysPropsItem, AdminSysPropsItemResp } from './types';

import { yesNoTypes } from 'consts';

import { camelizeFieldsUtil } from 'utils';

export const prepareAdminSysItemValues =
  (propValues: Partial<AdminSysPropsItem>): Partial<AdminSysPropsItemResp> => {
    return camelizeFieldsUtil.camelizeFields(propValues, 'decamelize');
  };

export const prepareAdminSysItemValuesWithLockedFlag =
  (propValues: Partial<AdminSysPropsItem>): Partial<AdminSysPropsItemResp> => {
    const { lockedFlag } = propValues;
    const preparedProps = {};

    preparedProps['locked_flag'] =
      (lockedFlag === yesNoTypes.NO || !lockedFlag) ? yesNoTypes.NO : yesNoTypes.YES;

    return {
      ...camelizeFieldsUtil.camelizeFields(propValues, 'decamelize'),
      ...preparedProps,
    };
  };
