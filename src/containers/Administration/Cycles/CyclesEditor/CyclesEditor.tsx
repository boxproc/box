import React from 'react';

import { withSpinner } from 'components/Spinner';
import TablePage from 'components/TablePage';

import { modalNames } from 'consts';

import { cycleEditorColumns } from './components';
import { CycleEditorFilter } from './forms';

import {
  AdminCyclesEditorItemPrepared,
  HandleGetAdminCyclesEditor,
  HandleSetAdminCycleEditorId,
} from 'store/domains/administration/cycles';

import { SelectValues } from 'types';

interface CycleEditorProps {
  adminCyclesEditorItems: Array<Partial<AdminCyclesEditorItemPrepared>>;
  getAdminCyclesEditor: HandleGetAdminCyclesEditor;
  institutionsOptions: Array<SelectValues>;
  setAdminCycleEditorId: HandleSetAdminCycleEditorId;
}

export const CyclesEditor: React.FC<CycleEditorProps> = ({
  getAdminCyclesEditor,
  adminCyclesEditorItems,
  institutionsOptions,
  setAdminCycleEditorId,
}) => {
  React.useEffect(
    () => {
      getAdminCyclesEditor();
    },
    [getAdminCyclesEditor]
  );

  return (
    <TablePage
      title="Cycles Editor"
      data={adminCyclesEditorItems}
      columns={cycleEditorColumns}
      hint="Double Click on Row to Edit Cycle Editor or Delete Record"
      addNewModalName={modalNames.ADD_ADMIN_CYCLE_EDITOR}
      editModalName={modalNames.EDIT_CYCLE_EDITOR}
      setCurrentIdAction={setAdminCycleEditorId}
      withOpenModalOnDoubleClick={true}
      withContextMenu={true}
      contextMenuItems={[
        { name: 'Edit' },
      ]}
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
