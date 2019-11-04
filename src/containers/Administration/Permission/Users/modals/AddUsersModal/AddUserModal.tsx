import React from 'react';

import { Modal } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';

import { DefineUsersForm } from 'containers/Administration/Permission/Users/forms';

import { HandleAddAdminUser, } from 'store/domains';

interface AddUserModalProps extends WithModalProps {
  addAdminUser: HandleAddAdminUser;
  isFormDirty: boolean;
}

const modalName = modalNamesConst.ADD_USER;

const AddAdminModal: React.FC<AddUserModalProps> = ({
  closeModal,
  addAdminUser,
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
      maxContainerWidth={500}
      withCloseConfirmation={isFormDirty}
    >
      <DefineUsersForm
        onCancel={handleOnCancel}
        defineAdminUser={addAdminUser}
        initialValues={{
          requires2faFlag: true,
        }}
      />
    </Modal>
  );
};

export default withModal(AddAdminModal);
