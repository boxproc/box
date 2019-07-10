import { AdminSysPropsItem, AdminSysPropsItemResp } from './types';

import { yesNoTypes } from 'consts';

import { camelizeFieldsUtil } from 'utils';

export const prepareAdminSysItemValues =
  (propValues: Partial<AdminSysPropsItem>): Partial<AdminSysPropsItemResp> => {
    const { lockedFlag } = propValues;
    const preparedProps = {};

    if (lockedFlag) {
      preparedProps['locked_flag'] =
        (lockedFlag === yesNoTypes.NO || !lockedFlag) ? yesNoTypes.NO : yesNoTypes.YES;
    }

    return {
      ...camelizeFieldsUtil.camelizeFields(propValues, 'decamelize'),
      ...preparedProps,
    };
  };
