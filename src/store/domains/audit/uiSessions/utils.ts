import { uiSessionsStatusOptions } from 'consts';
import { IUiSession, IUiSessionData, IUiSessionsFilter } from './types';

import { stringsUtil } from 'utils';

export const prepareDataToRender = (data: IUiSessionData): IUiSession => {
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
    username,
    institution_id,
    institution_name,
  } = data;

  const uiSessionStatus = uiSessionsStatusOptions.find(el => el.value === status);

  return {
    id: user_id,
    firstName: first_name,
    lastName: last_name,
    lastDatetime: last_datetime,
    ipAddress: ip_address,
    userAgent: user_agent,
    status: uiSessionStatus && uiSessionStatus.label,
    username,
    institutionId: institution_id,
    institutionName: institution_name,
  };
};

export const prepareFilterToSend = (data: Partial<IUiSessionsFilter>) => {
  if (!data) {
    return null;
  }

  const { institutionId } = data;

  return {
    institution_id: institutionId && institutionId.length
      ? institutionId.map(id => stringsUtil.toNumber(id.value))
      : null,
  };
};
