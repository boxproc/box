import React from 'react';

import { modalNamesConst } from 'consts';

import AddCyclesEditorModal from './AddCyclesEditorModal';
import EditCyclesEditorModal from './EditCyclesEditorModal';

export const cycleEditorModals = [
  {
    name: modalNamesConst.ADD_CYCLE_EDITOR,
    component: <AddCyclesEditorModal />,
  },
  {
    name: modalNamesConst.EDIT_CYCLE_EDITOR,
    component: <EditCyclesEditorModal />,
  },
];
