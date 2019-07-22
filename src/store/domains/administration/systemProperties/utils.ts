import {
  AdminSysPropFilterParams,
  AdminSysPropFilterParamsPrepared,
  EditableAdminSysProp,
  EditableAdminSysPropPrepared,
} from './types';

import { yesNoTypes } from 'consts';

import { camelizeUtil } from 'utils';

export const prepareEditableAdminSysPropItemValues =
  (propValues: EditableAdminSysProp): EditableAdminSysPropPrepared => {
    const { propertyName, currentValue, lockedFlag } = propValues;

    return {
      property_name: propertyName,
      current_value: currentValue,
      locked_flag: (lockedFlag === yesNoTypes.NO || !lockedFlag) ? yesNoTypes.NO : yesNoTypes.YES,
    };
  };

export const prepareAdminSysPropFilterParams =
  (propValues: Partial<AdminSysPropFilterParams>): Partial<AdminSysPropFilterParamsPrepared> =>
    camelizeUtil.camelize(propValues, 'decamelize');
