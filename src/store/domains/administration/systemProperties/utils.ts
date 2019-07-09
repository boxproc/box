import { AdminSysPropsItem, AdminSysPropsItemResp } from './types';

import { yesNoTypes } from 'consts';

export const prepareAdminSysItemValues =
  (propValues: AdminSysPropsItem): AdminSysPropsItemResp => {
    const { propertyName, currentValue, previousValue, lastDatetime, lockedFlag } = propValues;

    return ({
      property_name: propertyName,
      current_value: currentValue,
      previous_value: previousValue,
      last_datetime: lastDatetime,
      locked_flag: lockedFlag ? yesNoTypes.YES : yesNoTypes.NO,
    });
  };
