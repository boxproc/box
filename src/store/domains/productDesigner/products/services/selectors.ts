import { createSelector } from 'reselect';

import { IStoreState } from 'store';
import { createLoadingSelector } from 'store/domains/loader';
import { defaultCurrentProductSelector } from '../products';
import { ActionTypeKeys } from './actionTypes';

export const defaultServicesInterfacesSelector = (state: IStoreState) =>
  state.productDesigner.productServices.interfaces;

export const defaultServicesEndpointsSelector = (state: IStoreState) =>
  state.productDesigner.productServices.endpoints;

export const servicesInterfacesOptionsSelector = createSelector(
  defaultServicesInterfacesSelector,
  data => data && data.asMutable().map(el => {
    return {
      value: el.id ? el.id : 0,
      label: el.name,
    };
  })
);

export const servicesEndpointsOptionsSelector = createSelector(
  defaultServicesEndpointsSelector,
  data => data && data.asMutable().map(el => {
    return {
      value: el.id ? el.id : 0,
      label: el.name,
    };
  })
);

export const productServicesSelector = createSelector(
  defaultCurrentProductSelector,
  servicesInterfacesOptionsSelector,
  servicesEndpointsOptionsSelector,
  (current, interfacesOptions, endpointsOptions) => {
    if (!current) {
      return null;
    }

    const {
      card_transactions_endpoint_id,
      card_management_interface_id,
      provider_3d_secure_interface_id,
      direct_debit_interface_id,
      card_repayment_interface_id,
    } = current;

    const currentEndpoint = endpointsOptions
      .find(el => el.value === card_transactions_endpoint_id);
    const currentInterface = interfacesOptions
      .find(el => el.value === card_management_interface_id);
    const currentSecureProviderInterface = interfacesOptions
      .find(el => el.value === provider_3d_secure_interface_id);
    const currentDirectDebitRepaymentInterface = interfacesOptions
      .find(el => el.value === direct_debit_interface_id);
    const currentCardRepaymentInterface = interfacesOptions
      .find(el => el.value === card_repayment_interface_id);

    return {
      endpoints: currentEndpoint || endpointsOptions[0],
      interfaces: currentInterface || interfacesOptions[0],
      secureProviderInterfaces: currentSecureProviderInterface || interfacesOptions[0],
      directDebitRepaymentInterface: currentDirectDebitRepaymentInterface || interfacesOptions[0],
      cardRepaymentInterface: currentCardRepaymentInterface || interfacesOptions[0],
    };
  }
);

/**
 * Product services loading selectors
 */

export const isServiceInterfacesLoadingSelector = createLoadingSelector([
  ActionTypeKeys.GET_SERVICES_INTERFACES,
]);

export const isServiceEndpointsLoadingSelector = createLoadingSelector([
  ActionTypeKeys.GET_SERVICES_ENDPOINTS,
]);

export const isProductServiceUpdatingSelector = createLoadingSelector([
  ActionTypeKeys.UPDATE_PRODUCT_SERVICES,
]);
