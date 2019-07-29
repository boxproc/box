import React from 'react';

import Modal from 'components/Modal';
import { modalNames } from 'consts';

import { withSpinner } from 'components/Spinner';

import { CloseModal, HandleAddAdminUsersGroups, } from 'store/domains';

// tslint:disable-next-line: max-line-length
import DefineUsersGroupForm from 'containers/Administration/Permission/UsersGroup/DefineUsersGroupForm';
import { SelectValues } from 'types';
// import { SelectValues } from 'types';

interface AddUserModalProps {
  closeModal: CloseModal;
  addAdminUsersGroup: HandleAddAdminUsersGroups;
  institutionsOptions: Array<SelectValues>;
}

const AddAdminUsersGroupModal: React.FC<AddUserModalProps> = ({
  closeModal,
  addAdminUsersGroup,
  institutionsOptions,
}) => {
  return (
    <Modal
      name={modalNames.ADD_ADMIN_USERS_GROUP}
      title="Add new User Group"
      maxContainerWidth={800}
    >
      <DefineUsersGroupForm
        onCancel={() => closeModal(modalNames.ADD_ADMIN_USERS_GROUP)}
        defineAdminUsersGroup={addAdminUsersGroup}
        institutionsOptions={institutionsOptions}
      />
    </Modal>
  );
};

export default withSpinner({
  isFixed: true,
})(AddAdminUsersGroupModal);
