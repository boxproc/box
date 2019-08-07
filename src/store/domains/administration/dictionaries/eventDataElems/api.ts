import { apiClient } from 'services';

// import {
//   adminEventDataElemsData,
//   adminEventDataElemsFilteredData
// } from './mock';

import { AdminEventDataElemsFilterParamsPrepared } from './types';

// import { throttleUtil } from 'utils';

export const getAdminEventDataElems = () =>
  // throttleUtil.getDataAfter(adminEventDataElemsData, 500);
  apiClient.post('/ui/administration/dictionaries/event_data_elements/get');

export const filterAdminEventDataElems = (data: AdminEventDataElemsFilterParamsPrepared) =>
  // throttleUtil.getDataAfter(adminEventDataElemsData, 500);
  apiClient.post('/ui/administration/dictionaries/event_data_elements/get', { data });
