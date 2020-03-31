import { createSelector } from 'reselect';

import { IStoreState } from 'store';
import { createLoadingSelector } from 'store/domains/loader';
import { activeItemIdSelector } from 'store/domains/utils';

import { ActionTypeKeys } from './actionTypes';
import { prepareDataToRender, prepareDetailsToRender } from './utils';

export const defaultInstitutionsSelector = (state: IStoreState) =>
  state.admin.institutions.institutions;

export const institutionsSelector = createSelector(
  defaultInstitutionsSelector,
  data => data && data.map(el => prepareDataToRender(el))
);

export const institutionsOptionsSelector = createSelector(
  defaultInstitutionsSelector,
  data => data && data.asMutable().map(el => {
    return {
      value: el.id,
      label: el.institution_name,
    };
  })
);

/** Current institution selectors */

export const currentInstitutionSelector = createSelector(
  defaultInstitutionsSelector,
  activeItemIdSelector,
  (institutions, currentId) => {
    const currentInst = institutions.find(el => el.id === currentId);

    return prepareDetailsToRender(currentInst);
  }
);

export const currentInstitutionNameSelector = createSelector(
  currentInstitutionSelector,
  data => data && data.institutionName
);

/** Institution loading selectors */

export const isUpdatingInstitutionSelector = createLoadingSelector([
  ActionTypeKeys.UPDATE_INSTITUTION,
]);

export const isAddingInstitutionSelector = createLoadingSelector([
  ActionTypeKeys.ADD_INSTITUTION,
]);

export const isDeletingInstitutionSelector = createLoadingSelector([
  ActionTypeKeys.ADD_INSTITUTION,
]);

export const isGettingInstitutionsSelector = createLoadingSelector([
  ActionTypeKeys.GET_INSTITUTIONS,
]);
