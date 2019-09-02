import React from 'react';

import { withSpinner } from 'components/Spinner';
import TablePage from 'components/TablePage';

import { modalNames } from 'consts';

import { cycleEditorColumns } from './components';
import { CycleEditorFilter } from './forms';

import {
  AdminCyclesEditorItemPrepared,
  HandleFilterCycles,
  HandleGetAdminCyclesEditor,
  HandleSetAdminCycleEditorId,
} from 'store/domains/administration/cycles';

import { SelectValues } from 'types';

interface CycleEditorProps {
  adminCyclesEditorItems: Array<Partial<AdminCyclesEditorItemPrepared>>;
  getAdminCyclesEditor: HandleGetAdminCyclesEditor;
  institutionsOptions: Array<SelectValues>;
  setAdminCycleEditorId: HandleSetAdminCycleEditorId;
  filterCycles: HandleFilterCycles;
}

export const CyclesEditor: React.FC<CycleEditorProps> = ({
  getAdminCyclesEditor,
  adminCyclesEditorItems,
  institutionsOptions,
  setAdminCycleEditorId,
  filterCycles,
}) => {
  React.useEffect(
    () => {
      getAdminCyclesEditor();
    },
    [getAdminCyclesEditor]
  );

  return (
    <TablePage
      title="Cycles"
      data={adminCyclesEditorItems}
      columns={cycleEditorColumns}
      addNewModalName={modalNames.ADD_ADMIN_CYCLE_EDITOR}
      editModalName={modalNames.EDIT_CYCLE_EDITOR}
      setCurrentIdAction={setAdminCycleEditorId}
      FilterForm={
        <CycleEditorFilter
          filterCycles={filterCycles}
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
