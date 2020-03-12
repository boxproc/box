// import { dictionariesURLs } from 'consts';

// import { apiClient } from 'services';

import { dictionaryRepaymentTypesData } from './mock';

import { throttleUtil } from 'utils';

export const getDictionaryRepaymentTypes = () =>
  throttleUtil.getDataAfter(dictionaryRepaymentTypesData, 500);
  // apiClient.post('ui/administration/dictionaries/repayment_types');
