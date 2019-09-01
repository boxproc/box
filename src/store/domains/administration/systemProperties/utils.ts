import {
  AdminSysPropFilterParams,
  AdminSysPropFilterParamsPrepared,
  EditableAdminSysProp,
  EditableAdminSysPropPrepared,
} from './types';

import { yesNoTypes } from 'consts';

export const prepareEditableAdminSysPropItemValues =
  (propValues: EditableAdminSysProp): EditableAdminSysPropPrepared => {
    const { id, currentValue, lockedFlag } = propValues;
    console.log('---propValues', propValues);

    return {
      property_name: id,
      current_value: currentValue,
      locked_flag: lockedFlag ? yesNoTypes.YES : yesNoTypes.NO,
    };
  };

export const prepareAdminSysPropFilterParams =
  (propValues: AdminSysPropFilterParams): AdminSysPropFilterParamsPrepared => {
    return {
      property_name: propValues.id,
    };
  };
