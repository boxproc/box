import React from 'react';

import { modalNamesConst } from 'consts';

import AddSchedulerModal from './AddSchedulerModal';
import EditSchedularModal from './EditSchedularModal';
import GenerateCronExpressionModal from './GenerateCronExpressionModal';

export const schedulerModals = [
  {
    name: modalNamesConst.ADD_ADMIN_SCHEDULER,
    component: <AddSchedulerModal />,
  },
  {
    name: modalNamesConst.EDIT_ADMIN_SCHEDULER,
    component: <EditSchedularModal />,
  },
  {
    name: modalNamesConst.GENERATE_CRON_EXPRESSION,
    component: <GenerateCronExpressionModal />,
  },
];
