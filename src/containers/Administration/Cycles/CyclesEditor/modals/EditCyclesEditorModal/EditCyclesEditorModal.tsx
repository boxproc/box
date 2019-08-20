import React from 'react';

import Modal from 'components/Modal';

import { modalNames } from 'consts';

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
      title="Edit Cycle Editor Record"
      maxContainerWidth={550}
      withCloseConfirmation={isFormDirty}
    >
      <DefineCycleEditorForm
        onCancel={() => closeModal(modalName)}
        initialValues={cycleEditorValues}
        isDisabledInstitutions={true}
        isDisabledStatus={true}
        isDisabledType={true}
        isDirty={isFormDirty}
        mode="edit"
      />
    </Modal>
  );
};

export default EditCyclesEditorModal;
