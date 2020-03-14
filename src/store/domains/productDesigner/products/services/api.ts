import { apiClientService } from 'services';

import { ServicesItems } from './types';

export const getEndpointsService = (institutionId: number) =>
  apiClientService.post('ui/product_designer/products/services/get/endpoints', {
    data: { institution_id: institutionId },
  });

export const getInterfacesService = (institutionId: number) =>
  apiClientService.post('ui/product_designer/products/services/get/interfaces', {
    data: { institution_id: institutionId },
  });

export const updateCardService = (data: Partial<ServicesItems>) =>
  apiClientService.post('ui/product_designer/products/services/update', { data });
