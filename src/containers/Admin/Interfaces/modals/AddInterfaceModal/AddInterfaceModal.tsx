import React from 'react';

import { Modal } from 'components';
import { IWithModal, withModal } from 'HOCs';

import { modalNamesConst } from 'consts';
import { InterfaceForm } from './../../forms';

interface IAddInterfaceModal extends IWithModal {
  isFormDirty: boolean;
}

const modalName = modalNamesConst.ADD_INTERFACE;

const AddInterfaceModal: React.FC<IAddInterfaceModal> = ({
  closeModal,
  isFormDirty,
}) => {
  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  return (
    <Modal
      containerWidth="850px"
      name={modalName}
      title="Add Interface"
      withCloseConfirmation={isFormDirty}
      isBluredBackdrop={true}
    >
      <InterfaceForm onCancel={handleOnCancel} />
    </Modal>
  );
};

export default withModal(AddInterfaceModal);
