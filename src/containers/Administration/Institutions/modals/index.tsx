import React from 'react';

import { modalNamesConst } from 'consts';

import AddInstitutionModal from './AddInstitutionModal';
import EditInstitutionModal from './EditInstitutionModal';

export const institutionsModals = [
  {
    name: modalNamesConst.ADD_ADMIN_INSTITUTION,
    component: <AddInstitutionModal />,
  },
  {
    name: modalNamesConst.EDIT_ADMIN_INSTITUTION,
    component: <EditInstitutionModal />,
  },
];
