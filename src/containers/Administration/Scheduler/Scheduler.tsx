import React from 'react';

import { Button } from 'components';
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
  schedulerJobsItems: Array<AdminSchedulerItemPrepared>;
  institutionsOptions: Array<SelectValue>;
  currentSchedulerId: number;
  currentSchedulerName: string;
  isLoading: boolean;
  filterSchedulerJobs: HandleFilterAdminSchedulerJobs;
  sendSchedulerAction: HandleSendAdminSchedulerAction;
  deleteSchedulerJob: HandleDeleteAdminSchedulerJob;
  filterScheduledJobsById: HandleFilterScheduledJobsById;
  resetScheduler: ResetScheduler;
  getLogData: HandleGetLogData;
}

export const Scheduler: React.FC<SchedulerProps> = ({
  filterSchedulerJobs,
  schedulerJobsItems,
  sendSchedulerAction,
  currentSchedulerId,
  deleteSchedulerJob,
  currentSchedulerName,
  resetScheduler,
  getLogData,
  filterScheduledJobsById,
  institutionsOptions,
  isLoading,
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
          id: currentSchedulerId,
          title: currentSchedulerName,
        }),
      },
      { isDivider: true },
      {
        name: 'Scheduled Jobs',
        action: () => filterScheduledJobsById({ scheduler_id: currentSchedulerId }),
      },
      { isDivider: true },
      {
        name: schedulerTasksConsts.EXECUTE_TASK.NAME,
        action: () => sendSchedulerAction({
          taskId: currentSchedulerId,
          taskCommand: schedulerTasksConsts.EXECUTE_TASK.TASK_COMMAND,
        }),
        withConfirmation: true,
        confirmationText: `${schedulerTasksConsts.EXECUTE_TASK.NAME} "${currentSchedulerName}"?`,
      },
      {
        name: `${schedulerTasksConsts.EXECUTE_TASK.NAME} with auto-refresh`,
        action: () => sendSchedulerAction(
          {
            taskId: currentSchedulerId,
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
        action: () => sendSchedulerAction({
          taskId: currentSchedulerId,
          taskCommand: schedulerTasksConsts.STOP.TASK_COMMAND,
        }),
        withConfirmation: true,
        confirmationText: `${schedulerTasksConsts.STOP.NAME} "${currentSchedulerName}"?`,
      },
      {
        name: schedulerTasksConsts.START.NAME,
        action: () => sendSchedulerAction({
          taskId: currentSchedulerId,
          taskCommand: schedulerTasksConsts.START.TASK_COMMAND,
        }),
        withConfirmation: true,
        confirmationText: `${schedulerTasksConsts.START.NAME} "${currentSchedulerName}"?`,
      },
      {
        name: schedulerTasksConsts.PAUSE.NAME,
        action: () => sendSchedulerAction({
          taskId: currentSchedulerId,
          taskCommand: schedulerTasksConsts.PAUSE.TASK_COMMAND,
        }),
        withConfirmation: true,
        confirmationText: `${schedulerTasksConsts.PAUSE.NAME} "${currentSchedulerName}"?`,
      },
      {
        name: schedulerTasksConsts.RESUME.NAME,
        action: () => sendSchedulerAction({
          taskId: currentSchedulerId,
          taskCommand: schedulerTasksConsts.RESUME.TASK_COMMAND,
        }),
        withConfirmation: true,
        confirmationText: `${schedulerTasksConsts.RESUME.NAME} "${currentSchedulerName}"?`,
      },
      { isDivider: true },
      {
        name: 'Delete',
        icon: iconNamesConst.DELETE,
        action: () => deleteSchedulerJob(currentSchedulerId),
        withConfirmation: true,
        confirmationText: `Delete scheduler "${currentSchedulerName}"?`,
      },
    ],
    [
      sendSchedulerAction,
      currentSchedulerName,
      currentSchedulerId,
      deleteSchedulerJob,
      filterScheduledJobsById,
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
      data={schedulerJobsItems}
      columns={tableColumns}
      newModalName={modalNamesConst.ADD_SCHEDULER}
      editModalName={modalNamesConst.EDIT_SCHEDULER}
      contextMenuItems={contextMenuItems}
      filterAction={filterSchedulerJobs}
      isDownloadButton={true}
      isLoading={isLoading}
      initialFilterValues={initialFilterValues}
      FilterForm={
        <SchedulerFilter
          isDisabled={isLoading}
          institutionsOptions={institutionsOptions}
        />
      }
      AdditionalButton={
        <Button
          text="Show scheduler master log"
          iconName={iconNamesConst.SHORT_TEXT}
          onClick={() => getLogData({ name: systemMonitorTables.SCHEDULER_JOBS })}
          disabled={isLoading}
        />
      }
    />
  );
};

export default withModal(Scheduler);
