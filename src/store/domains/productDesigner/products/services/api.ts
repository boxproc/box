import { productsPathNames } from 'consts';

import { apiClient } from 'services';

import { ServicesItems } from './types';

export const getEndpointsService = (institutionId: number) =>
  apiClient.post(productsPathNames.GET_ENDPOINTS_SERVICE, {
    data: { institution_id: institutionId },
  });

export const getInterfacesService = (institutionId: number) =>
  apiClient.post(productsPathNames.GET_INTERFACES_SERVICE, {
    data: { institution_id: institutionId },
  });

export const updateCardService = (data: Partial<ServicesItems>) =>
  apiClient.post(productsPathNames.UPDATE_CARD_SERVICE, { data });
