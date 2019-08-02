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

const EditUsersGroupModal: React.FC<EditUsersGroupModalProps> = ({
  closeModal,
  usersGroupName,

}) => {
  const groupName = usersGroupName ? `: "${usersGroupName}"` : '';

  return (
    <Modal
      name={modalNames.EDIT_ADMIN_USERS_GROUP}
      title={`Edit User Group${groupName}`}
      maxContainerWidth={700}
      minContainerHeight={790}
    >
      <EditUserGroupForms
        onCancel={() => closeModal(modalNames.EDIT_ADMIN_USERS_GROUP)}
      />
    </Modal>
  );
};

export default withSpinner({
  isFixed: true,
})(EditUsersGroupModal);
