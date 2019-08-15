import React from 'react';

import Modal from 'components/Modal';
import { withSpinner } from 'components/Spinner';

import { modalNames } from 'consts';

import { AddUserGroupForm } from 'containers/Administration/Permission/UsersGroup/forms';

import { CloseModal, } from 'store/domains';

interface AddUserModalProps {
  closeModal: CloseModal;
}

const modalName = modalNames.ADD_ADMIN_USERS_GROUP;

const AddAdminUsersGroupModal: React.FC<AddUserModalProps> = ({
  closeModal,
}) => {
  return (
    <Modal
      name={modalName}
      title="Add New User Group"
      maxContainerWidth={800}
    >
      <AddUserGroupForm
        onCancel={() => closeModal(modalName)}
      />
    </Modal>
  );
};

export default withSpinner({
  isFixed: true,
})(AddAdminUsersGroupModal);
