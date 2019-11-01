import React from 'react';

import { withSpinner } from 'components';

import { iconNamesConst, modalNamesConst } from 'consts';

import PageTemplate from 'containers/PageTemplate';

import { cycleEditorColumns } from './components';
import { CycleEditorFilter } from './forms';

import {
  CyclesEditorItemPrepared,
  HandleDeleteCycleEditor,
  HandleFilterCycles,
  ResetCycles,
} from 'store/domains';

import { SelectValues } from 'types';

interface CycleEditorProps {
  cyclesEditorItems: Array<Partial<CyclesEditorItemPrepared>>;
  institutionsOptions: Array<SelectValues>;
  filterCycles: HandleFilterCycles;
  deleteCyclesEditor: HandleDeleteCycleEditor;
  resetCycles: ResetCycles;
}

export const CyclesEditor: React.FC<CycleEditorProps> = ({
  cyclesEditorItems,
  institutionsOptions,
  filterCycles,
  deleteCyclesEditor,
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
        icon: iconNamesConst.DELETE,
        action: deleteCyclesEditor,
        withConfirmation: true,
        confirmationText: `Delete cycle record?`,
      },
    ],
    [deleteCyclesEditor]
  );

  return (
    <PageTemplate
      title="Cycles"
      data={cyclesEditorItems}
      columns={cycleEditorColumns}
      newModalName={modalNamesConst.ADD_CYCLE_EDITOR}
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
