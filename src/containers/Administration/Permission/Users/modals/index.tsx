import React from 'react';

import { modalNamesConst } from 'consts';

import AddUsersModal from './AddUsersModal';
import EditUsersModal from './EditUsersModal';

export const usersModals = [
  {
    name: modalNamesConst.ADD_ADMIN_USER,
    component: <AddUsersModal />,
  },
  {
    name: modalNamesConst.EDIT_ADMIN_USER,
    component: <EditUsersModal />,
  },
];
