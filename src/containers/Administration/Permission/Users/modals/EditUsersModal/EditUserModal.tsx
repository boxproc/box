import React from 'react';

import Modal from 'components/Modal';

import { modalNames } from 'consts';

import { DefineUsersForm } from 'containers/Administration/Permission/Users/forms';

import {
  AdminUserItemDetails,
  CloseModal,
  HandleUpdateAdminUser,
} from 'store/domains';

interface EditUserModalProps {
  closeModal: CloseModal;
  updateAdminUser: HandleUpdateAdminUser;
  selectUserItems: AdminUserItemDetails;
}

const modalName = modalNames.EDIT_ADMIN_USER;

const EditUserModal: React.FC<EditUserModalProps> = ({
  closeModal,
  updateAdminUser,
  selectUserItems,
}) => {
  return (
    <Modal
      name={modalName}
      title="Edit User"
      maxContainerWidth={650}
    >
      <DefineUsersForm
        onCancel={() => closeModal(modalName)}
        defineAdminUser={updateAdminUser}
        isDisabledUsername={true}
        initialValues={selectUserItems}
      />
    </Modal>
  );
};

export default EditUserModal;
