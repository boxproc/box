import React from 'react';

import { Modal } from 'components';

import { modalNames, modalTypes } from 'consts';

import { DefineCycleEditorForm } from 'containers/Administration/Cycles/CyclesEditor/forms';

import { AdminCyclesEditorEditableItem, CloseModal } from 'store/domains';

interface EditSchedulerModalProps {
  closeModal: CloseModal;
  cycleEditorValues: Partial<AdminCyclesEditorEditableItem>;
  isFormDirty: boolean;
}

const modalName = modalNames.EDIT_CYCLE_EDITOR;

const EditCyclesEditorModal: React.FC<EditSchedulerModalProps> = ({
  closeModal,
  cycleEditorValues,
  isFormDirty,
}) => {

  return (
    <Modal
      name={modalName}
      type={modalTypes.EDIT_MODAL}
      title="Edit Cycle"
      maxContainerWidth={550}
      withCloseConfirmation={isFormDirty}
    >
      <DefineCycleEditorForm
        onCancel={() => closeModal(modalName)}
        initialValues={cycleEditorValues}
        isDirty={isFormDirty}
        mode="edit"
      />
    </Modal>
  );
};

export default EditCyclesEditorModal;
