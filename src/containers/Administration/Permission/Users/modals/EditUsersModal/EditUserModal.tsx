import React from 'react';

import { Modal } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';

import { DefineUsersForm } from 'containers/Administration/Permission/Users/forms';

import { AdminUserItemDetails, HandleUpdateAdminUser } from 'store/domains';

interface EditUserModalProps extends WithModalProps {
  updateAdminUser: HandleUpdateAdminUser;
  selectUserItems: Partial<AdminUserItemDetails>;
  isFormDirty: boolean;
  requires2faFlagValue: boolean;
}

const modalName = modalNamesConst.EDIT_ADMIN_USER;

const EditUserModal: React.FC<EditUserModalProps> = ({
  closeModal,
  updateAdminUser,
  selectUserItems,
  isFormDirty,
  requires2faFlagValue,
}) => {
  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );
  return (
    <Modal
      name={modalName}
      type={modalTypesConst.EDIT_MODAL}
      title="Edit User"
      maxContainerWidth={800}
      withCloseConfirmation={isFormDirty}
    >
      <DefineUsersForm
        onCancel={handleOnCancel}
        defineAdminUser={updateAdminUser}
        isEditMode={true}
        initialValues={selectUserItems}
        requires2faFlagValue={requires2faFlagValue}
      />
    </Modal>
  );
};

export default withModal(EditUserModal);
