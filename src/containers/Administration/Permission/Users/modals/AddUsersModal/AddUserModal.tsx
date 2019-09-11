import React from 'react';

import Modal from 'components/Modal';
import { modalNames } from 'consts';

import { DefineUsersForm } from 'containers/Administration/Permission/Users/forms';

import { CloseModal, HandleAddAdminUser, } from 'store/domains';

interface AddUserModalProps {
  closeModal: CloseModal;
  addAdminUser: HandleAddAdminUser;
  isFormDirty: boolean;
}

const modalName = modalNames.ADD_ADMIN_USER;

const AddAdminModal: React.FC<AddUserModalProps> = ({
  closeModal,
  addAdminUser,
  isFormDirty,
}) => {
  return (
    <Modal
      name={modalName}
      title="Add new User"
      maxContainerWidth={650}
      withCloseConfirmation={isFormDirty}
    >
      <DefineUsersForm
        onCancel={() => closeModal(modalName)}
        defineAdminUser={addAdminUser}
        isDirty={isFormDirty}
        initialValues={{
          requires2faFlag: true,
        }}
      />
    </Modal>
  );
};

export default AddAdminModal;
