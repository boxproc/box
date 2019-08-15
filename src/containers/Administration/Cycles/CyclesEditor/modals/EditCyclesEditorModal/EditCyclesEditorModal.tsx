import React from 'react';

import Modal from 'components/Modal';

import { modalNames } from 'consts';

import { DefineCycleEditorForm } from 'containers/Administration/Cycles/CyclesEditor/components';

import { CloseModal } from 'store/domains';

interface EditSchedulerModalProps {
  closeModal: CloseModal;
}

const modalName = modalNames.EDIT_CYCLE_EDITOR;

const EditCyclesEditorModal: React.FC<EditSchedulerModalProps> = ({
  closeModal,
}) => {

  return (
    <Modal
      name={modalName}
      title="Edit Cycle Editor Record"
      maxContainerWidth={550}
    >
      <DefineCycleEditorForm
        onCancel={() => closeModal(modalName)}
        isDisabledInstitutions={true}
        isDisabledStatus={true}
        isDisabledType={true}
        mode="edit"
      />
    </Modal>
  );
};

export default EditCyclesEditorModal;
