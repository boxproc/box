import React from 'react';

import { withSpinner } from 'components';

import { iconNamesConst, modalNamesConst, schedulerTasksNames } from 'consts';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';

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
        confirmationText: `Execute now "${currentSchedulerName}"?`,
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
        confirmationText: `Execute now "${currentSchedulerName}" and refresh table?`,
      },
      {
        name: 'Stop job',
        action: () => sendAdminSchedulerAction({
          taskId: currentSchedulerJobId,
          taskCommand: schedulerTasksNames.STOP,
        }),
        withConfirmation: true,
        confirmationText: `Stop job "${currentSchedulerName}"?`,
      },
      {
        name: 'Start job',
        action: () => sendAdminSchedulerAction({
          taskId: currentSchedulerJobId,
          taskCommand: schedulerTasksNames.START,
        }),
        withConfirmation: true,
        confirmationText: `Start job "${currentSchedulerName}"?`,
      },
      {
        name: 'Pause job',
        action: () => sendAdminSchedulerAction({
          taskId: currentSchedulerJobId,
          taskCommand: schedulerTasksNames.PAUSE,
        }),
        withConfirmation: true,
        confirmationText: `Pause job "${currentSchedulerName}"?`,
      },
      {
        name: 'Resume job',
        action: () => sendAdminSchedulerAction({
          taskId: currentSchedulerJobId,
          taskCommand: schedulerTasksNames.RESUME,
        }),
        withConfirmation: true,
        confirmationText: `Resume job "${currentSchedulerName}"?`,
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
    <PageTemplate
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
