import { apiClientService } from 'services';
// import { institutionsMock, successResponseMock } from './mock';
import { IInstitutionData } from './types';
// import { throttleUtil } from 'utils';

export const getInstitutions = () =>
  // throttleUtil.getDataAfter(institutionsMock, 500);
  apiClientService.post('ui/institutions/get');

export const addInstitution = (data: Partial<IInstitutionData>) =>
  // throttleUtil.getDataAfter(successResponseMock, 500);
  apiClientService.post('ui/institutions', { data });

export const deleteInstitution = (id: number) =>
  // throttleUtil.getDataAfter(successResponseMock, 500);
  apiClientService.delete(`ui/institutions/${id}`);

export const updateInstitution = (data: Partial<IInstitutionData>) =>
  // throttleUtil.getDataAfter(successResponseMock, 100);
  apiClientService.put('ui/institutions', { data });
