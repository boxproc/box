import React from 'react';

import { Modal } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst } from 'consts';

import { DefineUsersForm } from 'containers/Administration/Permission/Users/forms';

import { HandleAddAdminUser, } from 'store/domains';

interface AddUserModalProps extends WithModalProps {
  addAdminUser: HandleAddAdminUser;
  isFormDirty: boolean;
}

const modalName = modalNamesConst.ADD_ADMIN_USER;

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
      title="Add new User"
      maxContainerWidth={800}
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
