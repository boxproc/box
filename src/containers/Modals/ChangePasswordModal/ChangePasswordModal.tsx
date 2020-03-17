import React from 'react';

import { Modal, withSpinner } from 'components';

import { modalNamesConst } from 'consts';

import { withModal, WithModalProps } from 'HOCs';
import { ChangePasswordForm } from './forms';

import { HandleChangePassword } from 'store';

interface ChangeProfileModalProps extends WithModalProps {
  changePassword: HandleChangePassword;
}

const modalName = modalNamesConst.CHANGE_PASSWORD;

const ChangeProfileModal: React.FC<ChangeProfileModalProps> = ({
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
