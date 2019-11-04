import React from 'react';

import { modalNamesConst } from 'consts';

import AddSystemPropertyModal from './AddSystemPropertyModal';

export const systemPropertiesModals = [
  {
    name: modalNamesConst.ADD_SYSTEM_PROPERTY,
    component: <AddSystemPropertyModal />,
  },
];
