import React from 'react';

import { Button, withSpinner } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import {
  iconNamesConst,
  modalNamesConst,
  schedulerTasksConsts,
  systemMonitorTables,
} from 'consts';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';

import {
  AdminSchedulerItemPrepared,
  HandleDeleteAdminSchedulerJob,
  HandleFilterAdminSchedulerJobs,
  HandleFilterScheduledJobsById,
  HandleGetLogData,
  HandleSendAdminSchedulerAction,
  ResetScheduler,
} from 'store/domains';

import { SchedulerFilter } from 'containers/Administration/Scheduler/forms';

import { SelectValue } from 'types';

interface SchedulerProps extends WithModalProps {
  adminSchedulerJobsItems: Array<AdminSchedulerItemPrepared>;
  filterAdminSchedulerJobs: HandleFilterAdminSchedulerJobs;
  sendAdminSchedulerAction: HandleSendAdminSchedulerAction;
  deleteAdminSchedulerJob: HandleDeleteAdminSchedulerJob;
  currentSchedulerJobId: number;
  currentSchedulerName: string;
  resetScheduler: ResetScheduler;
  getLogData: HandleGetLogData;
  filterAdminScheduledJobsById: HandleFilterScheduledJobsById;
  institutionsOptions: Array<SelectValue>;
}

export const Scheduler: React.FC<SchedulerProps> = ({
  filterAdminSchedulerJobs,
  adminSchedulerJobsItems,
  sendAdminSchedulerAction,
  currentSchedulerJobId,
  deleteAdminSchedulerJob,
  currentSchedulerName,
  resetScheduler,
  getLogData,
  filterAdminScheduledJobsById,
  institutionsOptions,
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
        name: 'Show log',
        icon: iconNamesConst.SHORT_TEXT,
        action: () => getLogData({
          name: systemMonitorTables.SCHEDULER_JOBS,
          id: currentSchedulerJobId,
          title: currentSchedulerName,
        }),
      },
      {
        isDivider: true,
      },
      {
        name: 'Scheduled Jobs',
        action: () => filterAdminScheduledJobsById({ scheduler_id: currentSchedulerJobId }),
      },
      {
        isDivider: true,
      },
      {
        name: schedulerTasksConsts.EXECUTE_TASK.NAME,
        action: () => sendAdminSchedulerAction({
          taskId: currentSchedulerJobId,
          taskCommand: schedulerTasksConsts.EXECUTE_TASK.TASK_COMMAND,
        }),
        withConfirmation: true,
        confirmationText: `${schedulerTasksConsts.EXECUTE_TASK.NAME} "${currentSchedulerName}"?`,
      },
      {
        name: `${schedulerTasksConsts.EXECUTE_TASK.NAME} with auto-refresh`,
        action: () => sendAdminSchedulerAction(
          {
            taskId: currentSchedulerJobId,
            taskCommand: schedulerTasksConsts.EXECUTE_TASK.TASK_COMMAND,
          },
          {
            withAutoRefresh: true,
          }),
        withConfirmation: true,
        confirmationText:
          `${schedulerTasksConsts.EXECUTE_TASK.NAME} "${currentSchedulerName}" with auto-refresh?`,
      },
      {
        name: schedulerTasksConsts.STOP.NAME,
        action: () => sendAdminSchedulerAction({
          taskId: currentSchedulerJobId,
          taskCommand: schedulerTasksConsts.STOP.TASK_COMMAND,
        }),
        withConfirmation: true,
        confirmationText: `${schedulerTasksConsts.STOP.NAME} "${currentSchedulerName}"?`,
      },
      {
        name: schedulerTasksConsts.START.NAME,
        action: () => sendAdminSchedulerAction({
          taskId: currentSchedulerJobId,
          taskCommand: schedulerTasksConsts.START.TASK_COMMAND,
        }),
        withConfirmation: true,
        confirmationText: `${schedulerTasksConsts.START.NAME} "${currentSchedulerName}"?`,
      },
      {
        name: schedulerTasksConsts.PAUSE.NAME,
        action: () => sendAdminSchedulerAction({
          taskId: currentSchedulerJobId,
          taskCommand: schedulerTasksConsts.PAUSE.TASK_COMMAND,
        }),
        withConfirmation: true,
        confirmationText: `${schedulerTasksConsts.PAUSE.NAME} "${currentSchedulerName}"?`,
      },
      {
        name: schedulerTasksConsts.RESUME.NAME,
        action: () => sendAdminSchedulerAction({
          taskId: currentSchedulerJobId,
          taskCommand: schedulerTasksConsts.RESUME.TASK_COMMAND,
        }),
        withConfirmation: true,
        confirmationText: `${schedulerTasksConsts.RESUME.NAME} "${currentSchedulerName}"?`,
      },
      {
        isDivider: true,
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
      filterAdminScheduledJobsById,
      getLogData,
    ]
  );

  const initialFilterValues = React.useMemo(
    () => {
      return {
        institutionId: institutionsOptions[0],
      };
    },
    [institutionsOptions]
  );

  return (
    <PageTemplate
      title="Scheduler"
      data={adminSchedulerJobsItems}
      columns={tableColumns}
      newModalName={modalNamesConst.ADD_SCHEDULER}
      editModalName={modalNamesConst.EDIT_SCHEDULER}
      contextMenuItems={contextMenuItems}
      filterAction={filterAdminSchedulerJobs}
      isDownloadButton={true}
      initialFilterValues={initialFilterValues}
      FilterForm={
        <SchedulerFilter
          institutionsOptions={institutionsOptions}
        />
      }
      AdditionalButton={
        <Button
          text="Show scheduler master log"
          iconName={iconNamesConst.SHORT_TEXT}
          onClick={() => getLogData({
            name: systemMonitorTables.SCHEDULER_JOBS,
          })}
        />
      }
    />
  );
};

export default withSpinner({
  isFixed: true,
})(withModal(Scheduler));
