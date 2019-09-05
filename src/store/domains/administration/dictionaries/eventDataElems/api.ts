import { adminEventDataElemsPathNames } from 'consts';

import { apiClient } from 'services';

import { AdminEventDataElemsFilterParamsPrepared } from './types';

export const filterAdminEventDataElems = (data: AdminEventDataElemsFilterParamsPrepared) =>
  apiClient.post(adminEventDataElemsPathNames.GET, { data });
