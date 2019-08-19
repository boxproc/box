import React from 'react';

import Modal from 'components/Modal';

import { modalNames } from 'consts';

import { InterfaceForm } from 'containers/Administration/Interfaces/forms';

import { CloseModal } from 'store/domains';

import { SelectValues } from 'types';

interface AddInterfaceModalProps {
  closeModal: CloseModal;
  institutionsOptions: Array<SelectValues>;
}

const modalName = modalNames.ADD_ADMIN_INTERFACE;

const AddInterfaceModal: React.FC<AddInterfaceModalProps> = ({
  closeModal,
  institutionsOptions,
}) => {
  return (
    <Modal
      name={modalName}
      title="Add Interface"
    >
      <InterfaceForm
        institutionsOptions={institutionsOptions}
        initialValues={{
          institutionId: institutionsOptions && institutionsOptions[0],
        }}
        onCancel={() => closeModal(modalName)}
        mode="add"
      />
    </Modal>
  );
};

export default AddInterfaceModal;
