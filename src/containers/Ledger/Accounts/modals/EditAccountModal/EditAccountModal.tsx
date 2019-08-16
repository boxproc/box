import React from 'react';

import Modal from 'components/Modal';

import { modalNames } from 'consts';

import { AccountForm } from 'containers/Ledger/Accounts/forms';

import { CloseModal, LedgerAccountItemDetailsPrepared } from 'store/domains';
import { SelectValues } from 'types';

interface EditAccountModalProps {
  closeModal: CloseModal;
  ledgerCurrentAccountAlias: string;
  ledgerCurrentAccount: Partial<LedgerAccountItemDetailsPrepared>;
  institutionsOptions: Array<SelectValues>;
}

const modalName = modalNames.EDIT_LEDGER_ACCOUNT;

const EditAccountModal: React.FC<EditAccountModalProps> = ({
  closeModal,
  ledgerCurrentAccountAlias,
  ledgerCurrentAccount,
  institutionsOptions,
}) => {
  const accountAlias = ledgerCurrentAccountAlias ? `: ${ledgerCurrentAccountAlias}` : '';

  return (
    <Modal
      name={modalName}
      title={`Account${accountAlias}`}
      maxContainerWidth={980}
      minContainerHeight={519}
    >
      <AccountForm
        onCancel={() => closeModal(modalName)}
        mode="edit"
        initialValues={ledgerCurrentAccount}
        institutionsOptions={institutionsOptions}
      />
    </Modal>
  );
};

export default EditAccountModal;
