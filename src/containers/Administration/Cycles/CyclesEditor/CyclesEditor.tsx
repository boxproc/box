import React from 'react';

import { withSpinner } from 'components/Spinner';
import TablePage from 'components/TablePage';

import { modalNames } from 'consts';

import { cycleEditorColumns } from './components';
import { CycleEditorFilter } from './forms';

import {
  AdminCyclesEditorItemPrepared,
  HandleFilterCycles,
  HandleSetAdminCycleEditorId,
} from 'store/domains/administration/cycles';

import { SelectValues } from 'types';

interface CycleEditorProps {
  adminCyclesEditorItems: Array<Partial<AdminCyclesEditorItemPrepared>>;
  institutionsOptions: Array<SelectValues>;
  setAdminCycleEditorId: HandleSetAdminCycleEditorId;
  filterCycles: HandleFilterCycles;
}

export const CyclesEditor: React.FC<CycleEditorProps> = ({
  adminCyclesEditorItems,
  institutionsOptions,
  setAdminCycleEditorId,
  filterCycles,
}) => {
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
        />
      }
    />
  );
};

export default withSpinner({
  isFixed: true,
})(CyclesEditor);
