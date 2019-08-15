import React from 'react';

import { modalNames } from 'consts';

import ConfirmationModal from '../ConfirmationModal';
import MessageModal from '../MessageModal';

export const generalModalList = [
  {
    name: modalNames.MESSAGE_MODAL,
    component: <MessageModal />,
  },
  {
    name: modalNames.CONFIRMATION_MODAL,
    component: <ConfirmationModal />,
  },
];
