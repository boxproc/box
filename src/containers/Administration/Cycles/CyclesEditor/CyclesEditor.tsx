import React from 'react';

import { TablePage, withSpinner } from 'components';

import { modalNames } from 'consts';

import { cycleEditorColumns } from './components';
import { CycleEditorFilter } from './forms';

import {
  AdminCyclesEditorItemPrepared,
  HandleDeleteAdminCycleEditor,
  HandleFilterCycles,
  HandleSetAdminCycleEditorId,
} from 'store/domains/administration/cycles';

import { SelectValues } from 'types';

interface CycleEditorProps {
  adminCyclesEditorItems: Array<Partial<AdminCyclesEditorItemPrepared>>;
  institutionsOptions: Array<SelectValues>;
  setAdminCycleEditorId: HandleSetAdminCycleEditorId;
  filterCycles: HandleFilterCycles;
  deleteAdminCyclesEditor: HandleDeleteAdminCycleEditor;
  isFilterFormDirty: boolean;
}

export const CyclesEditor: React.FC<CycleEditorProps> = ({
  adminCyclesEditorItems,
  institutionsOptions,
  setAdminCycleEditorId,
  filterCycles,
  isFilterFormDirty,
  deleteAdminCyclesEditor,
}) => {
  const contextMenuItems = [
    {
      name: 'Delete',
      icon: 'delete',
      action: deleteAdminCyclesEditor,
      withConfirmation: true,
      confirmationText: `Delete cycle editor record?`,
    },
  ];

  return (
    <TablePage
      title="Cycles"
      data={adminCyclesEditorItems}
      columns={cycleEditorColumns}
      addNewModalName={modalNames.ADD_ADMIN_CYCLE_EDITOR}
      editModalName={modalNames.EDIT_CYCLE_EDITOR}
      setCurrentIdAction={setAdminCycleEditorId}
      contextMenuItems={contextMenuItems}
      FilterForm={
        <CycleEditorFilter
          filterCycles={filterCycles}
          institutionsOptions={institutionsOptions}
          isDirty={isFilterFormDirty}
        />
      }
    />
  );
};

export default withSpinner({
  isFixed: true,
})(CyclesEditor);
