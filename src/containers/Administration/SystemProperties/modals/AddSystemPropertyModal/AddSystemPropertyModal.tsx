import React from 'react';

import { Modal } from 'components';

import { modalNamesConst } from 'consts';

import { AddSystemPropertyForm } from 'containers/Administration/SystemProperties/forms';

import { CloseModal, HandleAddAdminSysProp } from 'store/domains';

interface AddSystemPropertyModalProps {
  closeModal: CloseModal;
  addAdminSysProp: HandleAddAdminSysProp;
  isDirty: boolean;
}

const modalName = modalNamesConst.ADD_ADMIN_SYSTEM_PROPERTY;

const AddSystemPropertyModal: React.FC<AddSystemPropertyModalProps> = ({
  closeModal,
  isDirty,
}) => {
  return (
    <Modal
      name={modalName}
      title="Add System Property"
      maxContainerWidth={550}
      withCloseConfirmation={isDirty}
    >
      <AddSystemPropertyForm
        isDirty={isDirty}
        onCancel={() => closeModal(modalName)}
      />
    </Modal>
  );
};

export default AddSystemPropertyModal;
