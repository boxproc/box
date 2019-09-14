import React from 'react';

import { Modal } from 'components';

import { modalNamesConst } from 'consts';

import { InterfaceForm } from 'containers/Administration/Interfaces/forms';

import { CloseModal } from 'store/domains';

import { SelectValues } from 'types';

interface AddInterfaceModalProps {
  closeModal: CloseModal;
  institutionsOptions: Array<SelectValues>;
  isDirty: boolean;
}

const modalName = modalNamesConst.ADD_ADMIN_INTERFACE;

const AddInterfaceModal: React.FC<AddInterfaceModalProps> = ({
  closeModal,
  institutionsOptions,
  isDirty,
}) => {
  return (
    <Modal
      maxContainerWidth={550}
      name={modalName}
      title="Add Interface"
      withCloseConfirmation={isDirty}
    >
      <InterfaceForm
        institutionsOptions={institutionsOptions}
        onCancel={() => closeModal(modalName)}
        mode="add"
        isDirty={isDirty}
      />
    </Modal>
  );
};

export default AddInterfaceModal;
