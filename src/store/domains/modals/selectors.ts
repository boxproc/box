import { createSelector } from 'reselect';

import {
  executableTypeOptions,
  statusTypesOptions,
} from 'consts';

import { selectInstitutionsOptions } from 'store/domains/consts';
import { StoreState } from 'store/StoreState';

export const selectModalsStateList = (state: StoreState) => state.modals;

export const selectIsMessageModal = (state: StoreState) => state.modals.isMessageModal;

export const selectPayloadMessageModal = (state: StoreState) => state.modals.payloadMessageModal;

export const selectPayloadConfirmationModal = (state: StoreState) =>
  state.modals.payloadConfirmationModal;

export const selectUserGroupById = (state: StoreState) =>
  state.modals.payloadEditAdminUsersGroupModal.usersGroupValues.id;

export const selectDefaultUsersGroupRecord = (state: StoreState) =>
  state.modals.payloadEditAdminUsersGroupModal.usersGroupValues;

export const selectSchedulerJobId = (state: StoreState) =>
  state.modals.payloadEditAdminSchedulerModal
  && state.modals.payloadEditAdminSchedulerModal.schedulerJobValues.id;

export const selectDefaultSchedulerJobValues = (state: StoreState) =>
  state.modals.payloadEditAdminSchedulerModal.schedulerJobValues;

export const selectSchedulerJobValues = createSelector(
  selectDefaultSchedulerJobValues,
  selectInstitutionsOptions,
  (values, institutions) => {
    return {
      ...values,
      status: statusTypesOptions.find(el => el.label === values.status),
      executableType: executableTypeOptions.find(el => el.label === values.executableType),
      institutionId: institutions.find(el => el.label === values.institutionId),
    };
  }
);

export const selectUsersGroupValues = createSelector(
  selectDefaultUsersGroupRecord,
  selectInstitutionsOptions,
  (values, institutions) => {
    return {
      id: values.id,
      name: values.name,
      institutionId: institutions.find(el => el.label === values.institutionId),
    };
  }
);

export const selectUsersGroupName = createSelector(
  selectDefaultUsersGroupRecord,
  group => group && group.name
);
