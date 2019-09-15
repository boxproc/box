import React from 'react';

import { modalNamesConst } from 'consts';

import AddInterfaceModal from './AddInterfaceModal';
import EditInterfaceModal from './EditInterfaceModal';

export const institutionsModals = [
  {
    name: modalNamesConst.ADD_ADMIN_INTERFACE,
    component: <AddInterfaceModal />,
  },
  {
    name: modalNamesConst.EDIT_ADMIN_INTERFACE,
    component: <EditInterfaceModal />,
  },
];
