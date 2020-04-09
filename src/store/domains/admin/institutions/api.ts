// import { successResponseMock } from 'consts';
import { apiClientService } from 'services';
// import { institutionsMock } from './mock';
import { IInstitutionData } from './types';

// import { throttleUtil } from 'utils';

/**
 * Get institutions API
 */
export const getInstitutions = () =>
  // throttleUtil.getDataAfter(institutionsMock, 500);
  apiClientService.post('ui/institutions/get');

/**
 * Add institution API
 */
export const addInstitution = (data: Partial<IInstitutionData>) =>
  // throttleUtil.getDataAfter(successResponseMock, 500);
  apiClientService.post('ui/institutions', { data });

/**
 * Delete institution API
 */
export const deleteInstitution = (id: number) =>
  // throttleUtil.getDataAfter(successResponseMock, 500);
  apiClientService.delete(`ui/institutions/${id}`);

/**
 * Update institution API
 */
export const updateInstitution = (data: Partial<IInstitutionData>) =>
  // throttleUtil.getDataAfter(successResponseMock, 100);
  apiClientService.put('ui/institutions', { data });
