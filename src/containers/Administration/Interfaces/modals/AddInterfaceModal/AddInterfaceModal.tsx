import React from 'react';

import { Modal } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst } from 'consts';

import { InterfaceForm } from 'containers/Administration/Interfaces/forms';

import { SelectValue } from 'types';

interface AddInterfaceModalProps extends WithModalProps {
  institutionsOptions: Array<SelectValue>;
  isFormDirty: boolean;
}

const modalName = modalNamesConst.ADD_INTERFACE;

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
      containerWidth={850}
      name={modalName}
      title="Add Interface"
      withCloseConfirmation={isFormDirty}
    >
      <InterfaceForm
        institutionsOptions={institutionsOptions}
        onCancel={handleOnCancel}
      />
    </Modal>
  );
};

export default withModal(AddInterfaceModal);
