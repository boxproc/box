import {
  AdminSysPropFilterParams,
  AdminSysPropFilterParamsPrepared,
  EditableAdminSysProp,
  EditableAdminSysPropPrepared,
} from './types';

import { yesNoTypes } from 'consts';

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
  (propValues: AdminSysPropFilterParams): AdminSysPropFilterParamsPrepared => {
    return {
      property_name: propValues.propertyName,
    };
  };
