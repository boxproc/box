import React from 'react';

import { Modal } from 'components';
import { IWithModal, withModal } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';

import { SystemPropertyForm } from 'containers/Administration/SystemProperties/forms';

interface AddSystemPropertyModalProps extends IWithModal {
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
      containerWidth="550px"
      type={modalTypesConst.VIEWING}
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
