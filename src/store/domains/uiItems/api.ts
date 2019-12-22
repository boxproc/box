import { uiItemsPathNames } from 'consts';

import { apiClient } from 'services';

// import { successResponseStatus, uiItems } from './mock';
import { UiItem } from './types';

// import { throttleUtil } from 'utils';

export const getUiItems = () =>
  // throttleUtil.getDataAfter(uiItems, 500);
  apiClient.post(uiItemsPathNames.GET);

export const updateUiItems = (data: Array<Partial<UiItem>>) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClient.post(uiItemsPathNames.UPDATE, { data });
