import React from 'react';

import { Modal } from 'components';

import { modalNamesConst, modalTypesConst } from 'consts';

import { DefineCycleEditorForm } from 'containers/ProductDesigner/Cycles/forms';
import { withModal, WithModalProps } from 'HOCs';

import { CyclesEditorEditableItem } from 'store/domains';

interface EditSchedulerModalProps extends WithModalProps {
  cycleEditorValues: Partial<CyclesEditorEditableItem>;
  isFormDirty: boolean;
}

const modalName = modalNamesConst.EDIT_CYCLE_EDITOR;

const EditCyclesEditorModal: React.FC<EditSchedulerModalProps> = ({
  closeModal,
  cycleEditorValues,
  isFormDirty,
}) => {
  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  return (
    <Modal
      name={modalName}
      type={modalTypesConst.EDIT_MODAL}
      title="Edit Cycle"
      maxContainerWidth={480}
      withCloseConfirmation={isFormDirty}
    >
      <DefineCycleEditorForm
        onCancel={handleOnCancel}
        initialValues={cycleEditorValues}
        mode="edit"
      />
    </Modal>
  );
};

export default withModal(EditCyclesEditorModal);
