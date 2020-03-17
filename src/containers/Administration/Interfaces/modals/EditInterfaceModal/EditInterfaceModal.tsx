import React from 'react';

import { Modal } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';

import { InterfaceForm } from 'containers/Administration/Interfaces/forms';

import { AdminInterfaceItemDetailsPrepared } from 'store';

import { SelectValue } from 'types';

interface EditAccountModalProps extends WithModalProps {
  currentInterface: AdminInterfaceItemDetailsPrepared;
  institutionsOptions: Array<SelectValue>;
  currentInterfaceName: string;
  isFormDirty: boolean;
}

const modalName = modalNamesConst.EDIT_INTERFACE;

const EditAccountModal: React.FC<EditAccountModalProps> = ({
  closeModal,
  currentInterface,
  institutionsOptions,
  currentInterfaceName,
  isFormDirty,
  isReadOnly,
}) => {
  const interfaceName = React.useMemo(
    () => currentInterfaceName ? `: "${currentInterfaceName}"` : '',
    [currentInterfaceName]
  );

  const modalTitle = React.useMemo(
    () => `Edit Interface${interfaceName}`,
    [interfaceName]
  );

  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  return (
    <Modal
      containerWidth="850px"
      title={modalTitle}
      name={modalName}
      type={modalTypesConst.VIEWING}
      withCloseConfirmation={isFormDirty}
    >
      <InterfaceForm
        onCancel={handleOnCancel}
        isEditMode={true}
        initialValues={currentInterface}
        institutionsOptions={institutionsOptions}
        currentInterfaceName={currentInterfaceName}
        isReadOnly={isReadOnly}
      />
    </Modal>
  );
};

export default withModal(EditAccountModal);
