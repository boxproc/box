import React from 'react';

import { Modal } from 'components';
import { IWithModal, withModal } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';
import { EndpointForm } from './../../forms';

import { IEndpointDetails } from 'store';

interface IEditEndpointModal extends IWithModal {
  currentEndpoint: Partial<IEndpointDetails>;
  currentEndpointName: string;
  isFormDirty: boolean;
}

const modalName = modalNamesConst.EDIT_ENDPOINT;

const EditEndpointModal: React.FC<IEditEndpointModal> = ({
  closeModal,
  currentEndpoint,
  currentEndpointName,
  isFormDirty,
  isReadOnly,
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
        currentEndpointName={currentEndpointName}
        isReadOnly={isReadOnly}
      />
    </Modal>
  );
};

export default withModal(EditEndpointModal);
