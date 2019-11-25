import React from 'react';

import { Modal } from 'components';

import { modalNamesConst } from 'consts';

import { withModal, WithModalProps } from 'HOCs';
import { ChangeProfileForm } from './forms';

import { HandleChangeAdminProfile, HandleGetAccessUsers } from 'store/domains';

import { SelectValues } from 'types';

interface ChangeProfileModalProps extends WithModalProps {
  getAccessUsers: HandleGetAccessUsers;
  changeAdminProfile: HandleChangeAdminProfile;
  adminAccessUsersOptions: Array<SelectValues>;
  isChangingProfile: boolean;
  isLoadingUsers: boolean;
}

const modalName = modalNamesConst.CHANGE_PROFILE;

const ChangeProfileModal: React.FC<ChangeProfileModalProps> = ({
  getAccessUsers,
  changeAdminProfile,
  adminAccessUsersOptions,
  isChangingProfile,
  isLoadingUsers,
  closeModal,
}) => {
  React.useEffect(
    () => {
      getAccessUsers();
    },
    [getAccessUsers]
  );

  return (
    <Modal
      name={modalName}
      title="Change Profile"
      maxContainerWidth={300}
    >
      <ChangeProfileForm
        adminAccessUsersOptions={adminAccessUsersOptions}
        changeAdminProfile={changeAdminProfile}
        isLoadingUsers={isLoadingUsers}
        isChangingProfile={isChangingProfile}
        onCancel={() => closeModal(modalName)}
      />
    </Modal>
  );
};

export default withModal(ChangeProfileModal);
