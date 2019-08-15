import { adminEventDataElemsPathNames } from 'consts';

import { apiClient } from 'services';

// import {
//   adminEventDataElemsData,
//   adminEventDataElemsFilteredData
// } from './mock';

import { AdminEventDataElemsFilterParamsPrepared } from './types';

// import { throttleUtil } from 'utils';

export const getAdminEventDataElems = () =>
  // throttleUtil.getDataAfter(adminEventDataElemsData, 500);
  apiClient.post(adminEventDataElemsPathNames.GET);

export const filterAdminEventDataElems = (data: AdminEventDataElemsFilterParamsPrepared) =>
  // throttleUtil.getDataAfter(adminEventDataElemsFilteredData, 500);
  apiClient.post(adminEventDataElemsPathNames.GET, { data });
