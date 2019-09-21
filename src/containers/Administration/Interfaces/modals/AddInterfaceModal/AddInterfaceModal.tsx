import React from 'react';

import { Modal } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst } from 'consts';

import { InterfaceForm } from 'containers/Administration/Interfaces/forms';

import { SelectValues } from 'types';

interface AddInterfaceModalProps extends WithModalProps {
  institutionsOptions: Array<SelectValues>;
  isFormDirty: boolean;
}

const modalName = modalNamesConst.ADD_ADMIN_INTERFACE;

const AddInterfaceModal: React.FC<AddInterfaceModalProps> = ({
  closeModal,
  institutionsOptions,
  isFormDirty,
}) => {
  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  return (
    <Modal
      maxContainerWidth={550}
      name={modalName}
      title="Add Interface"
      withCloseConfirmation={isFormDirty}
    >
      <InterfaceForm
        institutionsOptions={institutionsOptions}
        onCancel={handleOnCancel}
        mode="add"
      />
    </Modal>
  );
};

export default withModal(AddInterfaceModal);
