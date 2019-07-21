import { AdminSchedulerEditableItem, AdminSchedulerEditableItemPrepared } from './types';

import { camelizeFieldsUtil } from 'utils';

export const prepareAdminSchedulerJobValues =
  (values: AdminSchedulerEditableItem): AdminSchedulerEditableItemPrepared => {
    return {
      ...camelizeFieldsUtil.camelizeFields(values, 'decamelize'),
      institution_id: values.institutionId.value,
      executable_type: values.executableType.value,
      status: values.status.value,
    };
  };
