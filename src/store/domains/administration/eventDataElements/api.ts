// import { apiClient } from 'services';

import {
  adminEventDataElementsData,
} from './mock';

import { throttleUtil } from 'utils';

export const getAdminEventDataElements = () =>
  throttleUtil.getDataAfter(adminEventDataElementsData, 500);
// apiClient.post('');
