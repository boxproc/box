import React from 'react';

import { Modal } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';

import { EndpointForm } from 'containers/Administration/Endpoints/forms';

import { AdminEndpointItemDetailsPrepared } from 'store/domains';

import { SelectValues } from 'types';

interface EditAccountModalProps extends WithModalProps {
  adminCurrentEndpoint: Partial<AdminEndpointItemDetailsPrepared>;
  institutionsOptions: Array<SelectValues>;
  isFormDirty: boolean;
  adminCurrentEndpointName: string;
}

const modalName = modalNamesConst.EDIT_ADMIN_ENDPOINT;

const EditAccountModal: React.FC<EditAccountModalProps> = ({
  closeModal,
  adminCurrentEndpoint,
  institutionsOptions,
  isFormDirty,
  adminCurrentEndpointName,
}) => {
  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  const endpointName = adminCurrentEndpointName ? `: "${adminCurrentEndpointName}"` : '';

  return (
    <Modal
      title={`Edit Endpoint${endpointName}`}
      name={modalName}
      type={modalTypesConst.EDIT_MODAL}
      maxContainerWidth={550}
      withCloseConfirmation={isFormDirty}
    >
      <EndpointForm
        onCancel={handleOnCancel}
        mode="edit"
        initialValues={adminCurrentEndpoint}
        institutionsOptions={institutionsOptions}
        currentEndpointName={adminCurrentEndpointName}
      />
    </Modal>
  );
};

export default withModal(EditAccountModal);
