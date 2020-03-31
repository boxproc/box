import React from 'react';

import { Modal } from 'components';
import { IWithModal, withModal } from 'HOCs';

import { modalNamesConst } from 'consts';
import { InterfaceForm } from '../../forms';

import { ISelectValue } from 'types';

interface IAddInterfaceModal extends IWithModal {
  institutionsOptions: Array<ISelectValue>;
  isFormDirty: boolean;
}

const modalName = modalNamesConst.ADD_INTERFACE;

const AddInterfaceModal: React.FC<IAddInterfaceModal> = ({
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
