import React from 'react';
import { RowInfo } from 'react-table';

import { theme } from 'theme';

import { withSpinner } from 'components/Spinner';
import { Cell, Header } from 'components/Table';
import TablePage from 'components/TablePage/TablePage';

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
          payload: {schedulerJobValues: rowInfo.original},
        }),
      };
    },
    [openModal]
  );

  const columns = [
    {
      maxWidth: 80,
      sortable: true,
      filterable: true,
      Header: <Header title="ID" showSortIcons={true} />,
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
      Header: <Header title="Executable Type" showSortIcons={true} />,
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
      Header: <Header title="Last Execution Datetime" showSortIcons={true} />,
      accessor: 'lastExecutionDatetime',
      Cell: (props: SCell<'lastExecutionDatetime'>) => (
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
      openModal={openModal}
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
