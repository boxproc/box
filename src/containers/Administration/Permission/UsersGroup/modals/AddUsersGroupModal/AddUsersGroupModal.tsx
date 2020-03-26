import React from 'react';

import { Modal } from 'components';
import { IWithModal, withModal } from 'HOCs';

import { modalNamesConst } from 'consts';

import { AddUserGroupForm } from 'containers/Administration/Permission/UsersGroup/forms';

interface AddUserModalProps extends IWithModal {
  isFormDirty: boolean;
}

const modalName = modalNamesConst.ADD_USERS_GROUP;

const AddAdminUsersGroupModal: React.FC<AddUserModalProps> = ({
  closeModal,
  isFormDirty,
}) => {
  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  return (
    <Modal
      name={modalName}
      title="Add New User Group"
      containerWidth="350px"
      withCloseConfirmation={isFormDirty}
    >
      <AddUserGroupForm onCancel={handleOnCancel} />
    </Modal>
  );
};

export default withModal(AddAdminUsersGroupModal);
