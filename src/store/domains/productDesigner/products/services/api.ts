import { productsURLs } from 'consts';

import { apiClient } from 'services';

import { ServicesItems } from './types';

export const getEndpointsService = (institutionId: number) =>
  apiClient.post(productsURLs.GET_ENDPOINTS_SERVICE, {
    data: { institution_id: institutionId },
  });

export const getInterfacesService = (institutionId: number) =>
  apiClient.post(productsURLs.GET_INTERFACES_SERVICE, {
    data: { institution_id: institutionId },
  });

export const updateCardService = (data: Partial<ServicesItems>) =>
  apiClient.post(productsURLs.UPDATE_CARD_SERVICE, { data });
