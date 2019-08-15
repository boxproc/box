import React from 'react';

import Modal from 'components/Modal';
import { modalNames } from 'consts';

import { DefineUsersForm } from 'containers/Administration/Permission/Users/forms';

import { CloseModal, HandleAddAdminUser, } from 'store/domains';

interface AddUserModalProps {
  closeModal: CloseModal;
  addAdminUser: HandleAddAdminUser;
}

const modalName = modalNames.ADD_ADMIN_USER;

const AddAdminModal: React.FC<AddUserModalProps> = ({
  closeModal,
  addAdminUser,
}) => {
  return (
    <Modal
      name={modalName}
      title="Add new User"
      maxContainerWidth={650}
    >
      <DefineUsersForm
        onCancel={() => closeModal(modalName)}
        defineAdminUser={addAdminUser}
      />
    </Modal>
  );
};

export default AddAdminModal;
