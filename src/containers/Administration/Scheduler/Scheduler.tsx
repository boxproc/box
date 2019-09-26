import React from 'react';

import { TablePage, withSpinner } from 'components';

import { modalNamesConst } from 'consts';

import { tableColumns } from 'containers/Administration/Scheduler/components';

import {
  AdminSchedulerItemPrepared,
  HandleDeleteAdminSchedulerJob,
  HandleFilterAdminSchedulerJobs,
  HandleSendAdminSchedulerAction,
} from 'store/domains';

import { SchedulerFilter } from 'containers/Administration/Scheduler/forms';

interface SchedulerProps {
  adminSchedulerJobsItems: Array<AdminSchedulerItemPrepared>;
  filterAdminSchedulerJobs: HandleFilterAdminSchedulerJobs;
  sendAdminSchedulerAction: HandleSendAdminSchedulerAction;
  deleteAdminSchedulerJob: HandleDeleteAdminSchedulerJob;
  currentSchedulerJobId: number;
  currentSchedulerName: string;
}

export const Scheduler: React.FC<SchedulerProps> = ({
  filterAdminSchedulerJobs,
  adminSchedulerJobsItems,
  sendAdminSchedulerAction,
  currentSchedulerJobId,
  deleteAdminSchedulerJob,
  currentSchedulerName,
}) => {
  const contextMenuItems = React.useMemo(
    () => [
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
          }
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
      {
        name: 'Delete',
        icon: 'delete',
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
      addNewModalName={modalNamesConst.ADD_ADMIN_SCHEDULER}
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
