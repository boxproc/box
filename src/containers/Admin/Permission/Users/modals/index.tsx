import React from 'react';

import { modalNamesConst } from 'consts';

import AddUsersModal from './AddUsersModal';
import EditUsersModal from './EditUsersModal';

export const usersModals = [
  {
    name: modalNamesConst.ADD_USER,
    component: <AddUsersModal />,
  },
  {
    name: modalNamesConst.EDIT_USER,
    component: <EditUsersModal />,
  },
];
