import React from 'react';

import { modalNamesConst } from 'consts';

import AddInterfaceModal from './AddInterfaceModal';
import EditInterfaceModal from './EditInterfaceModal';

export const interfacesModals = [
  {
    name: modalNamesConst.ADD_INTERFACE,
    component: <AddInterfaceModal />,
  },
  {
    name: modalNamesConst.EDIT_INTERFACE,
    component: <EditInterfaceModal />,
  },
];
