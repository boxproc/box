import React from 'react';

import { withSpinner } from 'components/Spinner';
import TablePage from 'components/TablePage';

import { modalNames } from 'consts';

import { tableColumns } from 'containers/Administration/Scheduler/components';

import {
  AdminSchedulerItemPrepared,
  HandleGetAdminSchedulerJobs,
  HandleSendAdminSchedulerAction,
  HandleSetAdminSchedulerJobId,
} from 'store/domains';

import { SchedulerFilter } from 'containers/Administration/Scheduler/forms';

interface SchedulerProps {
  adminSchedulerJobsItems: Array<AdminSchedulerItemPrepared>;
  getAdminSchedulerJobs: HandleGetAdminSchedulerJobs;
  setAdminSchedulerJobId: HandleSetAdminSchedulerJobId;
  sendAdminSchedulerAction: HandleSendAdminSchedulerAction;
  currentSchedulerJobId: number;
}

export const Scheduler: React.FC<SchedulerProps> = ({
  getAdminSchedulerJobs,
  adminSchedulerJobsItems,
  setAdminSchedulerJobId,
  sendAdminSchedulerAction,
  currentSchedulerJobId,
}) => {
  React.useEffect(
    () => {
      getAdminSchedulerJobs();
    },
    [getAdminSchedulerJobs]
  );

  const contextMenuItems = [
    {
      name: 'Execute now',
      action: () => sendAdminSchedulerAction({
        taskId: currentSchedulerJobId,
        taskCommand: 'execute_task',
      }),
    },
    {
      name: 'Stop job',
      action: () => sendAdminSchedulerAction({
        taskId: currentSchedulerJobId,
        taskCommand: 'execute_task',
      }),
    },
    {
      name: 'Start job',
      action: () => sendAdminSchedulerAction({
        taskId: currentSchedulerJobId,
        taskCommand: 'execute_task',
      }),
    },
    {
      name: 'Pause job',
      action: () => sendAdminSchedulerAction({
        taskId: currentSchedulerJobId,
        taskCommand: 'execute_task',
      }),
    },
    {
      name: 'Resume job',
      action: () => sendAdminSchedulerAction({
        taskId: currentSchedulerJobId,
        taskCommand: 'execute_task',
      }),
    },
  ];

  return (
    <TablePage
      title="Scheduler"
      data={adminSchedulerJobsItems}
      columns={tableColumns}
      addNewModalName={modalNames.ADD_ADMIN_SCHEDULER}
      editModalName={modalNames.EDIT_ADMIN_SCHEDULER}
      setCurrentIdAction={setAdminSchedulerJobId}
      contextMenuItems={contextMenuItems}
      FilterForm={
        <SchedulerFilter />
      }
    />
  );
};

export default withSpinner({
  isFixed: true,
})(Scheduler);
