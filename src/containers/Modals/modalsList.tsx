import React from 'react';

import { modalNames } from 'consts';

import AddCyclesEditorModal from './Administration/AddCyclesEditorModal';
import AddSchedulerModal from './Administration/Scheduler/AddSchedulerModal';
import EditSchedularModal from './Administration/Scheduler/EditSchedularModal';
import AddSystemPropertyModal from './Administration/SystemProperties/AddSystemPropertyModal';

import AddProductModal from './ProductDesigner/Product/AddProductModal';
import EditProductModal from './ProductDesigner/Product/EditProductModal';

import MessageModal from './MessageModal';
import EditCyclesEditorModal from './Administration/EditCyclesEditorModal';

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

];
