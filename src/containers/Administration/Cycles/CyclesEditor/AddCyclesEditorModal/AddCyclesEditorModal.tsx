import React from 'react';

import Modal from 'components/Modal';

import { modalNames } from 'consts';

import { CloseModal } from 'store/domains';

// tslint:disable-next-line
import { DefineCycleEditorForm } from 'containers/Administration/Cycles/CyclesEditor/CyclesEditorComponents';

interface AddCycleEditorModalProps {
  closeModal: CloseModal;
}

const modalName = modalNames.ADD_ADMIN_CYCLE_EDITOR;

const AddCycleEditorModal: React.FC<AddCycleEditorModalProps> = ({
  closeModal,
}) => {
  return (
    <Modal
      name={modalName}
      title="Add Cycle Editor Record"
      maxContainerWidth={800}
      minContainerHeight={410}
    >
      <DefineCycleEditorForm
        onCancel={() => closeModal(modalName)}
        mode="add"
      />
    </Modal>
  );
};

export default AddCycleEditorModal;
