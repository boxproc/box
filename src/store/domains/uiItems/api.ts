import { apiClientService } from 'services';

// import { uiItems } from './mock';

// import { throttleUtil } from 'utils';

export const getUiItems = () =>
  // throttleUtil.getDataAfter(uiItems, 500);
  apiClientService.post('ui/items/get');
