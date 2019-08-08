import React from 'react';

import Modal from 'components/Modal';
import { modalNames } from 'consts';

import { CloseModal, HandleAddAdminSysProp } from 'store/domains';

// tslint:disable-next-line: max-line-length
import AddSystemPropertyForm from 'containers/Administration/SystemProperties/AddSystemPropertyForm';

interface AddSystemPropertyModalProps {
  closeModal: CloseModal;
  addAdminSysProp: HandleAddAdminSysProp;
}

const modalName = modalNames.ADD_ADMIN_SYSTEM_PROPERTY;

const AddSystemPropertyModal: React.FC<AddSystemPropertyModalProps> = ({
  closeModal,
}) => {
  return (
    <Modal
      name={modalName}
      title="Add System Property"
      maxContainerWidth={600}
    >
      <AddSystemPropertyForm
        onCancel={() => closeModal(modalName)}
      />
    </Modal>
  );
};

export default AddSystemPropertyModal;
