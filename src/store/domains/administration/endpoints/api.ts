import { apiClientService } from 'services';

import { IEndpointData, IEndpointsFilterToSend } from './types';

/**
 * Filter endpoints API
 */
export const filterEndpoints = (data: Partial<IEndpointsFilterToSend>) =>
  apiClientService.post('ui/administration/endpoints/get', { data });

/**
 * Add endpoint API
 */
export const addEndpoint = (data: Partial<IEndpointData>) =>
  apiClientService.post('ui/administration/endpoints', { data });

/**
 * Delete endpoint API
 */
export const deleteEndpoint = (id: number) =>
  apiClientService.delete(`ui/administration/endpoints/${id}`);

/**
 * Update endpoint API
 */
export const updateEndpoint = (data: Partial<IEndpointData>) =>
  apiClientService.put('ui/administration/endpoints', { data });

/**
 * Get endpoints by institution ID API
 */
export const getEndpointsByInstitutionId = (id: number | string) =>
  apiClientService.post('ui/administration/endpoints/id_and_name', {
    data: { institution_id: id },
  });
