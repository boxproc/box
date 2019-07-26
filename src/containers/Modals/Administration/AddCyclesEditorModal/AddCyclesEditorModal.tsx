import React from 'react';

import Modal from 'components/Modal';
import { modalNames } from 'consts';

import { withSpinner } from 'components/Spinner';

import { CloseModal, HandleAddAdminCyclesEditor, } from 'store/domains';

// tslint:disable-next-line: max-line-length
import DefineCycleEditorForm from 'containers/Administration/Cycles/CyclesEditor/DefineCycleEditorForm';
import { SelectValues } from 'types';

interface AddCycleEditorModalProps {
  closeModal: CloseModal;
  addAdminCyclesEditor: HandleAddAdminCyclesEditor;
  institutionsOptions: Array<SelectValues>;
  // adminCycleEditorItems: Array<AdminCyclesEditorItem>;
  cyclesEditorValue: any;
}

const AddCycleEditorModal: React.FC<AddCycleEditorModalProps> = ({
   closeModal,
   addAdminCyclesEditor,
   institutionsOptions,
   cyclesEditorValue,
}) => {
  return (
    <Modal
      name={modalNames.ADD_ADMIN_CYCLE_EDITOR}
      title="Add Cycle Editor record"
      maxContainerWidth={800}
    >
      <DefineCycleEditorForm
        onCancel={() => closeModal(modalNames.ADD_ADMIN_CYCLE_EDITOR)}
        defineAdminCyclesEditor={addAdminCyclesEditor}
        institutionsOptions={institutionsOptions}
        cyclesEditorValue={cyclesEditorValue}
      />
    </Modal>
  );
};

export default withSpinner({
  isFixed: true,
})(AddCycleEditorModal);
