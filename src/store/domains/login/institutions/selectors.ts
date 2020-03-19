import { createSelector } from 'reselect';

import { yesNoConst } from 'consts';

import { StoreState } from 'store';

export const selectDefaultInstitutions = (state: StoreState) =>
  state.login.institutions.institutions;

export const selectInstitutions = createSelector(
  selectDefaultInstitutions,
  institutions => institutions && institutions.map(institution => {
    return {
      id: institution.id,
      institutionName: institution.institution_name,
      masterInstitutionFlag: institution.master_institution_flag === yesNoConst.YES,
    };
  })
);

export const selectInstitutionsOptions = createSelector(
  selectDefaultInstitutions,
  data => data && data.asMutable().map(el => {
    return {
      value: el.id,
      label: el.institution_name,
    };
  })
);

export const selectIsInstitutionsLoaded = createSelector(
  selectDefaultInstitutions,
  institutions => institutions && institutions.length > 0
);
