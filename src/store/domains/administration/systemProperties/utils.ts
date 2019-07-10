import decamelize from 'decamelize';

import { AdminSysPropsItem, AdminSysPropsItemResp } from './types';

import { yesNoTypes } from 'consts';

export const prepareAdminSysItemValues =
  (propValues: Partial<AdminSysPropsItem>): Partial<AdminSysPropsItemResp> => {
    const { lockedFlag } = propValues;
    const preparedProps = {};

    for (const prop in propValues) {
      if (prop) {
        preparedProps[decamelize(prop, '_')] = propValues[prop];
      }
    }

    return {
      ...preparedProps,
      locked_flag: lockedFlag === yesNoTypes.NO || !lockedFlag ? yesNoTypes.NO : yesNoTypes.YES,
    };
  };
