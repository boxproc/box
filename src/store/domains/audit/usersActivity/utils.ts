import { IUsersActivityFilter, IUsersActivityItem, IUsersActivityItemData } from './types';

export const prepareDataToRender = (data: IUsersActivityItemData): IUsersActivityItem => {
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

export const prepareFilterToSend = (data: Partial<IUsersActivityFilter>) => {
  if (!data) {
    return null;
  }

  const { institutionId, username, usersActivityDateTimeFrom, usersActivityDateTimeTo } = data;

  return {
    institution_id: institutionId ? institutionId.value : null,
    username: username ? username.value : null,
    datetime_from: usersActivityDateTimeFrom ? usersActivityDateTimeFrom : null,
    datetime_to: usersActivityDateTimeTo ? usersActivityDateTimeTo : null,
  };
};
