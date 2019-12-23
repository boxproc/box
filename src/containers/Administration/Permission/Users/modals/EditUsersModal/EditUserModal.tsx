import React from 'react';

import { Modal } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';

import { DefineUsersForm } from 'containers/Administration/Permission/Users/forms';

import { AdminUserItemDetails } from 'store/domains';

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
  const username = React.useMemo(
    () => currentUsername ? `: "${currentUsername}"` : '',
    [currentUsername]
  );

  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  return (
    <Modal
      name={modalName}
      type={modalTypesConst.EDIT_MODAL}
      title={`Edit User${username}`}
      maxContainerWidth={750}
      withCloseConfirmation={isFormDirty}
    >
      <DefineUsersForm
        onCancel={handleOnCancel}
        isEditMode={true}
        initialValues={userDetails}
        isReadOnly={isReadOnly}
      />
    </Modal>
  );
};

export default withModal(EditUserModal);
