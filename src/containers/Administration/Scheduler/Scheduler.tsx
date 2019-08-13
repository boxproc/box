import React from 'react';
import { RowInfo } from 'react-table';

import { withSpinner } from 'components/Spinner';
import { Cell, Header } from 'components/Table';
import TablePage from 'components/TablePage';

import { modalNames } from 'consts';

import SchedulerButtonsDropdown from './SchedulerButtonsDropdown';

import {
  AdminSchedulerItem,
  HandleGetAdminSchedulerJobs,
  OpenModal,
} from 'store/domains';

import SchedulerFilter from './SchedulerFilter';

import { TableCell } from 'types';

interface SchedulerProps {
  adminSchedulerJobsItems: Array<Partial<AdminSchedulerItem>>;
  openModal: OpenModal;
  getAdminSchedulerJobs: HandleGetAdminSchedulerJobs;
}

type SCell<T extends keyof AdminSchedulerItem> = TableCell<AdminSchedulerItem[T]>;

export const Scheduler: React.FC<SchedulerProps> = ({
  openModal,
  getAdminSchedulerJobs,
  adminSchedulerJobsItems,
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
        onDoubleClick: () => openModal({
          name: modalNames.EDIT_ADMIN_SCHEDULER,
          payload: { schedulerJobValues: rowInfo.original },
        }),
      };
    },
    [openModal]
  );

  const columns = [
    {
      maxWidth: 100,
      sortable: true,
      filterable: true,
      Header: <Header title="ID" />,
      accessor: 'id',
      Cell: (props: SCell<'id'>) => (
        <Cell
          value={props.value}
          isNumber={true}
        />
      ),
    },
    {
      maxWidth: 130,
      sortable: true,
      filterable: true,
      Header: <Header title="Institution ID" />,
      accessor: 'institutionId',
      Cell: (props: SCell<'institutionId'>) => (
        <Cell
          value={props.value}
        />
      ),
    },
    {
      sortable: true,
      filterable: true,
      Header: <Header title="Name" />,
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
      Header: <Header title="Description" />,
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
      Header: <Header title="Status" />,
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
      Header: <Header title="Cron Expression" />,
      accessor: 'cronExpression',
      Cell: (props: SCell<'cronExpression'>) => (
        <Cell
          value={props.value}
        />
      ),
    },
    {
      sortable: true,
      filterable: true,
      Header: <Header title="Executable Type" />,
      accessor: 'executableType',
      Cell: (props: SCell<'executableType'>) => (
        <Cell
          value={props.value}
        />
      ),
    },
    {
      sortable: true,
      filterable: true,
      Header: <Header title="Executable" />,
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
      Header: <Header title="Log Location" />,
      accessor: 'logLocation',
      Cell: (props: SCell<'logLocation'>) => (
        <Cell
          value={props.value}
        />
      ),
    },
    {
      sortable: true,
      filterable: true,
      Header: <Header title="Last Execution Datetime" />,
      accessor: 'lastExecutionDatetime',
      Cell: (props: SCell<'lastExecutionDatetime'>) => (
        <Cell
          value={props.value}
          isDate={true}
        />
      ),
    },
    {
      sortable: true,
      filterable: true,
      Header: <Header title="Last Execution Result" />,
      accessor: 'lastExecutionResult',
      Cell: (props: SCell<'lastExecutionResult'>) => (
        <Cell
          value={props.value}
        />
      ),
    },
    {
      minWidth: 125,
      accessor: 'executeButton',
      Cell: () => (
        <SchedulerButtonsDropdown />
      ),
    },
  ];

  return (
    <TablePage
      title="Scheduler"
      data={adminSchedulerJobsItems}
      columns={columns}
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
