import React from 'react';

import { Modal } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';

import { InterfaceForm } from 'containers/Administration/Interfaces/forms';

import { AdminInterfaceItemDetailsPrepared } from 'store/domains';

import { SelectValue } from 'types';

interface EditAccountModalProps extends WithModalProps {
  adminCurrentInterface: Partial<AdminInterfaceItemDetailsPrepared>;
  institutionsOptions: Array<SelectValue>;
  currentInterfaceName: string;
  isFormDirty: boolean;
}

const modalName = modalNamesConst.EDIT_INTERFACE;

const EditAccountModal: React.FC<EditAccountModalProps> = ({
  closeModal,
  adminCurrentInterface,
  institutionsOptions,
  currentInterfaceName,
  isFormDirty,
  isReadOnly,
}) => {
  const interfaceName = React.useMemo(
    () => currentInterfaceName ? `: "${currentInterfaceName}"` : '',
    [currentInterfaceName]
  );

  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  return (
    <Modal
      maxContainerWidth={850}
      title={`Edit Interface${interfaceName}`}
      name={modalName}
      type={modalTypesConst.EDIT_MODAL}
      withCloseConfirmation={isFormDirty}
    >
      <InterfaceForm
        onCancel={handleOnCancel}
        mode="edit"
        initialValues={adminCurrentInterface}
        institutionsOptions={institutionsOptions}
        currentInterfaceName={currentInterfaceName}
        isReadOnly={isReadOnly}
      />
    </Modal>
  );
};

export default withModal(EditAccountModal);
