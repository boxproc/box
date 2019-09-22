import React from 'react';

import { modalNamesConst } from 'consts';

import ApiCallModal from './APiCallModal';

export const apiCallsModals = [
  {
    name: modalNamesConst.AUDIT_API_CALL,
    component: <ApiCallModal />,
  },
];
