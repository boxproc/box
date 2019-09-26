import { constsPathNames } from 'consts';

import { apiClient } from 'services';

// import { throttleUtil } from 'utils';

export const getInstitutions = () =>
  // throttleUtil.getDataAfter(institutionsData, 500);
  apiClient.post(constsPathNames.GET_INSTITUTIONS);
