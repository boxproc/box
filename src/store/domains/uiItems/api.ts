import { apiClientService } from 'services';

// import { uiItemsMock } from './mock';
// import { throttleUtil } from 'utils';

export const getUiItems = () =>
  // throttleUtil.getDataAfter(uiItemsMock, 500);
  apiClientService.post('ui/items/get_all');

export const getHelpLink = (data: string) =>
  apiClientService.post('ui/administration/link', {
    data: { ui_item: data },
  });
