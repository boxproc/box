import { apiClient } from 'services';

// import { institutionsData } from './mock';

// import { throttleUtil } from 'utils';

export const getInstitutions = () =>
  // throttleUtil.getDataAfter(institutionsData, 500);
  apiClient.post('ui/institutions/get');
