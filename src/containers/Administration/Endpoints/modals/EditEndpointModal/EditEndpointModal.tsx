import React from 'react';

import Modal from 'components/Modal';

import { modalNames } from 'consts';

import { EndpointForm } from 'containers/Administration/Endpoints/forms';

import { AdminEndpointItemDetailsPrepared, CloseModal } from 'store/domains';

import { SelectValues } from 'types';

interface EditAccountModalProps {
  closeModal: CloseModal;
  adminCurrentEndpoint: Partial<AdminEndpointItemDetailsPrepared>;
  institutionsOptions: Array<SelectValues>;
}

const modalName = modalNames.EDIT_ADMIN_ENDPOINT;

const EditAccountModal: React.FC<EditAccountModalProps> = ({
  closeModal,
  adminCurrentEndpoint,
  institutionsOptions,
}) => {
  return (
    <Modal
      title="Edit Endpoint"
      name={modalName}
    >
      <EndpointForm
        onCancel={() => closeModal(modalName)}
        mode="edit"
        initialValues={adminCurrentEndpoint}
        institutionsOptions={institutionsOptions}
      />
    </Modal>
  );
};

export default EditAccountModal;
