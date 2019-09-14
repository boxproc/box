import React from 'react';

import { Modal, withSpinner } from 'components';

import { modalNamesConst, modalTypesConst } from 'consts';

import { EditUserGroupForms } from 'containers/Administration/Permission/UsersGroup/forms';

import { CloseModal } from 'store/domains';

interface EditUsersGroupModalProps {
  closeModal: CloseModal;
  usersGroupName: string;
}

const modalName = modalNamesConst.EDIT_ADMIN_USERS_GROUP;

const EditUsersGroupModal: React.FC<EditUsersGroupModalProps> = ({
  closeModal,
  usersGroupName,
}) => {
  const groupName = usersGroupName ? `: "${usersGroupName}"` : '';

  return (
    <Modal
      name={modalName}
      type={modalTypesConst.EDIT_MODAL}
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
