import React from 'react';

import Modal from 'components/Modal';

import { modalNames } from 'consts';

import { AccountForm } from 'containers/Ledger/Accounts/forms';

import { CloseModal } from 'store/domains';

interface AddAccountModalProps {
  closeModal: CloseModal;
}

const modalName = modalNames.EDIT_LEDGER_ACCOUNT;

const AddAccountModal: React.FC<AddAccountModalProps> = ({
  closeModal,
}) => {
  return (
    <Modal
      name={modalName}
      title="Add Account"
      maxContainerWidth={980}
      minContainerHeight={566}
    >
      <AccountForm
        onCancel={() => closeModal(modalName)}
      />
    </Modal>
  );
};

export default AddAccountModal;
