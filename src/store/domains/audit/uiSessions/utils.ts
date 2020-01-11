import { uiSessionsStatusOptions } from 'consts';
import { AuditUiSessionsFilter, AuditUiSessionsItem, AuditUiSessionsItemResp } from './types';

export const preparedDataToRender = (data: AuditUiSessionsItemResp): AuditUiSessionsItem => {
  if (!data) {
    return null;
  }

  const {
    user_id,
    first_name,
    last_name,
    last_datetime,
    api_address,
    user_agent,
    status,
  } = data;

  const uiSessionStatus = uiSessionsStatusOptions.find(el => el.value === status);

  return {
    userId: user_id,
    firstName: first_name,
    lastName: last_name,
    lastDatetime: last_datetime,
    apiAddress: api_address,
    userAgent: user_agent,
    status: uiSessionStatus && uiSessionStatus.label,
  };
};

export const preparedFilterToSend = (params: Partial<AuditUiSessionsFilter>) => {
  if (!params) {
    return null;
  }

  const { institutionId } = params;

  return {
    institution_id: institutionId && institutionId.length
      ? institutionId.map(id => Number(id.value))
      : null,
  };
};
