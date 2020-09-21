import React from 'react';

import { Modal } from 'components';
import { IWithModal, withModal } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';
import { SystemPropertyForm } from './../../forms';

interface IEditSystemPropertyModal extends IWithModal {
  isFormDirty: boolean;
}

const modalName = modalNamesConst.EDIT_SYSTEM_PROPERTY;

const EditSystemPropertyModal: React.FC<IEditSystemPropertyModal> = ({
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
      title="System Property"
      containerWidth="600px"
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
