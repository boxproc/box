import React from 'react';

import { TablePage, withSpinner } from 'components';

import { modalNamesConst } from 'consts';

import { cycleEditorColumns } from './components';
import { CycleEditorFilter } from './forms';

import {
  AdminCyclesEditorItemPrepared,
  HandleDeleteAdminCycleEditor,
  HandleFilterCycles,
} from 'store/domains';

import { SelectValues } from 'types';

interface CycleEditorProps {
  adminCyclesEditorItems: Array<Partial<AdminCyclesEditorItemPrepared>>;
  institutionsOptions: Array<SelectValues>;
  filterCycles: HandleFilterCycles;
  deleteAdminCyclesEditor: HandleDeleteAdminCycleEditor;
}

export const CyclesEditor: React.FC<CycleEditorProps> = ({
  adminCyclesEditorItems,
  institutionsOptions,
  filterCycles,
  deleteAdminCyclesEditor,
}) => {
  const contextMenuItems = React.useMemo(
    () => [
      {
        name: 'Delete',
        icon: 'delete',
        action: deleteAdminCyclesEditor,
        withConfirmation: true,
        confirmationText: `Delete cycle editor record?`,
      },
    ],
    [deleteAdminCyclesEditor]
  );

  return (
    <TablePage
      title="Cycles"
      data={adminCyclesEditorItems}
      columns={cycleEditorColumns}
      addNewModalName={modalNamesConst.ADD_ADMIN_CYCLE_EDITOR}
      editModalName={modalNamesConst.EDIT_CYCLE_EDITOR}
      contextMenuItems={contextMenuItems}
      filterAction={filterCycles}
      initialFilterValues={{
        institutionId: institutionsOptions[0],
      }}
      FilterForm={
        <CycleEditorFilter institutionsOptions={institutionsOptions} />
      }
    />
  );
};

export default withSpinner({
  isFixed: true,
})(CyclesEditor);
