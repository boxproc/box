import { AuditUserActivityFilter, AuditUserActivityItemResp } from './types';

export const preparedValuesToRender = (values: Partial<AuditUserActivityItemResp>) => {
  if (!values) {
    return null;
  }

  return {
    id: values.id,
    eventDatetime: values.event_datetime,
    description: values.description,
    apiName: values.api_name,
    userId: values.user_id,
    username: values.username,
    institutionId: values.institution_id,
    firstName: values.first_name,
    lastName: values.last_name,
  };
};

export const preparedFilterToSend = (params: Partial<AuditUserActivityFilter>) => {
  if (!params) {
    return null;
  }

  const { institutionId, username, datetimeFrom, datetimeTo } = params;

  return {
    institution_id: institutionId ? institutionId.value : null,
    username: username ? username.value : null,
    datetime_from: datetimeFrom ? datetimeFrom : null,
    datetime_to: datetimeTo ? datetimeTo : null,
  };
};
