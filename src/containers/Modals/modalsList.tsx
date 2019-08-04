import React from 'react';

import { modalNames } from 'consts';

import AddSystemPropertyModal from 'containers/Administration/SystemProperties/AddSystemPropertyModal';
import AddProductModal from 'containers/ProductDesigner/Products/AddProduct/AddProductModal';
import EditProductModal from 'containers/ProductDesigner/Products/EditProduct/EditProductModal';

import AddUsersGroupModal from 'containers/Administration/Permission/UsersGroup/AddUserGroup/AddUsersGroupModal';
import EditUsersGroupModal from 'containers/Administration/Permission/UsersGroup/EditUserGroup/EditUsersGroupModal';

import AddCyclesEditorModal from 'containers/Administration/Cycles/CyclesEditor/AddCyclesEditorModal';
import EditCyclesEditorModal from 'containers/Administration/Cycles/CyclesEditor/EditCyclesEditorModal';

import AddSchedulerModal from 'containers/Administration/Scheduler/AddSchedulerModal';
import EditSchedularModal from 'containers/Administration/Scheduler/EditSchedularModal';

import AddUsersModal from 'containers/Administration/Permission/Users/AddUsersModal';
import EditUsersModal from 'containers/Administration/Permission/Users/EditUsersModal';

import MessageModal from './MessageModal';

export const modalsList = [
  {
    name: modalNames.MESSAGE_MODAL,
    component: <MessageModal />,
  },
  {
    name: modalNames.ADD_ADMIN_SYSTEM_PROPERTY,
    component: <AddSystemPropertyModal />,
  },
  {
    name: modalNames.ADD_PRODUCT,
    component: <AddProductModal />,
  },
  {
    name: modalNames.EDIT_PRODUCT,
    component: <EditProductModal />,
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
    component: < EditUsersGroupModal />,
  },
];
