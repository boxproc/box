import { camelizeFieldsUtil } from 'utils';

export const prepareAdminSchedulerJobValues =
  (values: any): any => {
    return {
      ...camelizeFieldsUtil.camelizeFields(values, 'decamelize'),
      institution_id: values.institutionId.value,
    };
  };
