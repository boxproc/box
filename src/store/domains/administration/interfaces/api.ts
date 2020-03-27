import { apiClientService } from 'services';

import { IInterfaceData, IInterfacesFilterToSend } from './types';

export const addInterface = (data: Partial<IInterfaceData>) =>
  apiClientService.post('ui/administration/interfaces', { data });

export const deleteInterface = (id: number) =>
  apiClientService.delete(`ui/administration/interfaces/${id}`);

export const updateInterface = (data: Partial<IInterfaceData>) =>
  apiClientService.put('ui/administration/interfaces', { data });

export const filterInterface = (data: Partial<IInterfacesFilterToSend>) =>
  apiClientService.post('ui/administration/interfaces/get', { data });
