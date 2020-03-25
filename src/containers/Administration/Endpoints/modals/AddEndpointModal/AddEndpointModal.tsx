import React from 'react';

import { Modal } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst } from 'consts';

import { EndpointForm } from 'containers/Administration/Endpoints/forms';

import { ISelectValue } from 'types';

interface AddEndpointModalProps extends WithModalProps {
  institutionsOptions: Array<ISelectValue>;
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
      containerWidth="600px"
      withCloseConfirmation={isFormDirty}
    >
      <EndpointForm
        institutionsOptions={institutionsOptions}
        onCancel={handleOnCancel}
      />
    </Modal>
  );
};

export default withModal(AddEndpointModal);
