import { apiClient } from 'services';

// import { uiItems } from './mock';

// import { throttleUtil } from 'utils';

export const getUiItems = () =>
  // throttleUtil.getDataAfter(uiItems, 500);
  apiClient.post('ui/items/get');
