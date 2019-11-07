import React from 'react';

import { modalNamesConst } from 'consts';

import AddSystemPropertyModal from './AddSystemPropertyModal';
import EditSystemPropertyModal from './EditSystemPropertyModal';

export const systemPropertiesModals = [
  {
    name: modalNamesConst.ADD_SYSTEM_PROPERTY,
    component: <AddSystemPropertyModal />,
  },
  {
    name: modalNamesConst.EDIT_SYSTEM_PROPERTY,
    component: <EditSystemPropertyModal />,
  },
];
