import { apiClientService } from 'services';
import { IProductServicesData } from './types';

/**
 * Get product services endpoints API
 */
export const getServicesEndpoints = (institutionId: number) =>
  apiClientService.post('ui/product_designer/products/services/get/endpoints', {
    data: { institution_id: institutionId },
  });

/**
 * Get product services interfaces API
 */
export const getServicesInterfaces = (institutionId: number) =>
  apiClientService.post('ui/product_designer/products/services/get/interfaces', {
    data: { institution_id: institutionId },
  });

/**
 * Update product services API
 */
export const updateProductServices = (data: Partial<IProductServicesData>) =>
  apiClientService.post('ui/product_designer/products/services/update', { data });
