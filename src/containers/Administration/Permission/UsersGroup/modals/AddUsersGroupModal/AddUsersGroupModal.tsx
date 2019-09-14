import React from 'react';

import { Modal, withSpinner } from 'components';

import { modalNamesConst } from 'consts';

import { AddUserGroupForm } from 'containers/Administration/Permission/UsersGroup/forms';

import { CloseModal, } from 'store/domains';

interface AddUserModalProps {
  closeModal: CloseModal;
  isDirty: boolean;
}

const modalName = modalNamesConst.ADD_ADMIN_USERS_GROUP;

const AddAdminUsersGroupModal: React.FC<AddUserModalProps> = ({
  closeModal,
  isDirty,
}) => {
  return (
    <Modal
      name={modalName}
      title="Add New User Group"
      maxContainerWidth={350}
    >
      <AddUserGroupForm
        onCancel={() => closeModal(modalName)}
        isDirty={isDirty}
      />
    </Modal>
  );
};

export default withSpinner({
  isFixed: true,
})(AddAdminUsersGroupModal);
