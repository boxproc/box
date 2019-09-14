import React from 'react';

import { Modal } from 'components';

import { modalNamesConst } from 'consts';

import { DefineUsersForm } from 'containers/Administration/Permission/Users/forms';

import { CloseModal, HandleAddAdminUser, } from 'store/domains';

interface AddUserModalProps {
  closeModal: CloseModal;
  addAdminUser: HandleAddAdminUser;
  isDirty: boolean;
}

const modalName = modalNamesConst.ADD_ADMIN_USER;

const AddAdminModal: React.FC<AddUserModalProps> = ({
  closeModal,
  addAdminUser,
  isDirty,
}) => {
  return (
    <Modal
      name={modalName}
      title="Add new User"
      maxContainerWidth={650}
      withCloseConfirmation={isDirty}
    >
      <DefineUsersForm
        onCancel={() => closeModal(modalName)}
        defineAdminUser={addAdminUser}
        isDirty={isDirty}
        initialValues={{
          requires2faFlag: true,
        }}
      />
    </Modal>
  );
};

export default AddAdminModal;
