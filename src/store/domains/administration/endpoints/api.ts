import { apiClientService } from 'services';

import { IEndpointData, IEndpointsFilterToSend } from './types';

export const filterEndpoints = (data: Partial<IEndpointsFilterToSend>) =>
  apiClientService.post('ui/administration/endpoints/get', { data });

export const addEndpoint = (data: Partial<IEndpointData>) =>
  apiClientService.post('ui/administration/endpoints', { data });

export const deleteEndpoint = (id: number) =>
  apiClientService.delete(`ui/administration/endpoints/${id}`);

export const updateEndpoint = (data: Partial<IEndpointData>) =>
  apiClientService.put('ui/administration/endpoints', { data });

export const getEndpointsByInstitutionId = (id: number | string) =>
  apiClientService.post('ui/administration/endpoints/id_and_name', {
    data: { institution_id: id },
  });
