// import { dictionariesURLs } from 'consts';

// import { apiClient } from 'services';

import { dictionaryRepaymentTypesData } from './mock';

import { throttleUtil } from 'utils';

export const getDictionaryRepaymentTypes = () =>
  throttleUtil.getDataAfter(dictionaryRepaymentTypesData, 500);
  // apiClient.post(dictionariesURLs.GET_REPAYMENT_TYPES);
