import React from 'react';

import Modal from 'components/Modal';

import { modalNames } from 'consts';

import EditAccountForm from 'containers/Ledger/Accounts/editAccount/EditAccountForm';

import { CloseModal } from 'store/domains';

interface EditAccountModalProps {
  closeModal: CloseModal;
}

const EditAccountModal: React.FC<EditAccountModalProps> = ({
  closeModal,
}) => {
  const modalName = modalNames.EDIT_LEDGER_ACCOUNT;

  return (
    <Modal
      name={modalName}
      title="Account"
      minContainerHeight={870}
    >
      <EditAccountForm
        onCancel={() => closeModal(modalName)}
      />
    </Modal>
  );
};

export default EditAccountModal;
