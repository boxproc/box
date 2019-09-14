import React from 'react';

import { Modal } from 'components';

import { modalNamesConst } from 'consts';

import { InterfaceForm } from 'containers/Administration/Interfaces/forms';

import { CloseModal } from 'store/domains';

import { SelectValues } from 'types';

interface AddInterfaceModalProps {
  closeModal: CloseModal;
  institutionsOptions: Array<SelectValues>;
  isFormDirty: boolean;
}

const modalName = modalNamesConst.ADD_ADMIN_INTERFACE;

const AddInterfaceModal: React.FC<AddInterfaceModalProps> = ({
  closeModal,
  institutionsOptions,
  isFormDirty,
}) => {
  return (
    <Modal
      maxContainerWidth={550}
      name={modalName}
      title="Add Interface"
      withCloseConfirmation={isFormDirty}
    >
      <InterfaceForm
        institutionsOptions={institutionsOptions}
        onCancel={() => closeModal(modalName)}
        mode="add"
        isDirty={isFormDirty}
      />
    </Modal>
  );
};

export default AddInterfaceModal;
