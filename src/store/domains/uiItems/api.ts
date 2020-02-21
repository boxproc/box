import { apiUrls } from 'consts';

import { apiClient } from 'services';

// import { uiItems } from './mock';

// import { throttleUtil } from 'utils';

export const getUiItems = () =>
  // throttleUtil.getDataAfter(uiItems, 500);
  apiClient.post(apiUrls.uiItems.GET);
