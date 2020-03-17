import React from 'react';

import { Modal } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';

import { UserForm } from 'containers/Administration/Permission/Users/forms';

import { AdminUserItemDetails } from 'store';

interface EditUserModalProps extends WithModalProps {
  userDetails: Partial<AdminUserItemDetails>;
  isFormDirty: boolean;
  currentUsername: string;
}

const modalName = modalNamesConst.EDIT_USER;

const EditUserModal: React.FC<EditUserModalProps> = ({
  closeModal,
  userDetails,
  isFormDirty,
  currentUsername,
  isReadOnly,
}) => {
  const modalTitle = React.useMemo(
    () => {
      const username = currentUsername ? `: "${currentUsername}"` : '';

      return `Edit User${username}`;
    },
    [currentUsername]
  );

  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  return (
    <Modal
      name={modalName}
      type={modalTypesConst.VIEWING}
      title={modalTitle}
      containerWidth="750px"
      withCloseConfirmation={isFormDirty}
    >
      <UserForm
        onCancel={handleOnCancel}
        isEditMode={true}
        initialValues={userDetails}
        isReadOnly={isReadOnly}
      />
    </Modal>
  );
};

export default withModal(EditUserModal);
