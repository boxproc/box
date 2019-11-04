import React from 'react';

import { Modal } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';

import { AddUserGroupForm } from 'containers/Administration/Permission/UsersGroup/forms';

interface AddUserModalProps extends WithModalProps {
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
      type={modalTypesConst.EDIT_MODAL}
      maxContainerWidth={350}
      withCloseConfirmation={isFormDirty}
    >
      <AddUserGroupForm onCancel={handleOnCancel} />
    </Modal>
  );
};

export default withModal(AddAdminUsersGroupModal);
