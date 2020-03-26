import React from 'react';

import { Modal } from 'components';
import { IWithModal, withModal } from 'HOCs';

import { modalNamesConst } from 'consts';

import { InterfaceForm } from 'containers/Administration/Interfaces/forms';

import { ISelectValue } from 'types';

interface AddInterfaceModalProps extends IWithModal {
  institutionsOptions: Array<ISelectValue>;
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
      containerWidth="850px"
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
