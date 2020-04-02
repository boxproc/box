import React from 'react';

import { Modal } from 'components';
import { IWithModal, withModal } from 'HOCs';

import { modalNamesConst } from 'consts';
import { EndpointForm } from './../../forms';

import { ISelectValue } from 'types';

interface IAddEndpointModal extends IWithModal {
  institutionsOptions: Array<ISelectValue>;
  isFormDirty: boolean;
}

const modalName = modalNamesConst.ADD_ENDPOINT;

const AddEndpointModal: React.FC<IAddEndpointModal> = ({
  closeModal,
  institutionsOptions,
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
      <EndpointForm
        institutionsOptions={institutionsOptions}
        onCancel={handleOnCancel}
      />
    </Modal>
  );
};

export default withModal(AddEndpointModal);
