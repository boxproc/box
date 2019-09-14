import React from 'react';

import { Modal } from 'components';

import { modalNamesConst, modalTypesConst } from 'consts';

import { EndpointForm } from 'containers/Administration/Endpoints/forms';

import { AdminEndpointItemDetailsPrepared, CloseModal } from 'store/domains';

import { SelectValues } from 'types';

interface EditAccountModalProps {
  closeModal: CloseModal;
  adminCurrentEndpoint: Partial<AdminEndpointItemDetailsPrepared>;
  institutionsOptions: Array<SelectValues>;
  isDirty: boolean;
  adminCurrentEndpointName: string;
}

const modalName = modalNamesConst.EDIT_ADMIN_ENDPOINT;

const EditAccountModal: React.FC<EditAccountModalProps> = ({
  closeModal,
  adminCurrentEndpoint,
  institutionsOptions,
  isDirty,
  adminCurrentEndpointName,
}) => {
  const endpointName = adminCurrentEndpointName ? `: "${adminCurrentEndpointName}"` : '';

  return (
    <Modal
      title={`Edit Endpoint${endpointName}`}
      name={modalName}
      type={modalTypesConst.EDIT_MODAL}
      maxContainerWidth={550}
      withCloseConfirmation={isDirty}
    >
      <EndpointForm
        onCancel={() => closeModal(modalName)}
        mode="edit"
        initialValues={adminCurrentEndpoint}
        institutionsOptions={institutionsOptions}
        isDirty={isDirty}
        currentEndpointName={adminCurrentEndpointName}
      />
    </Modal>
  );
};

export default EditAccountModal;
