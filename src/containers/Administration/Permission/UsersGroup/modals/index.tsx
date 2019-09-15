import React from 'react';

import { modalNamesConst } from 'consts';

import AddUsersGroupModal from './AddUsersGroupModal';
import EditUsersGroupModal from './EditUsersGroupModal';

export const usersGroupModals = [
  {
    name: modalNamesConst.ADD_ADMIN_USERS_GROUP,
    component: <AddUsersGroupModal />,
  },
  {
    name: modalNamesConst.EDIT_ADMIN_USERS_GROUP,
    component: <EditUsersGroupModal />,
  },
];
