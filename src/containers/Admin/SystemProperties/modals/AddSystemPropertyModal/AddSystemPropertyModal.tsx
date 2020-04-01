import React from 'react';

import { Modal } from 'components';
import { IWithModal, withModal } from 'HOCs';

import { modalNamesConst } from 'consts';
import { SystemPropertyForm } from '../../forms';

interface IAddSystemPropertyModal extends IWithModal {
  isFormDirty: boolean;
}

const modalName = modalNamesConst.ADD_SYSTEM_PROPERTY;

const AddSystemPropertyModal: React.FC<IAddSystemPropertyModal> = ({
  closeModal,
  isFormDirty,
}) => {
  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  return (
    <Modal
      name={modalName}
      title="Add System Property"
      containerWidth="600px"
      withCloseConfirmation={isFormDirty}
      isBluredBackdrop={true}
    >
      <SystemPropertyForm onCancel={handleOnCancel} />
    </Modal>
  );
};

export default withModal(AddSystemPropertyModal);
