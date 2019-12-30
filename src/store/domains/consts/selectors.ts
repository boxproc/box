import { createSelector } from 'reselect';

import { yesNoTypesCodes } from 'consts';

import { StoreState } from 'store/StoreState';

export const selectDefaultInstitutions = (state: StoreState) =>
  state.consts.institutions.asMutable();

export const selectInstitutions = createSelector(
  selectDefaultInstitutions,
  institutions => institutions && institutions.map(institution => {
    return {
      id: institution.id,
      institutionName: institution.institution_name,
      masterInstitutionFlag: institution.master_institution_flag === yesNoTypesCodes.YES,
    };
  })
);

export const selectInstitutionsOptions = createSelector(
  selectDefaultInstitutions,
  data => data && data.map(el => {
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
