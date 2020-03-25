import React from 'react';
import { ImmutableArray } from 'seamless-immutable';

import { Button } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import {
  iconNamesConst,
  modalNamesConst,
  systemMonitorTablesConst,
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
} from 'store';

import { SchedulerFilter } from 'containers/Administration/Scheduler/forms';

import { ISelectValue } from 'types';

const schedulerTasksConsts = {
  EXECUTE_TASK: {
    TASK_COMMAND: 'execute_task',
    NAME: 'Execute now',
  },
  START: {
    TASK_COMMAND: 'start',
    NAME: 'Start job',
  },
  STOP: {
    TASK_COMMAND: 'stop',
    NAME: 'Stop job',
  },
  RESUME: {
    TASK_COMMAND: 'resume',
    NAME: 'Resume job',
  },
  PAUSE: {
    TASK_COMMAND: 'pause',
    NAME: 'Pause job',
  },
};

interface SchedulerProps extends WithModalProps {
  schedulerJobsItems: ImmutableArray<AdminSchedulerItemPrepared>;
  institutionsOptions: Array<ISelectValue>;
  currentSchedulerId: number;
  currentSchedulerName: string;
  isLoading: boolean;
  isReadOnly: boolean;
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
  isReadOnly,
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
          name: systemMonitorTablesConst.SCHEDULER_JOBS,
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
        isDisabled: isReadOnly,
        action: () => sendSchedulerAction({
          taskId: currentSchedulerId,
          taskCommand: schedulerTasksConsts.EXECUTE_TASK.TASK_COMMAND,
        }),
        withConfirmation: true,
        confirmationText: `${schedulerTasksConsts.EXECUTE_TASK.NAME} "${currentSchedulerName}"?`,
      },
      {
        name: `${schedulerTasksConsts.EXECUTE_TASK.NAME} with auto-refresh`,
        isDisabled: isReadOnly,
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
        isDisabled: isReadOnly,
        action: () => sendSchedulerAction({
          taskId: currentSchedulerId,
          taskCommand: schedulerTasksConsts.STOP.TASK_COMMAND,
        }),
        withConfirmation: true,
        confirmationText: `${schedulerTasksConsts.STOP.NAME} "${currentSchedulerName}"?`,
      },
      {
        name: schedulerTasksConsts.START.NAME,
        isDisabled: isReadOnly,
        action: () => sendSchedulerAction({
          taskId: currentSchedulerId,
          taskCommand: schedulerTasksConsts.START.TASK_COMMAND,
        }),
        withConfirmation: true,
        confirmationText: `${schedulerTasksConsts.START.NAME} "${currentSchedulerName}"?`,
      },
      {
        name: schedulerTasksConsts.PAUSE.NAME,
        isDisabled: isReadOnly,
        action: () => sendSchedulerAction({
          taskId: currentSchedulerId,
          taskCommand: schedulerTasksConsts.PAUSE.TASK_COMMAND,
        }),
        withConfirmation: true,
        confirmationText: `${schedulerTasksConsts.PAUSE.NAME} "${currentSchedulerName}"?`,
      },
      {
        name: schedulerTasksConsts.RESUME.NAME,
        isDisabled: isReadOnly,
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
        isDisabled: isReadOnly,
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
      isReadOnly,
    ]
  );

  const initialFilterValues = React.useMemo(
    () => {
      return { institutionId: institutionsOptions[0] };
    },
    [institutionsOptions]
  );

  return (
    <PageTemplate
      title="Scheduler"
      data={schedulerJobsItems}
      columns={tableColumns}
      newModalName={modalNamesConst.ADD_SCHEDULER}
      viewingModalName={modalNamesConst.EDIT_SCHEDULER}
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
          onClick={() => getLogData({ name: systemMonitorTablesConst.SCHEDULER_JOBS })}
          disabled={isLoading}
        />
      }
    />
  );
};

export default withModal(Scheduler);
