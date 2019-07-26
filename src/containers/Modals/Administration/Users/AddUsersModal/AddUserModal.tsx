import React from 'react';

import Modal from 'components/Modal';
import { modalNames } from 'consts';

import { withSpinner } from 'components/Spinner';

import DefineUsersForm from 'containers/Administration/Permission/Users/DefineUsersForm';

import { CloseModal, HandleAddAdminUser, } from 'store/domains';

import { SelectValues } from 'types';

interface AddUserModalProps {
  closeModal: CloseModal;
  addAdminUser: HandleAddAdminUser;
  institutionsOptions: Array<SelectValues>;
  cyclesEditorValue: any;
}

const AddAdminModal: React.FC<AddUserModalProps> = ({
  closeModal,
  addAdminUser,
}) => {
  return (
    <Modal
      name={modalNames.ADD_ADMIN_USER}
      title="Add new User"
      maxContainerWidth={800}
    >
      <DefineUsersForm
        onCancel={() => closeModal(modalNames.ADD_ADMIN_USER)}
        defineAdminUser={addAdminUser}
      />
    </Modal>
  );
};

export default withSpinner({
  isFixed: true,
})(AddAdminModal);
