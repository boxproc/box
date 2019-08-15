import React from 'react';

import Modal from 'components/Modal';
import { modalNames } from 'consts';

import { withSpinner } from 'components/Spinner';

import { DefineUsersForm } from 'containers/Administration/Permission/Users/forms';

import { CloseModal, HandleAddAdminUser, } from 'store/domains';

interface AddUserModalProps {
  closeModal: CloseModal;
  addAdminUser: HandleAddAdminUser;
  cyclesEditorValue: any;
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
      maxContainerWidth={800}
    >
      <DefineUsersForm
        onCancel={() => closeModal(modalName)}
        defineAdminUser={addAdminUser}
      />
    </Modal>
  );
};

export default withSpinner({
  isFixed: true,
})(AddAdminModal);
