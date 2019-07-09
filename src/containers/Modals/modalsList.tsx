import React from 'react';

import { modalNames } from 'consts';

import AddSystemPropertyModal from './AddSystemPropertyModal';
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
];
