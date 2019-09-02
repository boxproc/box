import React from 'react';

import Modal from 'components/Modal';

import { modalNames, modalTypes } from 'consts';

import { EndpointForm } from 'containers/Administration/Endpoints/forms';

import { AdminEndpointItemDetailsPrepared, CloseModal } from 'store/domains';

import { SelectValues } from 'types';

interface EditAccountModalProps {
  closeModal: CloseModal;
  adminCurrentEndpoint: Partial<AdminEndpointItemDetailsPrepared>;
  institutionsOptions: Array<SelectValues>;
  isFormDirty: boolean;
  adminCurrentEndpointName: string;
}

const modalName = modalNames.EDIT_ADMIN_ENDPOINT;

const EditAccountModal: React.FC<EditAccountModalProps> = ({
  closeModal,
  adminCurrentEndpoint,
  institutionsOptions,
  isFormDirty,
  adminCurrentEndpointName,
}) => {
  const endpointName = adminCurrentEndpointName ? `: "${adminCurrentEndpointName}"` : '';

  return (
    <Modal
      title={`Edit Endpoint${endpointName}`}
      name={modalName}
      type={modalTypes.EDIT_MODAL}
      maxContainerWidth={550}
      withCloseConfirmation={isFormDirty}
    >
      <EndpointForm
        onCancel={() => closeModal(modalName)}
        mode="edit"
        initialValues={adminCurrentEndpoint}
        institutionsOptions={institutionsOptions}
        isDirty={isFormDirty}
        currentEndpointName={adminCurrentEndpointName}
      />
    </Modal>
  );
};

export default EditAccountModal;
