import React from 'react';

import { modalNames } from 'consts';

import MessageModal from './MessageModal';

export const modalsList = [
  {
    name: modalNames.MESSAGE_MODAL,
    component: <MessageModal />,
  },
];
