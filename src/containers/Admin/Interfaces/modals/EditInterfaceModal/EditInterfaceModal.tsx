import React from 'react';

import { Modal } from 'components';
import { IWithModal, withModal } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';
import { InterfaceForm } from './../../forms';

import { IInterfaceDetails } from 'store';

interface IEditInterfaceModal extends IWithModal {
  currentInterface: IInterfaceDetails;
  currentInterfaceName: string;
  isFormDirty: boolean;
}

const modalName = modalNamesConst.EDIT_INTERFACE;

const EditAccountModal: React.FC<IEditInterfaceModal> = ({
  closeModal,
  currentInterface,
  currentInterfaceName,
  isFormDirty,
  isReadOnly,
}) => {
  const interfaceName = React.useMemo(
    () => currentInterfaceName ? `: "${currentInterfaceName}"` : '',
    [currentInterfaceName]
  );

  const modalTitle = React.useMemo(
    () => `Interface${interfaceName}`,
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
        currentInterfaceName={currentInterfaceName}
        isReadOnly={isReadOnly}
      />
    </Modal>
  );
};

export default withModal(EditAccountModal);
