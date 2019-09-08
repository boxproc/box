import React from 'react';

import { modalNames } from 'consts';

import MessageModal from 'containers/Modals//MessageModal';
import ConfirmationModal from 'containers/Modals/ConfirmationModal';
import Register2faModal from 'containers/Modals/Register2faModal';
import { administrationModalList } from './administrationModalList';
import { ledgerModalList } from './ledgerModalList';
import { productDesignerModalList } from './productDesignerModalList';

export const modalsList = [
  {
    name: modalNames.MESSAGE_MODAL,
    component: <MessageModal />,
  },
  {
    name: modalNames.CONFIRMATION_MODAL,
    component: <ConfirmationModal />,
  },
  {
    name: modalNames.REGISTER_2FA_MODAL,
    component: <Register2faModal />,
  },
  ...administrationModalList,
  ...ledgerModalList,
  ...productDesignerModalList,
];
