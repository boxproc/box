import React from 'react';

import { TablePage, withSpinner } from 'components';

import { iconNamesConst, modalNamesConst, schedulerTasksNames } from 'consts';

import { tableColumns } from 'containers/Administration/Scheduler/components';

import {
  AdminSchedulerItemPrepared,
  HandleDeleteAdminSchedulerJob,
  HandleFilterAdminSchedulerJobs,
  HandleSendAdminSchedulerAction,
  ResetScheduler,
} from 'store/domains';

import { SchedulerFilter } from 'containers/Administration/Scheduler/forms';

interface SchedulerProps {
  adminSchedulerJobsItems: Array<AdminSchedulerItemPrepared>;
  filterAdminSchedulerJobs: HandleFilterAdminSchedulerJobs;
  sendAdminSchedulerAction: HandleSendAdminSchedulerAction;
  deleteAdminSchedulerJob: HandleDeleteAdminSchedulerJob;
  currentSchedulerJobId: number;
  currentSchedulerName: string;
  resetScheduler: ResetScheduler;
}

export const Scheduler: React.FC<SchedulerProps> = ({
  filterAdminSchedulerJobs,
  adminSchedulerJobsItems,
  sendAdminSchedulerAction,
  currentSchedulerJobId,
  deleteAdminSchedulerJob,
  currentSchedulerName,
  resetScheduler,
}) => {
  React.useEffect(
    () => {
      return () => resetScheduler();
    },
    [resetScheduler]
  );

  const contextMenuItems = React.useMemo(
    () => [
      {
        name: 'Execute now',
        action: () => sendAdminSchedulerAction({
          taskId: currentSchedulerJobId,
          taskCommand: schedulerTasksNames.EXECUTE_TASK,
        }),
        withConfirmation: true,
        confirmationText: 'Execute now?',
      },
      {
        name: 'Execute now and refresh table',
        action: () => sendAdminSchedulerAction(
          {
            taskId: currentSchedulerJobId,
            taskCommand: schedulerTasksNames.EXECUTE_TASK,
          },
          {
            withAutoRefresh: true,
          }),
        withConfirmation: true,
        confirmationText: 'Execute now and refresh table?',
      },
      {
        name: 'Stop job',
        action: () => sendAdminSchedulerAction({
          taskId: currentSchedulerJobId,
          taskCommand: schedulerTasksNames.STOP,
        }),
        withConfirmation: true,
        confirmationText: 'Stop job?',
      },
      {
        name: 'Start job',
        action: () => sendAdminSchedulerAction({
          taskId: currentSchedulerJobId,
          taskCommand: schedulerTasksNames.START,
        }),
        withConfirmation: true,
        confirmationText: 'Start job?',
      },
      {
        name: 'Pause job',
        action: () => sendAdminSchedulerAction({
          taskId: currentSchedulerJobId,
          taskCommand: schedulerTasksNames.PAUSE,
        }),
        withConfirmation: true,
        confirmationText: 'Pause job?',
      },
      {
        name: 'Resume job',
        action: () => sendAdminSchedulerAction({
          taskId: currentSchedulerJobId,
          taskCommand: schedulerTasksNames.RESUME,
        }),
        withConfirmation: true,
        confirmationText: 'Resume job?',
      },
      {
        name: 'Delete',
        icon: iconNamesConst.DELETE,
        action: deleteAdminSchedulerJob,
        withConfirmation: true,
        confirmationText: `Delete scheduler "${currentSchedulerName}"?`,
      },
    ],
    [
      sendAdminSchedulerAction,
      currentSchedulerName,
      currentSchedulerJobId,
      deleteAdminSchedulerJob,
    ]
  );

  return (
    <TablePage
      title="Scheduler"
      data={adminSchedulerJobsItems}
      columns={tableColumns}
      newModalName={modalNamesConst.ADD_ADMIN_SCHEDULER}
      editModalName={modalNamesConst.EDIT_ADMIN_SCHEDULER}
      contextMenuItems={contextMenuItems}
      filterAction={filterAdminSchedulerJobs}
      FilterForm={
        <SchedulerFilter />
      }
    />
  );
};

export default withSpinner({
  isFixed: true,
})(Scheduler);
