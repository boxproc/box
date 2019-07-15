import React from 'react';

import { modalNames } from 'consts';

import AddProductModal from './AddProductModal';
import AddSchedulerModal from './AddSchedulerModal';
import AddSystemPropertyModal from './AddSystemPropertyModal';
import EditProductModal from './EditProductModal';
import EditSchedularModal from './EditSchedularModal';
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
    name: modalNames.ADD_SCHEDULER,
    component: <AddSchedulerModal />,
  },
  {
    name: modalNames.EDIT_SCHEDULER,
    component: <EditSchedularModal />,
  },
];
