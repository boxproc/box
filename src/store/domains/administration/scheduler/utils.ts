import { AdminSchedulerItem, AdminSchedulerItemResp } from './types';

import { yesNoTypes } from 'consts';

import { camelizeFieldsUtil } from 'utils';

export const prepareAdminSysItemValues =
  (propValues: Partial<AdminSchedulerItem>): Partial<AdminSchedulerItemResp> => {
    return camelizeFieldsUtil.camelizeFields(propValues, 'decamelize');
  };

export const prepareAdminSysItemValuesWithLockedFlag =
  (propValues: Partial<AdminSchedulerItem>): Partial<AdminSchedulerItemResp> => {
    const { name } = propValues;
    const preparedProps = {};

    preparedProps['locked_flag'] =
      (name === yesNoTypes.NO || !name) ? yesNoTypes.NO : yesNoTypes.YES;

    return {
      ...camelizeFieldsUtil.camelizeFields(propValues, 'decamelize'),
      ...preparedProps,
    };
  };