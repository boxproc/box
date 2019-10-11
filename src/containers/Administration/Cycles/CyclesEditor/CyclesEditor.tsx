import React from 'react';

import { withSpinner } from 'components';

import { modalNamesConst } from 'consts';

import PageTemplate from 'containers/PageTemplate';

import { cycleEditorColumns } from './components';
import { CycleEditorFilter } from './forms';

import {
  AdminCyclesEditorItemPrepared,
  HandleDeleteAdminCycleEditor,
  HandleFilterCycles,
  ResetCycles,
} from 'store/domains';

import { SelectValues } from 'types';

interface CycleEditorProps {
  adminCyclesEditorItems: Array<Partial<AdminCyclesEditorItemPrepared>>;
  institutionsOptions: Array<SelectValues>;
  filterCycles: HandleFilterCycles;
  deleteAdminCyclesEditor: HandleDeleteAdminCycleEditor;
  resetCycles: ResetCycles;
}

export const CyclesEditor: React.FC<CycleEditorProps> = ({
  adminCyclesEditorItems,
  institutionsOptions,
  filterCycles,
  deleteAdminCyclesEditor,
  resetCycles,
}) => {
  React.useEffect(
    () => {
      return () => resetCycles();
    },
    [resetCycles]
  );

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
    <PageTemplate
      title="Cycles"
      data={adminCyclesEditorItems}
      columns={cycleEditorColumns}
      newModalName={modalNamesConst.ADD_ADMIN_CYCLE_EDITOR}
      editModalName={modalNamesConst.EDIT_CYCLE_EDITOR}
      contextMenuItems={contextMenuItems}
      filterAction={filterCycles}
      FilterForm={
        <CycleEditorFilter institutionsOptions={institutionsOptions} />
      }
    />
  );
};

export default withSpinner({
  isFixed: true,
})(CyclesEditor);
