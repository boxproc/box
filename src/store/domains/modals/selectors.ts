import {
  executableTypeOptions,
   statusTypeCyclesOptions,
    statusTypesOptions,
     typeOfCyclesEditorOptions,
     weeklyCycleTypeOptions
} from 'consts';
import { createSelector } from 'reselect';
import { selectInstitutionsOptions } from 'store/domains/consts';
import { StoreState } from 'store/StoreState';

export const selectModalsStateList = (state: StoreState) => state.modals;

export const selectIsMessageModal = (state: StoreState) => state.modals.isMessageModal;

export const selectPayloadMessageModal = (state: StoreState) => state.modals.payloadMessageModal;

export const selectUserGroupById = (state: StoreState) =>
  state.modals.payloadEditAdminUsersGroupModal.usersGroupValues.id;

export const selectDefaultCycleEditorRecord = (state: StoreState) =>
  state.modals.payloadEditCycleEditorRecordsModal.cycleEditorValues;

export const selectDefaultUsersRecord = (state: StoreState) =>
   state.modals.payloadEditAdminUserModal.usersValues;

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

export const selectCycleEditorValues = createSelector(
  selectDefaultCycleEditorRecord,
  selectInstitutionsOptions,
  (values, institutions) => {
    return {
      ...values,
      status: statusTypeCyclesOptions.find(el => el.label === values.status),
      cycleType: typeOfCyclesEditorOptions.find(el => el.label === values.cycleType),
      institutionId: institutions.find(el => el.label === values.institutionId),
      weeklyCycleFirstDay: weeklyCycleTypeOptions.find(
        el => el.label === values.weeklyCycleFirstDay),
    };
  }
);

export const selectUsersValues = createSelector(
  selectDefaultUsersRecord,
  values => {
    return {
      ...values,
      status: values && statusTypesOptions.find(el => el.label === values.status),
    };
  }
);

export const selectUsersGroupValues = createSelector(
  selectDefaultUsersGroupRecord,
  selectInstitutionsOptions,
  (values, institutions) => {
    return {
      ...values,
      institutionId: institutions.find(el => el.label === values.institutionId),
    };
  }
);

export const selectUsersGroupName = createSelector(
  selectDefaultUsersGroupRecord,
  group => group && group.name
);
