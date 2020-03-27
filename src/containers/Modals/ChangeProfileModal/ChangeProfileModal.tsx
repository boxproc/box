import React from 'react';

import { Modal } from 'components';

import { modalNamesConst } from 'consts';

import { IWithModal, withModal } from 'HOCs';
import { ChangeProfileForm } from './forms';

import { HandleChangeAdminProfile, THandleGetUsernames } from 'store';

import { ISelectValue } from 'types';

interface ChangeProfileModalProps extends IWithModal {
  getUsernames: THandleGetUsernames;
  changeAdminProfile: HandleChangeAdminProfile;
  usernamesOptions: Array<ISelectValue>;
  isChangingProfile: boolean;
  isLoadingUsers: boolean;
}

const modalName = modalNamesConst.CHANGE_PROFILE;

const ChangeProfileModal: React.FC<ChangeProfileModalProps> = ({
  getUsernames,
  changeAdminProfile,
  usernamesOptions,
  isChangingProfile,
  isLoadingUsers,
  closeModal,
}) => {
  React.useEffect(
    () => {
      getUsernames();
    },
    [getUsernames]
  );

  return (
    <Modal
      name={modalName}
      title="Change Profile"
      containerWidth="300px"
    >
      <ChangeProfileForm
        usernamesOptions={usernamesOptions}
        changeAdminProfile={changeAdminProfile}
        isLoadingUsers={isLoadingUsers}
        isChangingProfile={isChangingProfile}
        onCancel={() => closeModal(modalName)}
      />
    </Modal>
  );
};

export default withModal(ChangeProfileModal);
