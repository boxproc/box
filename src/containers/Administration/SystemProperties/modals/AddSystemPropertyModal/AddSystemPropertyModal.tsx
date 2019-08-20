import React from 'react';

import Modal from 'components/Modal';
import { modalNames } from 'consts';

import { CloseModal, HandleAddAdminSysProp } from 'store/domains';

import { AddSystemPropertyForm } from 'containers/Administration/SystemProperties/forms';

interface AddSystemPropertyModalProps {
  closeModal: CloseModal;
  addAdminSysProp: HandleAddAdminSysProp;
  isFormDirty: boolean;
}

const modalName = modalNames.ADD_ADMIN_SYSTEM_PROPERTY;

const AddSystemPropertyModal: React.FC<AddSystemPropertyModalProps> = ({
  closeModal,
  isFormDirty,
}) => {
  return (
    <Modal
      name={modalName}
      title="Add System Property"
      maxContainerWidth={550}
      withCloseConfirmation={isFormDirty}
    >
      <AddSystemPropertyForm
        isDirty={isFormDirty}
        onCancel={() => closeModal(modalName)}
      />
    </Modal>
  );
};

export default AddSystemPropertyModal;
