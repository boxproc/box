import { apiClientService } from 'services';

import { ServicesItems } from './types';

/**
 * Get product endpoints API
 */
export const getEndpointsService = (institutionId: number) =>
  apiClientService.post('ui/product_designer/products/services/get/endpoints', {
    data: { institution_id: institutionId },
  });

/**
 * Get product interfaces API
 */
export const getInterfacesService = (institutionId: number) =>
  apiClientService.post('ui/product_designer/products/services/get/interfaces', {
    data: { institution_id: institutionId },
  });

/**
 * Update product services API
 */
export const updateCardServices = (data: Partial<ServicesItems>) =>
  apiClientService.post('ui/product_designer/products/services/update', { data });
