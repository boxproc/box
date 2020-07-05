import React from 'react';

import { Modal } from 'components';
import { IWithModal, withModal } from 'HOCs';

import { modalNamesConst } from 'consts';
import { EndpointForm } from './../../forms';

interface IAddEndpointModal extends IWithModal {
  isFormDirty: boolean;
}

const modalName = modalNamesConst.ADD_ENDPOINT;

const AddEndpointModal: React.FC<IAddEndpointModal> = ({
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
      title="Add Endpoint"
      containerWidth="600px"
      withCloseConfirmation={isFormDirty}
      isBluredBackdrop={true}
    >
      <EndpointForm onCancel={handleOnCancel} />
    </Modal>
  );
};

export default withModal(AddEndpointModal);
