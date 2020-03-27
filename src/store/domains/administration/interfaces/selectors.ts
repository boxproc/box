import { createSelector } from 'reselect';

import { StoreState } from 'store';
import { createLoadingSelector } from 'store/domains/loader';
import { selectInstitutionsOptions } from 'store/domains/login';
import { activeItemIdSelector } from 'store/domains/utils';
import { ActionTypeKeys } from './actionTypes';
import { prepareDataToRender, prepareDetailsToRender } from './utils';

export const defaultInterfacesSelector = (state: StoreState) =>
  state.administration.interfaces.interfaces;

export const interfacesSelector = createSelector(
  defaultInterfacesSelector,
  selectInstitutionsOptions,
  (items, institutions) => items && items.map(item => {
    const institution = institutions.find(el => el.value === item.institution_id);

    return prepareDataToRender(item, institution);
  })
);

/**
 * Current interface selectors
 */

export const currentInterfaceSelector = createSelector(
  defaultInterfacesSelector,
  activeItemIdSelector,
  selectInstitutionsOptions,
  (interfaces, currentId, institutions) => {
    const currentInterface = interfaces.find(el => el.id === currentId);

    return {
      ...prepareDetailsToRender(currentInterface),
      institutionId: currentInterface && institutions
        && institutions.find(el => el.value === currentInterface.institution_id),
    };
  }
);

export const currentInterfaceNameSelector = createSelector(
  currentInterfaceSelector,
  data => data && data.name
);

/**
 * Interface loading selectors
 */

export const isFilteringInterfacesSelector = createLoadingSelector([
  ActionTypeKeys.FILTER_INTERFACES,
]);

export const isDeletingInterfaceSelector = createLoadingSelector([
  ActionTypeKeys.DELETE_INTERFACE,
]);

export const isUpdatingInterfaceSelector = createLoadingSelector([
  ActionTypeKeys.UPDATE_INTERFACE,
]);
