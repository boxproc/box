import { apiClientService } from 'services';

import { IInterfaceData, IInterfacesFilterToSend } from './types';

/**
 * Add interface API
 */
export const addInterface = (data: Partial<IInterfaceData>) =>
  apiClientService.post('ui/administration/interfaces', { data });

/**
 * Delete interface API
 */
export const deleteInterface = (id: number) =>
  apiClientService.delete(`ui/administration/interfaces/${id}`);

/**
 * Update interface API
 */
export const updateInterface = (data: Partial<IInterfaceData>) =>
  apiClientService.put('ui/administration/interfaces', { data });

/**
 * Filter interfaces API
 */
export const filterInterface = (data: Partial<IInterfacesFilterToSend>) =>
  apiClientService.post('ui/administration/interfaces/get', { data });
