import React from 'react';

import { Modal } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';

import { EndpointForm } from 'containers/Administration/Endpoints/forms';

import { AdminEndpointItemDetailsPrepared } from 'store/domains';

import { SelectValue } from 'types';

interface EditAccountModalProps extends WithModalProps {
  currentEndpoint: Partial<AdminEndpointItemDetailsPrepared>;
  institutionsOptions: Array<SelectValue>;
  isFormDirty: boolean;
  currentEndpointName: string;
}

const modalName = modalNamesConst.EDIT_ENDPOINT;

const EditAccountModal: React.FC<EditAccountModalProps> = ({
  closeModal,
  isReadOnly,
  currentEndpoint,
  institutionsOptions,
  isFormDirty,
  currentEndpointName,
}) => {
  const modalTitle = React.useMemo(
    () => {
      const endpointName = currentEndpointName ? `: "${currentEndpointName}"` : '';

      return `Edit Endpoint${endpointName}`;
    },
    [currentEndpointName]
  );

  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  return (
    <Modal
      title={modalTitle}
      name={modalName}
      type={modalTypesConst.EDIT_MODAL}
      maxContainerWidth={600}
      withCloseConfirmation={isFormDirty}
    >
      <EndpointForm
        onCancel={handleOnCancel}
        mode="edit"
        initialValues={currentEndpoint}
        institutionsOptions={institutionsOptions}
        currentEndpointName={currentEndpointName}
        isReadOnly={isReadOnly}
      />
    </Modal>
  );
};

export default withModal(EditAccountModal);
