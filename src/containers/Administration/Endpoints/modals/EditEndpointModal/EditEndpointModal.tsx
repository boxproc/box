import React from 'react';

import { Modal } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';

import { EndpointForm } from 'containers/Administration/Endpoints/forms';

import { AdminEndpointItemDetailsPrepared } from 'store';

import { ISelectValue } from 'types';

interface EditAccountModalProps extends WithModalProps {
  currentEndpoint: Partial<AdminEndpointItemDetailsPrepared>;
  institutionsOptions: Array<ISelectValue>;
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
      type={modalTypesConst.VIEWING}
      containerWidth="600px"
      withCloseConfirmation={isFormDirty}
    >
      <EndpointForm
        onCancel={handleOnCancel}
        isEditMode={true}
        initialValues={currentEndpoint}
        institutionsOptions={institutionsOptions}
        currentEndpointName={currentEndpointName}
        isReadOnly={isReadOnly}
      />
    </Modal>
  );
};

export default withModal(EditAccountModal);
