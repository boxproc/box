import { uiSessionsStatusOptions } from 'consts';
import { AuditUiSessionsFilter, AuditUiSessionsItem, AuditUiSessionsItemResp } from './types';

import { stringsUtil } from 'utils';

export const preparedDataToRender = (data: AuditUiSessionsItemResp): AuditUiSessionsItem => {
  if (!data) {
    return null;
  }

  const {
    user_id,
    first_name,
    last_name,
    last_datetime,
    ip_address,
    user_agent,
    status,
  } = data;

  const uiSessionStatus = uiSessionsStatusOptions.find(el => el.value === status);

  return {
    userId: user_id,
    firstName: first_name,
    lastName: last_name,
    lastDatetime: last_datetime,
    ipAddress: ip_address,
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
      ? institutionId.map(id => stringsUtil.toNumber(id.value))
      : null,
  };
};
