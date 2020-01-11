import { AuditUserActivityFilter, AuditUserActivityItem, AuditUserActivityItemResp } from './types';

export const preparedDataToRender = (data: AuditUserActivityItemResp): AuditUserActivityItem => {
  if (!data) {
    return null;
  }

  const {
    id,
    first_name,
    last_name,
    event_datetime,
    api_name,
    description,
    user_id,
  } = data;

  return {
    id,
    username: `${first_name} ${last_name}`,
    userId: user_id,
    eventDatetime: event_datetime,
    apiName: api_name,
    description,
  };
};

export const preparedFilterToSend = (params: Partial<AuditUserActivityFilter>) => {
  if (!params) {
    return null;
  }

  const { institutionId, username, userActivityDateTimeFrom, userActivityDateTimeTo } = params;

  return {
    institution_id: institutionId ? institutionId.value : null,
    username: username ? username.value : null,
    datetime_from: userActivityDateTimeFrom ? userActivityDateTimeFrom : null,
    datetime_to: userActivityDateTimeTo ? userActivityDateTimeTo : null,
  };
};
