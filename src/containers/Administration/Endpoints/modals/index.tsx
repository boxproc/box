import React from 'react';

import { modalNamesConst } from 'consts';

import AddEndpointModal from './AddEndpointModal';
import EditEndpointModal from './EditEndpointModal';

export const endpointsModals = [
  {
    name: modalNamesConst.ADD_ADMIN_ENDPOINT,
    component: <AddEndpointModal />,
  },
  {
    name: modalNamesConst.EDIT_ADMIN_ENDPOINT,
    component: <EditEndpointModal />,
  },
];
