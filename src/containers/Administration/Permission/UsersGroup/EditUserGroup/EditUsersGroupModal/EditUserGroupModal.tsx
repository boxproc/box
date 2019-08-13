import React from 'react';

import Modal from 'components/Modal';
import { withSpinner } from 'components/Spinner';

import { modalNames } from 'consts';

// tslint:disable-next-line: max-line-length
import EditUserGroupForms from 'containers/Administration/Permission/UsersGroup/EditUserGroup/EditUserGroupForms';
import {
  CloseModal,
} from 'store/domains';

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
      title={`Edit User Group${groupName}`}
      minContainerHeight={569}
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
