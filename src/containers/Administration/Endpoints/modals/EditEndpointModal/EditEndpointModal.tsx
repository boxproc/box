import React from 'react';

import { Modal } from 'components';
import { IWithModal, withModal } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';
import { EndpointForm } from 'containers/Administration/Endpoints/forms';
import { IEndpointDetails } from 'store';
import { ISelectValue } from 'types';

interface IEditAccountModal extends IWithModal {
  currentEndpoint: Partial<IEndpointDetails>;
  currentEndpointName: string;
  institutionsOptions: Array<ISelectValue>;
  isFormDirty: boolean;
}

const modalName = modalNamesConst.EDIT_ENDPOINT;

const EditAccountModal: React.FC<IEditAccountModal> = ({
  closeModal,
  currentEndpoint,
  currentEndpointName,
  institutionsOptions,
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
        institutionsOptions={institutionsOptions}
        currentEndpointName={currentEndpointName}
        isReadOnly={isReadOnly}
      />
    </Modal>
  );
};

export default withModal(EditAccountModal);
