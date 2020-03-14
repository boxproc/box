import { yesNoConst } from 'consts';

import {
  AdminSysPropFilter,
  AdminSysPropFilterPrepared,
  EditableAdminSysProp,
  EditableAdminSysPropPrepared,
} from './types';

export const prepareEditableAdminSysPropItemValues =
  (propValues: EditableAdminSysProp): EditableAdminSysPropPrepared => {
    const { id, currentValue, lockedFlag } = propValues;

    return {
      property_name: id,
      current_value: currentValue,
      locked_flag: lockedFlag ? yesNoConst.YES : yesNoConst.NO,
    };
  };

export const prepareAdminSysPropFilter =
  (propValues: AdminSysPropFilter): AdminSysPropFilterPrepared => {
    if (!propValues) {
      return null;
    }

    const propName = propValues.id;

    return {
      property_name: propName ? propName : null,
    };
  };
