import React from 'react';

import { Modal } from 'components';

import { modalNamesConst, modalTypesConst } from 'consts';

import { DefineUsersForm } from 'containers/Administration/Permission/Users/forms';

import {
  AdminUserItemDetails,
  CloseModal,
  HandleUpdateAdminUser,
} from 'store/domains';

interface EditUserModalProps {
  closeModal: CloseModal;
  updateAdminUser: HandleUpdateAdminUser;
  selectUserItems: Partial<AdminUserItemDetails>;
  isDirty: boolean;
  requires2faFlagValue: boolean;
}

const modalName = modalNamesConst.EDIT_ADMIN_USER;

const EditUserModal: React.FC<EditUserModalProps> = ({
  closeModal,
  updateAdminUser,
  selectUserItems,
  isDirty,
  requires2faFlagValue,
}) => {
  return (
    <Modal
      name={modalName}
      type={modalTypesConst.EDIT_MODAL}
      title="Edit User"
      maxContainerWidth={650}
      withCloseConfirmation={isDirty}
    >
      <DefineUsersForm
        onCancel={() => closeModal(modalName)}
        defineAdminUser={updateAdminUser}
        isEditMode={true}
        initialValues={selectUserItems}
        isDirty={isDirty}
        requires2faFlagValue={requires2faFlagValue}
      />
    </Modal>
  );
};

export default EditUserModal;
