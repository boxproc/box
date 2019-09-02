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
  isFilterFormDirty: boolean;
}

export const Scheduler: React.FC<SchedulerProps> = ({
  getAdminSchedulerJobs,
  adminSchedulerJobsItems,
  setAdminSchedulerJobId,
  sendAdminSchedulerAction,
  currentSchedulerJobId,
  isFilterFormDirty,
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
      withConfirmation: true,
      confirmationText: 'Execute now?',
    },
    {
      name: 'Execute now and refresh table ',
      action: () => sendAdminSchedulerAction(
        {
          taskId: currentSchedulerJobId,
          taskCommand: 'execute_task',
        },
        { withRefresh: true }
      ),
    },
    {
      name: 'Stop job',
      action: () => sendAdminSchedulerAction({
        taskId: currentSchedulerJobId,
        taskCommand: 'execute_task',
      }),
      withConfirmation: true,
      confirmationText: 'Stop job?',
    },
    {
      name: 'Start job',
      action: () => sendAdminSchedulerAction({
        taskId: currentSchedulerJobId,
        taskCommand: 'execute_task',
      }),
      withConfirmation: true,
      confirmationText: 'Start job?',
    },
    {
      name: 'Pause job',
      action: () => sendAdminSchedulerAction({
        taskId: currentSchedulerJobId,
        taskCommand: 'execute_task',
      }),
      withConfirmation: true,
      confirmationText: 'Pause job?',
    },
    {
      name: 'Resume job',
      action: () => sendAdminSchedulerAction({
        taskId: currentSchedulerJobId,
        taskCommand: 'execute_task',
      }),
      withConfirmation: true,
      confirmationText: 'Resume job?',
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
        <SchedulerFilter
          isDirty={isFilterFormDirty}
        />
      }
    />
  );
};

export default withSpinner({
  isFixed: true,
})(Scheduler);
