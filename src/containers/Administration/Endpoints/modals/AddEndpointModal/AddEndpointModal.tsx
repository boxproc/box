import React from 'react';

import { Modal } from 'components';

import { modalNamesConst } from 'consts';

import { EndpointForm } from 'containers/Administration/Endpoints/forms';

import { CloseModal } from 'store/domains';

import { SelectValues } from 'types';

interface AddEndpointModalProps {
  closeModal: CloseModal;
  institutionsOptions: Array<SelectValues>;
  isDirty: boolean;
}

const modalName = modalNamesConst.ADD_ADMIN_ENDPOINT;

const AddEndpointModal: React.FC<AddEndpointModalProps> = ({
  closeModal,
  institutionsOptions,
  isDirty,
}) => {
  return (
    <Modal
      name={modalName}
      title="Add Endpoint"
      maxContainerWidth={550}
      withCloseConfirmation={isDirty}
    >
      <EndpointForm
        institutionsOptions={institutionsOptions}
        isDirty={isDirty}
        onCancel={() => closeModal(modalName)}
        mode="add"
      />
    </Modal>
  );
};

export default AddEndpointModal;
