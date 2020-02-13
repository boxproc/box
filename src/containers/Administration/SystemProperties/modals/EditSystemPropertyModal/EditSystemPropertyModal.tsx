import React from 'react';

import { Modal } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst } from 'consts';

import { SystemPropertyForm } from 'containers/Administration/SystemProperties/forms';

interface AddSystemPropertyModalProps extends WithModalProps {
  isFormDirty: boolean;
}

const modalName = modalNamesConst.EDIT_SYSTEM_PROPERTY;

const EditSystemPropertyModal: React.FC<AddSystemPropertyModalProps> = ({
  closeModal,
  isFormDirty,
  isReadOnly,
}) => {
  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  return (
    <Modal
      name={modalName}
      title="Edit System Property"
      containerWidth={550}
      withCloseConfirmation={isFormDirty}
    >
      <SystemPropertyForm
        onCancel={handleOnCancel}
        isEditMode={true}
        isReadOnly={isReadOnly}
      />
    </Modal>
  );
};

export default withModal(EditSystemPropertyModal);
