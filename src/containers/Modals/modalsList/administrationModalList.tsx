import React from 'react';

import { modalNames } from 'consts';

import {
  AddCyclesEditorModal,
  EditCyclesEditorModal,
} from 'containers/Administration/Cycles/CyclesEditor/modals';
import { AddEndpointModal, EditEndpointModal } from 'containers/Administration/Endpoints/modals';
import {
  AddInstitutionModal,
  EditInstitutionModal,
} from 'containers/Administration/Institutions/modals';
import { AddInterfaceModal, EditInterfaceModal } from 'containers/Administration/Interfaces/modals';
import { AddUsersModal, EditUsersModal } from 'containers/Administration/Permission/Users/modals';
import {
  AddUsersGroupModal,
  EditUsersGroupModal,
} from 'containers/Administration/Permission/UsersGroup/modals';
import {
  AddSchedulerModal,
  EditSchedularModal,
} from 'containers/Administration/Scheduler/modals';
import { AddSystemPropertyModal } from 'containers/Administration/SystemProperties/modals';

export const administrationModalList = [
  {
    name: modalNames.ADD_ADMIN_SYSTEM_PROPERTY,
    component: <AddSystemPropertyModal />,
  },
  {
    name: modalNames.ADD_ADMIN_INSTITUTION,
    component: <AddInstitutionModal />,
  },
  {
    name: modalNames.EDIT_ADMIN_INSTITUTION,
    component: <EditInstitutionModal />,
  },
  {
    name: modalNames.ADD_ADMIN_SCHEDULER,
    component: <AddSchedulerModal />,
  },
  {
    name: modalNames.EDIT_ADMIN_SCHEDULER,
    component: <EditSchedularModal />,
  },
  {
    name: modalNames.ADD_ADMIN_CYCLE_EDITOR,
    component: <AddCyclesEditorModal />,
  },
  {
    name: modalNames.EDIT_CYCLE_EDITOR,
    component: <EditCyclesEditorModal />,
  },
  {
    name: modalNames.ADD_ADMIN_USER,
    component: <AddUsersModal />,
  },
  {
    name: modalNames.EDIT_ADMIN_USER,
    component: <EditUsersModal />,
  },
  {
    name: modalNames.ADD_ADMIN_USERS_GROUP,
    component: <AddUsersGroupModal />,
  },
  {
    name: modalNames.EDIT_ADMIN_USERS_GROUP,
    component: <EditUsersGroupModal />,
  },
  {
    name: modalNames.ADD_ADMIN_ENDPOINT,
    component: <AddEndpointModal />,
  },
  {
    name: modalNames.EDIT_ADMIN_ENDPOINT,
    component: <EditEndpointModal />,
  },
  {
    name: modalNames.ADD_ADMIN_INTERFACE,
    component: <AddInterfaceModal />,
  },
  {
    name: modalNames.EDIT_ADMIN_INTERFACE,
    component: <EditInterfaceModal />,
  },
];
