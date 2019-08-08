import React from 'react';

import Modal from 'components/Modal';

import { modalNames } from 'consts';

import EditAccountForm from 'containers/Ledger/Accounts/editAccount/EditAccountForm';

import { CloseModal } from 'store/domains';

interface EditAccountModalProps {
  closeModal: CloseModal;
  ledgerCurrentAccountAlias: string;
}

const modalName = modalNames.EDIT_LEDGER_ACCOUNT;

const EditAccountModal: React.FC<EditAccountModalProps> = ({
  closeModal,
  ledgerCurrentAccountAlias,
}) => {
  const accountAlias = ledgerCurrentAccountAlias ? `: ${ledgerCurrentAccountAlias}` : '';

  return (
    <Modal
      name={modalName}
      title={`Account${accountAlias}`}
      minContainerHeight={999}
    >
      <EditAccountForm
        onCancel={() => closeModal(modalName)}
      />
    </Modal>
  );
};

export default EditAccountModal;
