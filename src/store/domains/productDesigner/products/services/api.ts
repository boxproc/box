import { apiUrls } from 'consts';

import { apiClient } from 'services';

import { ServicesItems } from './types';

export const getEndpointsService = (institutionId: number) =>
  apiClient.post(apiUrls.products.GET_ENDPOINTS_SERVICE, {
    data: { institution_id: institutionId },
  });

export const getInterfacesService = (institutionId: number) =>
  apiClient.post(apiUrls.products.GET_INTERFACES_SERVICE, {
    data: { institution_id: institutionId },
  });

export const updateCardService = (data: Partial<ServicesItems>) =>
  apiClient.post(apiUrls.products.UPDATE_CARD_SERVICE, { data });
