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
}

export const Scheduler: React.FC<SchedulerProps> = ({
  getAdminSchedulerJobs,
  adminSchedulerJobsItems,
  setAdminSchedulerJobId,
  sendAdminSchedulerAction,
}) => {
  React.useEffect(
    () => {
      getAdminSchedulerJobs();
    },
    [getAdminSchedulerJobs]
  );

  return (
    <TablePage
      title="Scheduler"
      data={adminSchedulerJobsItems}
      columns={tableColumns}
      hint="Double Click on Row to Edit Scheduler"
      addNewModalName={modalNames.ADD_ADMIN_SCHEDULER}
      editModalName={modalNames.EDIT_ADMIN_SCHEDULER}
      setCurrentIdAction={setAdminSchedulerJobId}
      contextMenuItems={[
        { name: 'Execute now', action: sendAdminSchedulerAction({
          taskId: 0,
          taskCommand: 'execute_task',
        }) },
        // { name: 'Stop job', action: () => console.log('---Stop job') },
        // { name: 'Start job', action: () => console.log('---Start job') },
        // { name: 'Pause job', action: () => console.log('---Pause job') },
        // { name: 'Resume job', action: () => console.log('---Resume job') },
      ]}
      FilterForm={
        <SchedulerFilter />
      }
    />
  );
};

export default withSpinner({
  isFixed: true,
})(Scheduler);
