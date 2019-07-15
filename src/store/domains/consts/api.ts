// import { apiClient } from 'services';

import {
  currencyCodesData,
} from './mock';

import { throttleUtil } from 'utils';

export const getCurrencyCodes = () =>
  throttleUtil.getDataAfter(currencyCodesData, 1000);
