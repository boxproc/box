import React from 'react';

import Modal from 'components/Modal';

import { modalNames } from 'consts';

import { CloseModal } from 'store/domains';
import { SelectValues } from 'types';
import EndpointForm from '../../forms/EnpointForm';

interface AddEndpointModalProps {
  closeModal: CloseModal;
  institutionsOptions: Array<SelectValues>;
}

const modalName = modalNames.ADD_ADMIN_ENDPOINT;

const AddEndpointModal: React.FC<AddEndpointModalProps> = ({
  closeModal,
  institutionsOptions,
}) => {
  return (
    <Modal
      name={modalName}
      title="Add Endpoint"
      maxContainerWidth={980}
      minContainerHeight={400}
    >
      <EndpointForm
        institutionsOptions={institutionsOptions}
        initialValues={{
          institutionId: institutionsOptions && institutionsOptions[0],
        }}
        onCancel={() => closeModal(modalName)}
        mode="add"
      />
    </Modal>
  );
};

export default AddEndpointModal;
