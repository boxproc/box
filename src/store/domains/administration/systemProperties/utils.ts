import { yesNoTypesConst } from 'consts';

import {
  AdminSysPropFilterParams,
  AdminSysPropFilterParamsPrepared,
  EditableAdminSysProp,
  EditableAdminSysPropPrepared,
} from './types';

export const prepareEditableAdminSysPropItemValues =
  (propValues: EditableAdminSysProp): EditableAdminSysPropPrepared => {
    const { id, currentValue, lockedFlag } = propValues;

    return {
      property_name: id,
      current_value: currentValue,
      locked_flag: lockedFlag ? yesNoTypesConst.YES : yesNoTypesConst.NO,
    };
  };

export const prepareAdminSysPropFilterParams =
  (propValues: AdminSysPropFilterParams): AdminSysPropFilterParamsPrepared => {
    if (!propValues) {
      return null;
    }

    return {
      property_name: propValues.id,
    };
  };
