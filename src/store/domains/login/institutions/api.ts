import { apiClientService } from 'services';

// import { institutionsData } from './mock';

// import { throttleUtil } from 'utils';

export const getInstitutions = () =>
  // throttleUtil.getDataAfter(institutionsData, 500);
  apiClientService.post('ui/institutions/get');
