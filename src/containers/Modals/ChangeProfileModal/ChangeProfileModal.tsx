import React from 'react';

import { Modal } from 'components';

import { modalNamesConst } from 'consts';

import { ChangeProfileForm } from './forms';

import { HandleChangeAdminProfile, HandleGetAccessUsers } from 'store/domains';

import { SelectValues } from 'types';

interface ChangeProfileModalProps {
  getAccessUsers: HandleGetAccessUsers;
  changeAdminProfile: HandleChangeAdminProfile;
  adminAccessUsersOptions: Array<SelectValues>;
  isLoading: boolean;
}

const modalName = modalNamesConst.CHANGE_PROFILE_MODAL;

const ChangeProfileModal: React.FC<ChangeProfileModalProps> = ({
  getAccessUsers,
  changeAdminProfile,
  adminAccessUsersOptions,
  isLoading,
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
        isLoading={isLoading}
      />
    </Modal>
  );
};

export default ChangeProfileModal;
