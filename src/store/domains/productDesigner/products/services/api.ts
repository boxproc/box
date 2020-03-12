import { apiClient } from 'services';

import { ServicesItems } from './types';

export const getEndpointsService = (institutionId: number) =>
  apiClient.post('ui/product_designer/products/services/get/endpoints', {
    data: { institution_id: institutionId },
  });

export const getInterfacesService = (institutionId: number) =>
  apiClient.post('ui/product_designer/products/services/get/interfaces', {
    data: { institution_id: institutionId },
  });

export const updateCardService = (data: Partial<ServicesItems>) =>
  apiClient.post('ui/product_designer/products/services/update', { data });
