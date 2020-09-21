import React from 'react';

import { Modal } from 'components';
import { IWithModal, withModal } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';
import { UserForm } from './../../forms';

import { IUserDetails } from 'store';

interface IEditUserModal extends IWithModal {
  userDetails: Partial<IUserDetails>;
  isFormDirty: boolean;
  currentUsername: string;
}

const modalName = modalNamesConst.EDIT_USER;

const EditUserModal: React.FC<IEditUserModal> = ({
  closeModal,
  userDetails,
  isFormDirty,
  currentUsername,
  isReadOnly,
}) => {
  const modalTitle = React.useMemo(
    () => {
      const username = currentUsername ? `: "${currentUsername}"` : '';

      return `User${username}`;
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
