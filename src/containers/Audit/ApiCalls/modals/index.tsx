import React from 'react';

import { modalNamesConst } from 'consts';

import ApiCallModal from './ApiCallModal';

export const apiCallsModals = [
  {
    name: modalNamesConst.AUDIT_API_CALL,
    component: <ApiCallModal />,
  },
];
