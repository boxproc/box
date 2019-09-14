import React from 'react';

import { Modal } from 'components';

import { modalNamesConst } from 'consts';

import { DefineCycleEditorForm } from 'containers/Administration/Cycles/CyclesEditor/forms';

import { CloseModal } from 'store/domains';

interface AddCycleEditorModalProps {
  closeModal: CloseModal;
  isDirty: boolean;
}

const modalName = modalNamesConst.ADD_ADMIN_CYCLE_EDITOR;

const AddCycleEditorModal: React.FC<AddCycleEditorModalProps> = ({
  closeModal,
  isDirty,
}) => {
  return (
    <Modal
      name={modalName}
      title="Add Cycle Editor Record"
      maxContainerWidth={550}
      withCloseConfirmation={isDirty}
    >
      <DefineCycleEditorForm
        onCancel={() => closeModal(modalName)}
        mode="add"
        isDirty={isDirty}
      />
    </Modal>
  );
};

export default AddCycleEditorModal;
