import React from 'react';

import { modalNames } from 'consts';

import AddProductModal from './AddProductModal';
import AddSystemPropertyModal from './AddSystemPropertyModal';
import GetProductInfoModal from './GetProductInfoModal';
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
    name: modalNames.GET_PRODUCT_INFO,
    component: <GetProductInfoModal />,
  },
];
