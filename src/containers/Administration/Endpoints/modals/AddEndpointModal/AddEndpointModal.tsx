import React from 'react';

import { Modal } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst } from 'consts';

import { EndpointForm } from 'containers/Administration/Endpoints/forms';

import { SelectValues } from 'types';

interface AddEndpointModalProps extends WithModalProps {
  institutionsOptions: Array<SelectValues>;
  isFormDirty: boolean;
}

const modalName = modalNamesConst.ADD_ENDPOINT;

const AddEndpointModal: React.FC<AddEndpointModalProps> = ({
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
      maxContainerWidth={550}
      withCloseConfirmation={isFormDirty}
    >
      <EndpointForm
        institutionsOptions={institutionsOptions}
        onCancel={handleOnCancel}
        mode="add"
      />
    </Modal>
  );
};

export default withModal(AddEndpointModal);
