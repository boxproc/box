import { apiClient } from 'services';

// import {
//   adminEventsData,
// } from './mock';

// import { throttleUtil } from 'utils';

export const getAdminEvents = () =>
  // throttleUtil.getDataAfter(adminEventsData, 500);
  apiClient.post('/ui/administration/dictionaries/events/get');
