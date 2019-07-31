import React from 'react';

import Modal from 'components/Modal';
import { withSpinner } from 'components/Spinner';

import { modalNames } from 'consts';

// tslint:disable-next-line: max-line-length
import AddUsersGroupForm from 'containers/Administration/Permission/UsersGroup/DefineUsersGroupForm';
import {
  CloseModal,
  // HandleUpdateAdminUsersGroup
} from 'store/domains';

interface EditUsersGroupModalProps {
  closeModal: CloseModal;
  // updateAdminUsersGroup: HandleUpdateAdminUsersGroup;

  selectUsersGroupItems: any;
  usersGroupValue: string;
}

const EditUsersGroupModal: React.FC<EditUsersGroupModalProps> = ({
  closeModal,
  // updateAdminUsersGroup,
  selectUsersGroupItems,
  usersGroupValue,

}) => {
  return (
    <Modal
      name={modalNames.EDIT_ADMIN_USERS_GROUP}
      title={`Edit User Group : "${usersGroupValue}"`}
      maxContainerWidth={700}
    >
      <AddUsersGroupForm
        onCancel={() => closeModal(modalNames.EDIT_ADMIN_USERS_GROUP)}
        // defineAdminUsersGroup={updateAdminUsersGroup}
        initialValues={selectUsersGroupItems}
        isDisabledInstitutions={true}

      />
    </Modal>
  );
};

export default withSpinner({
  isFixed: true,
})(EditUsersGroupModal);
