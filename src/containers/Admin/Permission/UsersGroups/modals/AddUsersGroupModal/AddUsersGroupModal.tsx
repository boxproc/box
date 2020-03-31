import React from 'react';

import { Modal } from 'components';
import { IWithModal, withModal } from 'HOCs';

import { modalNamesConst } from 'consts';
import { AddUsersGroupForm } from '../../forms';

interface IAddUserModal extends IWithModal {
  isFormDirty: boolean;
}

const modalName = modalNamesConst.ADD_USERS_GROUP;

const AddUsersGroupModal: React.FC<IAddUserModal> = ({
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
      <AddUsersGroupForm onCancel={handleOnCancel} />
    </Modal>
  );
};

export default withModal(AddUsersGroupModal);
