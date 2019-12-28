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

const modalName = modalNamesConst.EDIT_ENDPOINT;

const EditAccountModal: React.FC<EditAccountModalProps> = ({
  closeModal,
  isReadOnly,
  adminCurrentEndpoint,
  institutionsOptions,
  isFormDirty,
  adminCurrentEndpointName,
}) => {
  const endpointName = React.useMemo(
    () => adminCurrentEndpointName ? `: "${adminCurrentEndpointName}"` : '',
    [adminCurrentEndpointName]
  );

  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  return (
    <Modal
      title={`Edit Endpoint${endpointName}`}
      name={modalName}
      type={modalTypesConst.EDIT_MODAL}
      maxContainerWidth={600}
      withCloseConfirmation={isFormDirty}
    >
      <EndpointForm
        onCancel={handleOnCancel}
        mode="edit"
        initialValues={adminCurrentEndpoint}
        institutionsOptions={institutionsOptions}
        currentEndpointName={adminCurrentEndpointName}
        isReadOnly={isReadOnly}
      />
    </Modal>
  );
};

export default withModal(EditAccountModal);
