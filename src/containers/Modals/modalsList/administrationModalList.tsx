import React from 'react';

import { modalNamesConst } from 'consts';

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
  GenerateCronExpressionModal,
} from 'containers/Administration/Scheduler/modals';
import { AddSystemPropertyModal } from 'containers/Administration/SystemProperties/modals';

export const administrationModalList = [
  {
    name: modalNamesConst.ADD_ADMIN_SYSTEM_PROPERTY,
    component: <AddSystemPropertyModal />,
  },
  {
    name: modalNamesConst.ADD_ADMIN_INSTITUTION,
    component: <AddInstitutionModal />,
  },
  {
    name: modalNamesConst.EDIT_ADMIN_INSTITUTION,
    component: <EditInstitutionModal />,
  },
  {
    name: modalNamesConst.ADD_ADMIN_SCHEDULER,
    component: <AddSchedulerModal />,
  },
  {
    name: modalNamesConst.EDIT_ADMIN_SCHEDULER,
    component: <EditSchedularModal />,
  },
  {
    name: modalNamesConst.GENERATE_CRON_EXPRESSION,
    component: <GenerateCronExpressionModal />,
  },
  {
    name: modalNamesConst.ADD_ADMIN_CYCLE_EDITOR,
    component: <AddCyclesEditorModal />,
  },
  {
    name: modalNamesConst.EDIT_CYCLE_EDITOR,
    component: <EditCyclesEditorModal />,
  },
  {
    name: modalNamesConst.ADD_ADMIN_USER,
    component: <AddUsersModal />,
  },
  {
    name: modalNamesConst.EDIT_ADMIN_USER,
    component: <EditUsersModal />,
  },
  {
    name: modalNamesConst.ADD_ADMIN_USERS_GROUP,
    component: <AddUsersGroupModal />,
  },
  {
    name: modalNamesConst.EDIT_ADMIN_USERS_GROUP,
    component: <EditUsersGroupModal />,
  },
  {
    name: modalNamesConst.ADD_ADMIN_ENDPOINT,
    component: <AddEndpointModal />,
  },
  {
    name: modalNamesConst.EDIT_ADMIN_ENDPOINT,
    component: <EditEndpointModal />,
  },
  {
    name: modalNamesConst.ADD_ADMIN_INTERFACE,
    component: <AddInterfaceModal />,
  },
  {
    name: modalNamesConst.EDIT_ADMIN_INTERFACE,
    component: <EditInterfaceModal />,
  },
];
