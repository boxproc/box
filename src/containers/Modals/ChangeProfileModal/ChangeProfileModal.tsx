import React from 'react';

import { Modal } from 'components';

import { modalNamesConst } from 'consts';

import { IWithModal, withModal } from 'HOCs';
import { ChangeProfileForm } from './forms';

import { THandleChangeProfile, THandleGetUsernames } from 'store';

import { ISelectValue } from 'types';

interface IChangeProfileModal extends IWithModal {
  getUsernames: THandleGetUsernames;
  changeProfile: THandleChangeProfile;
  usernamesOptions: Array<ISelectValue>;
  isChangingProfile: boolean;
  isLoadingUsers: boolean;
}

const modalName = modalNamesConst.CHANGE_PROFILE;

const ChangeProfileModal: React.FC<IChangeProfileModal> = ({
  getUsernames,
  changeProfile,
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
      isBluredBackdrop={true}
    >
      <ChangeProfileForm
        usernamesOptions={usernamesOptions}
        changeProfile={changeProfile}
        isLoadingUsers={isLoadingUsers}
        isChangingProfile={isChangingProfile}
        onCancel={() => closeModal(modalName)}
      />
    </Modal>
  );
};

export default withModal(ChangeProfileModal);
