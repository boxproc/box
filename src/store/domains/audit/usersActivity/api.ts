import { IUserId, IUsersActivityFilterToSend } from './types';

import { apiClientService } from 'services';

export const getUsersActivityUsers = (institutionId: string | number) =>
  apiClientService.post('ui/audit/users_activity/get', {
    data: { institution_id: institutionId },
  });

export const filterUsersActivityById = (data: IUserId) =>
  // throttleUtil.getDataAfter(ledgerCustomersFilteredItems, 500);
  apiClientService.post('ui/audit/users_activity/get', { data });

export const filterUsersActivity = (data: Partial<IUsersActivityFilterToSend>) =>
  apiClientService.post('ui/audit/users_activity/get', { data });
