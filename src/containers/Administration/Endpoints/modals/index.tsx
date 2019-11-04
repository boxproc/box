import React from 'react';

import { modalNamesConst } from 'consts';

import AddEndpointModal from './AddEndpointModal';
import EditEndpointModal from './EditEndpointModal';

export const endpointsModals = [
  {
    name: modalNamesConst.ADD_ENDPOINT,
    component: <AddEndpointModal />,
  },
  {
    name: modalNamesConst.EDIT_ENDPOINT,
    component: <EditEndpointModal />,
  },
];
