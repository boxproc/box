import { cookiesNames } from 'consts';

import { apiClient } from 'services';

import { cookiesUtil } from 'utils';

export const clearStorage = () => {
  sessionStorage.clear();
  cookiesUtil.remove(cookiesNames.SESSION_ID);
  apiClient.clear();
};
