import React from 'react';
import { RowInfo } from 'react-table';

import { theme } from 'theme';

import { withSpinner } from 'components/Spinner';
import { Cell, Header } from 'components/Table';
import TablePage from 'components/TablePage/TablePage';

import { modalNames } from 'consts';

import { OpenModal } from 'store/domains';

import SchedulerFilter from './SchedulerFilter';

import { TableCell } from 'types';

interface SchedulerProps {
  openModal: OpenModal;
}

interface SchedulerItem {
  id: string | number;
  institution_id: string | number;
  name: string;
  description: string;
  status: string;
  cron_expression: string;
  executable_type: string;
  executable: string;
  log_location: string;
  last_execution_datetime: string;
  last_execution_result: string;
}

type SCell<T extends keyof SchedulerItem> = TableCell<SchedulerItem[T]>;

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
      id: 1,
      institution_id: 1,
      name: 'API test Job 1',
      description: 'Job 1 description',
      status: 'A',
      cron_expression: '0 0/10  1/1  ? *',
      executable_type: 'A',
      executable: '',
      log_location: 'test_job1.log',
      last_execution_datetime: '2019-07-12 13:27:18',
      last_execution_result: 'U',
    },
    {
      id: 2,
      institution_id: 2,
      name: 'Shell script test Job 2',
      description: 'Job 2 description',
      status: 'A',
      cron_expression: '0 0/10  1/1  ? *',
      executable_type: 'S',
      executable: '',
      log_location: 'test_job2.log',
      last_execution_datetime: '2019-07-12 13:27:18',
      last_execution_result: 'U',
    },
  ];

  const columns = [
    {
      maxWidth: 80,
      filterable: true,
      Header: <Header title="ID" />,
      accessor: 'id',
      Cell: (props: SCell<'id'>) => (
        <Cell
          value={props.value}
        />
      ),
    },
    {
      maxWidth: 130,
      sortable: true,
      filterable: true,
      Header: <Header title="Institution ID" showSortIcons={true} />,
      accessor: 'institution_id',
      Cell: (props: SCell<'institution_id'>) => (
        <Cell
          value={props.value}
        />
      ),
    },
    {
      sortable: true,
      filterable: true,
      Header: <Header title="Name" showSortIcons={true} />,
      accessor: 'name',
      Cell: (props: SCell<'name'>) => (
        <Cell
          value={props.value}
        />
      ),
    },
    {
      sortable: true,
      filterable: true,
      Header: <Header title="Description" showSortIcons={true} />,
      accessor: 'description',
      Cell: (props: SCell<'description'>) => (
        <Cell
          value={props.value}
        />
      ),
    },
    {
      sortable: true,
      filterable: true,
      Header: <Header title="Status" showSortIcons={true} />,
      accessor: 'status',
      Cell: (props: SCell<'status'>) => (
        <Cell
          value={props.value}
        />
      ),
    },
    {
      sortable: true,
      filterable: true,
      Header: <Header title="Cron Expression" showSortIcons={true} />,
      accessor: 'cron_expression',
      Cell: (props: SCell<'cron_expression'>) => (
        <Cell
          value={props.value}
        />
      ),
    },
    {
      sortable: true,
      filterable: true,
      Header: <Header title="Executable Type" showSortIcons={true} />,
      accessor: 'executable_type',
      Cell: (props: SCell<'executable_type'>) => (
        <Cell
          value={props.value}
        />
      ),
    },
    {
      sortable: true,
      filterable: true,
      Header: <Header title="Executable" showSortIcons={true} />,
      accessor: 'executable',
      Cell: (props: SCell<'executable'>) => (
        <Cell
          value={props.value}
        />
      ),
    },
    {
      sortable: true,
      filterable: true,
      Header: <Header title="Log Location" showSortIcons={true} />,
      accessor: 'log_location',
      Cell: (props: SCell<'log_location'>) => (
        <Cell
          value={props.value}
        />
      ),
    },
    {
      sortable: true,
      filterable: true,
      Header: <Header title="Last Execution Datetime" showSortIcons={true} />,
      accessor: 'last_execution_datetime',
      Cell: (props: SCell<'last_execution_datetime'>) => (
        <Cell
          value={props.value}
          style={{ color: theme.grayColor }}
        />
      ),
    },
    {
      sortable: true,
      filterable: true,
      Header: <Header title="Last Execution Result" showSortIcons={true} />,
      accessor: 'last_execution_result',
      Cell: (props: SCell<'last_execution_result'>) => (
        <Cell
          value={props.value}
        />
      ),
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
        hint="Double Click on Row to Edit Scheduler"
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
