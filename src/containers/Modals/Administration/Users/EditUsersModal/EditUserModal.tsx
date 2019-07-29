import React from 'react';

import Modal from 'components/Modal';
import { withSpinner } from 'components/Spinner';

import { modalNames } from 'consts';

import AddUserForm from 'containers/Administration/Permission/Users/DefineUsersForm';
import {
  CloseModal,
  HandleUpdateAdminUser
} from 'store/domains';

interface EditUserModalProps {
  closeModal: CloseModal;
  updateAdminUser: HandleUpdateAdminUser;

  selectUserItems: any;
}

const EditUserModal: React.FC<EditUserModalProps> = ({
  closeModal,
  updateAdminUser,
  selectUserItems,

}) => {
  return (
    <Modal
      name={modalNames.EDIT_ADMIN_USER}
      title="Edit User"
      maxContainerWidth={700}
    >
      <AddUserForm
        onCancel={() => closeModal(modalNames.EDIT_ADMIN_USER)}
        defineAdminUser={updateAdminUser}
        isDisabledStatus={true}
        initialValues={selectUserItems}

      />
    </Modal>
  );
};

export default withSpinner({
  isFixed: true,
})(EditUserModal);
