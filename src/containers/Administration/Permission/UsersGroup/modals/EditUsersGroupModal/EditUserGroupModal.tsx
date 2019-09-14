import React from 'react';

import { Modal, withSpinner } from 'components';

import { modalNames, modalTypes } from 'consts';

import { EditUserGroupForms } from 'containers/Administration/Permission/UsersGroup/forms';

import { CloseModal } from 'store/domains';

interface EditUsersGroupModalProps {
  closeModal: CloseModal;
  usersGroupName: string;
}

const modalName = modalNames.EDIT_ADMIN_USERS_GROUP;

const EditUsersGroupModal: React.FC<EditUsersGroupModalProps> = ({
  closeModal,
  usersGroupName,
}) => {
  const groupName = usersGroupName ? `: "${usersGroupName}"` : '';

  return (
    <Modal
      name={modalName}
      type={modalTypes.EDIT_MODAL}
      title={`Edit User Group${groupName}`}
      minContainerHeight={550}
    >
      <EditUserGroupForms
        onCancel={() => closeModal(modalName)}
      />
    </Modal>
  );
};

export default withSpinner({
  isFixed: true,
})(EditUsersGroupModal);
