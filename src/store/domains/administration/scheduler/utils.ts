import { camelizeUtil } from 'utils';

export const prepareAdminSchedulerJobValues =
  (values: any): any => {
    return {
      ...camelizeUtil.camelize(values, 'decamelize'),
      institution_id: values.institutionId.value,
      executable_type: values.executableType.value,
      status: values.status.value,
    };
  };
