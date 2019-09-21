import React from 'react';

import { Modal } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst } from 'consts';

import { AddUserGroupForm } from 'containers/Administration/Permission/UsersGroup/forms';

interface AddUserModalProps extends WithModalProps { }

const modalName = modalNamesConst.ADD_ADMIN_USERS_GROUP;

const AddAdminUsersGroupModal: React.FC<AddUserModalProps> = ({
  closeModal,
}) => {
  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  return (
    <Modal
      name={modalName}
      title="Add New User Group"
      maxContainerWidth={350}
    >
      <AddUserGroupForm onCancel={handleOnCancel} />
    </Modal>
  );
};

export default withModal(AddAdminUsersGroupModal);
