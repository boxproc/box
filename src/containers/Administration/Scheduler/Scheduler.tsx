import React from 'react';
import { RowInfo } from 'react-table';

import { withSpinner } from 'components/Spinner';
import { Header } from 'components/Table';
import TablePage from 'components/TablePage/TablePage';

import { modalNames } from 'consts';

import { OpenModal } from 'store/domains';

import SchedulerFilter from './SchedulerFilter';

interface SchedulerProps {
  openModal: OpenModal;
}

export const Scheduler: React.FC<SchedulerProps> = ({
  openModal,
}) => {
  const handleOnClickRow = React.useCallback(
    (_, rowInfo: RowInfo) => {
      return {
        onDoubleClick: () => openModal({
          name: modalNames.EDIT_SCHEDULER,
        }),
      };
    },
    [openModal]
  );

  const data = [
    {
      id: '1',
      instituion_id: '1',
      name: 'API test Job 1',
      description: 'Job 1 description',
      status: 'A',
      cron_expression: '0 0/10  1/1  ? *',
      executable_type: 'A',
      executable: '',
      log_location: 'test_job1.log',
      last_execution_datetime: '2019-07-12 13:27:18',
      last_execition_result: 'U',
    },
    {
      id: '2',
      instituion_id: '2',
      name: 'Shell script test Job 2',
      description: 'Job 2 description',
      status: 'A',
      cron_expression: '0 0/10  1/1  ? *',
      executable_type: 'S',
      executable: '',
      log_location: 'test_job2.log',
      last_execution_datetime: '2019-07-12 13:27:18',
      last_execition_result: 'U',
    },
  ];

  const columns = [
    {
      maxWidth: 60,
      filterable: true,
      Header: <Header title="ID" />,
      accessor: 'id',
    },
    {
      sortable: true,
      filterable: true,
      Header: <Header title="Institution ID" showSortIcons={true} />,
      accessor: 'institution_id',
    },
    {
      sortable: true,
      filterable: true,
      Header: <Header title="Name" showSortIcons={true} />,
      accessor: 'name',
    },
    {
      sortable: true,
      filterable: true,
      Header: <Header title="Description" showSortIcons={true} />,
      accessor: 'description',
    },
    {
      sortable: true,
      filterable: true,
      Header: <Header title="Status" showSortIcons={true} />,
      accessor: 'status',
    },
    {
      sortable: true,
      filterable: true,
      Header: <Header title="Cron Expression" showSortIcons={true} />,
      accessor: 'cron_expression',
    },
    {
      sortable: true,
      filterable: true,
      Header: <Header title="Executable Type" showSortIcons={true} />,
      accessor: 'executable_type',
    },
    {
      sortable: true,
      filterable: true,
      Header: <Header title="Executable" showSortIcons={true} />,
      accessor: 'executable',
    },
    {
      sortable: true,
      filterable: true,
      Header: <Header title="Log Location" showSortIcons={true} />,
      accessor: 'log_location',
    },
    {
      sortable: true,
      filterable: true,
      Header: <Header title="Last Execution Datetime" showSortIcons={true} />,
      accessor: 'last_execution_datetime',
    },
    {
      sortable: true,
      filterable: true,
      Header: <Header title="Last Execition Result" showSortIcons={true} />,
      accessor: 'last_execition_result',
    },
  ];

  return (
    <React.Fragment>
      <TablePage
        title="Scheduler"
        data={data}
        columns={columns}
        addNewModalName={modalNames.ADD_SCHEDULER}
        openModal={openModal}
        getTrGroupProps={handleOnClickRow}
        hint="Double Click on Row to Edit"
        FilterForm={
          <SchedulerFilter />
        }
      />
    </React.Fragment >
  );
};

export default withSpinner({
  isFixed: true,
})(Scheduler);
