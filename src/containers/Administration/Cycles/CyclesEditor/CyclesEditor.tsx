import React from 'react';
import { RowInfo } from 'react-table';

// import { theme } from 'theme';

import { withSpinner } from 'components/Spinner';
import { Cell, Header } from 'components/Table';
import TablePage from 'components/TablePage/TablePage';

import { modalNames } from 'consts';

import { AdminCyclesEditorItem,
  HandleGetAdminCyclesEditor,
} from 'store/domains/administration/cycles';

import {
  OpenModal,
} from 'store/domains/';

import { SelectValues, TableCell } from 'types';
import CycleEditorFilter from './CycleEditorFilter';

interface CycleEditorProps {
  adminCyclesEditorItems: Array<Partial<AdminCyclesEditorItem>>;
  openModal: OpenModal;
  getAdminCyclesEditor: HandleGetAdminCyclesEditor;
  institutionsOptions: Array<SelectValues>;
}

type SCell<T extends keyof AdminCyclesEditorItem> = TableCell<AdminCyclesEditorItem[T]>;

export const CyclesEditor: React.FC<CycleEditorProps> = ({
  openModal,
  getAdminCyclesEditor,
  adminCyclesEditorItems,
  institutionsOptions,
}) => {
  React.useEffect(
    () => {
      getAdminCyclesEditor();
    },
    [getAdminCyclesEditor]
  );

  const handleOnClickRow = React.useCallback(
    (_, rowInfo: RowInfo) => {
      return {
        onDoubleClick: () => openModal({
          name: modalNames.EDIT_CYCLE_EDITOR,
          payload: {cycleEditorValues: rowInfo.original},
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
      Header: <Header title="Cycle Type" showSortIcons={true} />,
      accessor: 'cycleType',
      Cell: (props: SCell<'cycleType'>) => (
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
      Header: <Header title="Monthly Cycle first day" showSortIcons={true} />,
      accessor: 'monthlyCycleFirstDay',
      Cell: (props: SCell<'monthlyCycleFirstDay'>) => (
        <Cell
          value={props.value}
        />
      ),
    },
    {
      sortable: true,
      filterable: true,
      Header: <Header title="Weekly Cycle first day" showSortIcons={true} />,
      accessor: 'weeklyCycleFirstDay',
      Cell: (props: SCell<'weeklyCycleFirstDay'>) => (
        <Cell
          value={props.value}
        />
      ),
    },
    {
      sortable: true,
      filterable: true,
      Header: <Header title="Fixed Cycle number of days" showSortIcons={true} />,
      accessor: 'fixedCycleNumberOfDays',
      Cell: (props: SCell<'fixedCycleNumberOfDays'>) => (
        <Cell
          value={props.value}
        />
      ),
    },
  ];

  return (
    <TablePage
      title="Cycles Editor"
      data={adminCyclesEditorItems}
      columns={columns}
      addNewModalName={modalNames.ADD_ADMIN_CYCLE_EDITOR}
      openModal={openModal}
      getTrGroupProps={handleOnClickRow}
      hint="Double Click on Row to Edit Cycle Editor or Delete record"
      FilterForm={
        <CycleEditorFilter
          institutionsOptions={institutionsOptions}
        />
      }
    />
  );
};

export default withSpinner({
  isFixed: true,
})(CyclesEditor);
