import React from 'react';

import { Modal, withSpinner } from 'components';

import { modalNamesConst } from 'consts';

import { IWithModal, withModal } from 'HOCs';
import { ChangePasswordForm } from './forms';

import { THandleChangePassword } from 'store';

interface IChangeProfileModal extends IWithModal {
  changePassword: THandleChangePassword;
}

const modalName = modalNamesConst.CHANGE_PASSWORD;

const ChangeProfileModal: React.FC<IChangeProfileModal> = ({
  changePassword,
  closeModal,
}) => {
  return (
    <Modal
      name={modalName}
      title="Change Password"
      containerWidth="300px"
    >
      <ChangePasswordForm
        changePassword={changePassword}
        onCancel={() => closeModal(modalName)}
      />
    </Modal>
  );
};

export default withSpinner({
  isFixed: true,
})(
  withModal(ChangeProfileModal)
);
