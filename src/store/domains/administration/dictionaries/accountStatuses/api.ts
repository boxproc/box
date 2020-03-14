import { apiClientService } from 'services';

// import { dictionaryAccountStatusesData } from './mock';

// import { throttleUtil } from 'utils';

export const getDictionaryAccountStatuses = () =>
  // throttleUtil.getDataAfter(dictionaryAccountStatusesData, 500);
  apiClientService.post('ui/administration/dictionaries/account_statuses');
