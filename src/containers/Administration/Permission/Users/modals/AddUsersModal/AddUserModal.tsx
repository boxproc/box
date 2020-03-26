import React from 'react';

import { Modal } from 'components';
import { IWithModal, withModal } from 'HOCs';

import { modalNamesConst } from 'consts';

import { UserForm } from 'containers/Administration/Permission/Users/forms';

interface AddUserModalProps extends IWithModal {
  isFormDirty: boolean;
}

const modalName = modalNamesConst.ADD_USER;

const AddAdminModal: React.FC<AddUserModalProps> = ({
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
      title="Add New User"
      containerWidth="750px"
      withCloseConfirmation={isFormDirty}
    >
      <UserForm
        onCancel={handleOnCancel}
        initialValues={{ requires2faFlag: true }}
      />
    </Modal>
  );
};

export default withModal(AddAdminModal);
