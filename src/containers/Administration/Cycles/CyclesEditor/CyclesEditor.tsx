import React from 'react';
import { RowInfo } from 'react-table';

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

import { OpenModal } from 'store/domains';

import { SelectValues } from 'types';

interface CycleEditorProps {
  adminCyclesEditorItems: Array<Partial<AdminCyclesEditorItemPrepared>>;
  openModal: OpenModal;
  getAdminCyclesEditor: HandleGetAdminCyclesEditor;
  institutionsOptions: Array<SelectValues>;
  setAdminCycleEditorId: HandleSetAdminCycleEditorId;
}

export const CyclesEditor: React.FC<CycleEditorProps> = ({
  openModal,
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

  const handleOnClickRow = React.useCallback(
    (_, rowInfo: RowInfo) => {
      return {
        onDoubleClick: () => {
          setAdminCycleEditorId(rowInfo.original.id);
          openModal({
            name: modalNames.EDIT_CYCLE_EDITOR,
          });
        },
      };
    },
    [openModal, setAdminCycleEditorId]
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
