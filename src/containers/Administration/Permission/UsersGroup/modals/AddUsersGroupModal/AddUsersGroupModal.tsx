import React from 'react';

import Modal from 'components/Modal';
import { withSpinner } from 'components/Spinner';

import { modalNames } from 'consts';

import { AddUserGroupForm } from 'containers/Administration/Permission/UsersGroup/forms';

import { CloseModal, } from 'store/domains';

interface AddUserModalProps {
  closeModal: CloseModal;
  isFormDirty: boolean;
}

const modalName = modalNames.ADD_ADMIN_USERS_GROUP;

const AddAdminUsersGroupModal: React.FC<AddUserModalProps> = ({
  closeModal,
  isFormDirty,
}) => {
  return (
    <Modal
      name={modalName}
      title="Add New User Group"
      maxContainerWidth={350}
    >
      <AddUserGroupForm
        onCancel={() => closeModal(modalName)}
        isDirty={isFormDirty}
      />
    </Modal>
  );
};

export default withSpinner({
  isFixed: true,
})(AddAdminUsersGroupModal);
