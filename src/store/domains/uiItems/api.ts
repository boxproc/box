// import { apiClient } from 'services';

import { uiItemsData } from './mock';

import { throttleUtil } from 'utils';

export const getUiItems = () =>
  throttleUtil.getDataAfter(uiItemsData, 500);
  // apiClient.post('/ui/items/get');
