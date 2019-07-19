import { camelizeFieldsUtil } from 'utils';

export const prepareAdminSysItemValues =
  (propValues: any): any => {
    return camelizeFieldsUtil.camelizeFields(propValues, 'decamelize');
  };
