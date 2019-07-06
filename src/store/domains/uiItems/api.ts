import { apiClient } from 'services';
// import { cookiesUtil } from 'utils';
// import { cookiesNames } from 'consts';

// import { uiItemsData } from './mock';

// import { throttleUtil } from 'utils';

export const getUiItems = (sessionId: string) =>
  // throttleUtil.getDataAfter(uiItemsData, 500);
  apiClient.get('/ui/items', {
    data: {
      session_id: sessionId,
    },
  });
