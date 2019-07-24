import React from 'react';

import { Button } from 'components/Buttons';
import Modal from 'components/Modal';
import { withSpinner } from 'components/Spinner';
import { Hr } from 'components/Text';

import { modalNames } from 'consts';

// tslint:disable-next-line: max-line-length
import AddCyclesEditorForm from 'containers/Administration/Cycles/CyclesEditor/DefineCycleEditorForm';
import {
   CloseModal,
   HandleDeleteAdminCycleEditor,
   HandleUpdateAdminCyclesEditor
} from 'store/domains';

interface EditSchedulerModalProps {
  closeModal: CloseModal;
  deleteAdminCyclesEditor: HandleDeleteAdminCycleEditor;
  updateAdminCyclesEditor: HandleUpdateAdminCyclesEditor;
  cyclesEditorValues: any;
}

const EditCyclesEditorModal: React.FC<EditSchedulerModalProps> = ({
  closeModal,
  deleteAdminCyclesEditor,
  updateAdminCyclesEditor,
  cyclesEditorValues,
}) => {
  return (
    <Modal
      name={modalNames.EDIT_CYCLE_EDITOR}
      title="Edit"
      maxContainerWidth={700}
    >
      <AddCyclesEditorForm
        onCancel={() => closeModal(modalNames.EDIT_CYCLE_EDITOR)}
        defineAdminCyclesEditor={updateAdminCyclesEditor}
        initialValues={cyclesEditorValues}
        isDisabledInstitutions={true}

      />
      <Hr />
      <Button
        text="delete"
        iconName="delete"
        onClick={() => deleteAdminCyclesEditor(cyclesEditorValues.id)}
      />
    </Modal>
  );
};

export default withSpinner({
  isFixed: true,
})(EditCyclesEditorModal);
