import { createSelector } from 'reselect';
import { selectInstitutionsOptions } from 'store/domains/consts';
import { StoreState } from 'store/StoreState';
import { preparedValuesDetailsToRender, preparedValuesToRender } from './utils';

export const selectAdminCurrentInterfaceId = (state: StoreState) =>
  state.administration.adminInterfaces.currentInterfaceId;

export const selectDefaultAdminInterface = (state: StoreState) =>
  state.administration.adminInterfaces && state.administration.adminInterfaces.interfaces;

export const selectAdminInterface = createSelector(
    selectDefaultAdminInterface,
    selectInstitutionsOptions,
    (items, institutions) => items && items.asMutable().map(item => {
      return {
        ...preparedValuesToRender(item),
        institutionId: institutions.find(el => el.value === item.institution_id).label,
      };
    })
  );

export const selectAdminCurrentInterface = createSelector(
    selectAdminInterface,
    selectAdminCurrentInterfaceId,
    selectInstitutionsOptions,
    selectDefaultAdminInterface,
    (endpoints, currentId, institutions, defaultEndpoints) => {
      const current = endpoints.find(el => el.id === currentId);
      const currentDefault = defaultEndpoints.find(el => el.id === currentId);

      return {
        ...preparedValuesDetailsToRender(current),
        institutionId: currentDefault && institutions
          && institutions.find(el => el.value ===  currentDefault.institution_id),
      };
    }
  );
