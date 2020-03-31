import React from 'react';

import { modalNamesConst } from 'consts';

import AddInstitutionModal from './AddInstitutionModal';
import EditInstitutionModal from './EditInstitutionModal';

export const institutionsModals = [
  {
    name: modalNamesConst.ADD_INSTITUTION,
    component: <AddInstitutionModal />,
  },
  {
    name: modalNamesConst.EDIT_INSTITUTION,
    component: <EditInstitutionModal />,
  },
];
