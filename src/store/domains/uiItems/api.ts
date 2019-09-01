import { uiItemsPathNames } from 'consts';

import { apiClient } from 'services';

export const getUiItems = () =>
  apiClient.post(uiItemsPathNames.GET);
