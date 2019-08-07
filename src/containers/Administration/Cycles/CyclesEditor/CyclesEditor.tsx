import React from 'react';
import { RowInfo } from 'react-table';

import { withSpinner } from 'components/Spinner';
import TablePage from 'components/TablePage';

import { modalNames } from 'consts';

import {
  cycleEditorColumns,
  CycleEditorFilter,
} from './CyclesEditorComponents';

import {
  AdminCyclesEditorItem,
  HandleGetAdminCyclesEditor,
} from 'store/domains/administration/cycles';

import { OpenModal } from 'store/domains';

import { SelectValues } from 'types';

interface CycleEditorProps {
  adminCyclesEditorItems: Array<AdminCyclesEditorItem>;
  openModal: OpenModal;
  getAdminCyclesEditor: HandleGetAdminCyclesEditor;
  institutionsOptions: Array<SelectValues>;
}

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
          payload: { cycleEditorValues: rowInfo.original },
        }),
      };
    },
    [openModal]
  );

  return (
    <TablePage
      title="Cycles Editor"
      data={adminCyclesEditorItems}
      columns={cycleEditorColumns}
      addNewModalName={modalNames.ADD_ADMIN_CYCLE_EDITOR}
      getTrGroupProps={handleOnClickRow}
      hint="Double Click on Row to Edit Cycle Editor or Delete Record"
      FilterForm={
        <CycleEditorFilter
          institutionsOptions={institutionsOptions}
          initialValues={{
            institutionId: institutionsOptions[0],
          }}
        />
      }
    />
  );
};

export default withSpinner({
  isFixed: true,
})(CyclesEditor);
