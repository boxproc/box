import React from 'react';

import { Modal } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';

import { UserForm } from 'containers/Administration/Permission/Users/forms';

interface AddUserModalProps extends WithModalProps {
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
      type={modalTypesConst.EDIT_MODAL}
      containerWidth={750}
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
