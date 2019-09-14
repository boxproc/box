import React from 'react';

import { modalNamesConst } from 'consts';

import MessageModal from 'containers/Modals//MessageModal';
import ChangeProfileModal from 'containers/Modals/ChangeProfileModal';
import ConfirmationModal from 'containers/Modals/ConfirmationModal';
import Register2faModal from 'containers/Modals/Register2faModal';
import LoginCode2faModal from '../LoginCode2faModal';
import { administrationModalList } from './administrationModalList';
import { ledgerModalList } from './ledgerModalList';
import { productDesignerModalList } from './productDesignerModalList';

export const modalsList = [
  {
    name: modalNamesConst.MESSAGE_MODAL,
    component: <MessageModal />,
  },
  {
    name: modalNamesConst.CONFIRMATION_MODAL,
    component: <ConfirmationModal />,
  },
  {
    name: modalNamesConst.REGISTER_2FA_MODAL,
    component: <Register2faModal />,
  },
  {
    name: modalNamesConst.LOGIN_CODE_2FA_MODAL,
    component: <LoginCode2faModal />,
  },
  {
    name: modalNamesConst.CHANGE_PROFILE_MODAL,
    component: <ChangeProfileModal />,
  },
  ...administrationModalList,
  ...ledgerModalList,
  ...productDesignerModalList,
];
