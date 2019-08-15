import React from 'react';
import { RowInfo } from 'react-table';

import { withSpinner } from 'components/Spinner';
import TablePage from 'components/TablePage';

import { modalNames } from 'consts';

import { tableColumns } from 'containers/Administration/Scheduler/components';

import {
  AdminSchedulerItemPrepared,
  HandleGetAdminSchedulerJobs,
  HandleSetAdminSchedulerJobId,
  OpenModal,
} from 'store/domains';

import { SchedulerFilter } from 'containers/Administration/Scheduler/forms';

interface SchedulerProps {
  adminSchedulerJobsItems: Array<AdminSchedulerItemPrepared>;
  getAdminSchedulerJobs: HandleGetAdminSchedulerJobs;
  setAdminSchedulerJobId: HandleSetAdminSchedulerJobId;
  openModal: OpenModal;
}

export const Scheduler: React.FC<SchedulerProps> = ({
  openModal,
  getAdminSchedulerJobs,
  adminSchedulerJobsItems,
  setAdminSchedulerJobId,
}) => {
  React.useEffect(
    () => {
      getAdminSchedulerJobs();
    },
    [getAdminSchedulerJobs]
  );

  const handleOnClickRow = React.useCallback(
    (_, rowInfo: RowInfo) => {
      return {
        onDoubleClick: () => {
          setAdminSchedulerJobId(rowInfo.original.id);
          openModal({
            name: modalNames.EDIT_ADMIN_SCHEDULER,
          });
        },
      };
    },
    [openModal, setAdminSchedulerJobId]
  );

  return (
    <TablePage
      title="Scheduler"
      data={adminSchedulerJobsItems}
      columns={tableColumns}
      addNewModalName={modalNames.ADD_ADMIN_SCHEDULER}
      getTrGroupProps={handleOnClickRow}
      hint="Double Click on Row to Edit Scheduler"
      FilterForm={
        <SchedulerFilter />
      }
    />
  );
};

export default withSpinner({
  isFixed: true,
})(Scheduler);
