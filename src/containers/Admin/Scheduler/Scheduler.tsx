import React from 'react';
import { ImmutableArray } from 'seamless-immutable';

import { Button } from 'components';
import { IWithModal, withModal } from 'HOCs';

import {
  iconNamesConst,
  modalNamesConst,
  systemMonitorTablesConst,
} from 'consts';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';
import { schedulerTasksConsts } from './consts';

import {
  HandleGetLogData,
  ISchedulerJob,
  THandleDeleteSchedulerJob,
  THandleExecSchedulerJob,
  THandleFilterScheduledJobsById,
  THandleFilterSchedulerJobs,
  TResetScheduler,
} from 'store';

import { SchedulerFilter } from './forms';

import { ISelectValue } from 'types';

interface IScheduler extends IWithModal {
  currentSchedulerId: number;
  currentSchedulerName: string;
  deleteSchedulerJob: THandleDeleteSchedulerJob;
  execSchedulerJob: THandleExecSchedulerJob;
  filterScheduledJobsById: THandleFilterScheduledJobsById;
  filterSchedulerJobs: THandleFilterSchedulerJobs;
  getLogData: HandleGetLogData;
  institutionsOptions: Array<ISelectValue>;
  isLoading: boolean;
  isReadOnly: boolean;
  resetScheduler: TResetScheduler;
  schedulerJobs: ImmutableArray<ISchedulerJob>;
}

export const Scheduler: React.FC<IScheduler> = ({
  filterSchedulerJobs,
  schedulerJobs,
  execSchedulerJob,
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
        action: () => execSchedulerJob({
          taskId: currentSchedulerId,
          taskCommand: schedulerTasksConsts.EXECUTE_TASK.TASK_COMMAND,
        }),
        withConfirmation: true,
        confirmationText: `${schedulerTasksConsts.EXECUTE_TASK.NAME} "${currentSchedulerName}"?`,
      },
      {
        name: `${schedulerTasksConsts.EXECUTE_TASK.NAME} with auto-refresh`,
        isDisabled: isReadOnly,
        action: () => execSchedulerJob(
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
        action: () => execSchedulerJob({
          taskId: currentSchedulerId,
          taskCommand: schedulerTasksConsts.STOP.TASK_COMMAND,
        }),
        withConfirmation: true,
        confirmationText: `${schedulerTasksConsts.STOP.NAME} "${currentSchedulerName}"?`,
      },
      {
        name: schedulerTasksConsts.START.NAME,
        isDisabled: isReadOnly,
        action: () => execSchedulerJob({
          taskId: currentSchedulerId,
          taskCommand: schedulerTasksConsts.START.TASK_COMMAND,
        }),
        withConfirmation: true,
        confirmationText: `${schedulerTasksConsts.START.NAME} "${currentSchedulerName}"?`,
      },
      {
        name: schedulerTasksConsts.PAUSE.NAME,
        isDisabled: isReadOnly,
        action: () => execSchedulerJob({
          taskId: currentSchedulerId,
          taskCommand: schedulerTasksConsts.PAUSE.TASK_COMMAND,
        }),
        withConfirmation: true,
        confirmationText: `${schedulerTasksConsts.PAUSE.NAME} "${currentSchedulerName}"?`,
      },
      {
        name: schedulerTasksConsts.RESUME.NAME,
        isDisabled: isReadOnly,
        action: () => execSchedulerJob({
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
      execSchedulerJob,
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
      data={schedulerJobs}
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
